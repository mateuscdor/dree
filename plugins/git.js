const bot = require("../lib/perfix");
const lang = bot.getString("github");
const axios = require("axios");

bot(
  {
    pattern: 'github?(.*)',
    desc: github link,
    usage: '<userName>',
    sucReact: "💻",
    category: ["search", "all"],
  },
  async (message, client) => {
    const uName = message.client.text;

    if (!uName) {
      global.catchError = true;
      return await client.sendMessage( message.from, { text: "https://github.com/inrl-official/inrl-bot-md") }, { quoted: message } );
    }

    await axios.get(`${bot.config.api.github.domain}/users/${uName}`)
      .then(async (response) => {
        const { login, avatar_url, html_url, twitter_username, bio, name, company, public_repos, public_gists, followers, location, following, created_at, blog, type, email, updated_at, } = response.data;

        if (response.data.message) {
          global.catchError = true;
          return await client.sendErrorMessage( message.from, response.data.message, message.key, message );
        }

        const msg ="inrl-bot-md"

        await client.sendMessage( message.from, { image: { url: avatar_url }, caption: msg + "\n" + bot.config.exif.footer,}, { quoted: message, });
        global.catchError = false;
      })
      .catch(async (err) => {
        (global.catchError = true),
          await client.sendErrorMessage( message.from, "git is not define"+ "\n\n" + err, message.key, message );
      });
  }
);
