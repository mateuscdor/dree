/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/

const Config = require('./config');
const { default: makeWASocket, DisconnectReason, useSingleFileAuthState, fetchLatestBaileysVersion, jidNormalizedUser, makeInMemoryStore, DEFAULT_CONNECTION_CONFIG, DEFAULT_LEGACY_CONNECTION_CONFIG, } = require("Wa-Web");
const fs = require("fs");
let StringCrypto = require('string-crypto');
let PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI({
      'api_dev_key' : 'u_53edsqmFGKd02RMyQPwONVG0bIPi-R',});
const mddc=(Config.SESSION_ID)
//const mddc= ('inrl~c771a40a74b71f134142d0893799f7e7:5a51754332536255626d3854362b6351)
var m = (mddc);
let mdm = m.replaceAll("inrl~", "");

const stringToProtect = (mdm);
const password = 'inrl-team';
const { decryptString } = new StringCrypto();
decryptedPlainText =(decryptString(stringToProtect, password));


var st = (decryptedPlainText);
var decodedString =atob(st);

pastebin
  .getPaste(decodedString)
  .then(function (data) {
   fs.writeFileSync('./session.json' , data)
   return;
  });
global.user = require("./lib/database/data/user")
global.group = require("./lib/database/data/group")
global._user = JSON.parse(fs.readFileSync("./lib/database/data/user.json"))
global._group = JSON.parse(fs.readFileSync("./lib/database/data/group.json"))
global.owner = ["917591939575"];
global.mess = (type, m) => {
    let msg = { wait: 'Wait, in progress', owner: 'Perintah ini hanya dapat digunakan oleh Owner!', premium: 'Perintah ini hanya dapat digunakan oleh Premium!', group: 'Perintah ini hanya dapat digunakan di group!', private: 'Perintah ini hanya dapat digunakan di private chat!', admin: 'Perintah ini hanya dapat digunakan oleh admin group!', botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut', bot: 'Fitur ini hanya dapat diakses oleh Bot', dead: 'Fitur ini sedang dimatikan!', media: 'Reply media', error: "No Results Found" }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
const pino = require("pino");
const path = require("path");
const { Boom } = require("@hapi/boom");
const { Simple, upsert, eventsfunc } = require("./lib");
const Welcome = require("./lib/Welcome");
const jsoConfig = JSON.parse(fs.readFileSync("./lib/database/config.json"));
const events = require("./lib/perfix");
const { chatting } = eventsfunc;
const { serialize, WAConnection } = Simple;
global.mydb = {};
global.mydb.users = new Array();
global.mydb.hits = new Number();
global.isInCmd = false;
global.catchError = false;
const { state, saveState } = useSingleFileAuthState( "./session.json", pino({ level: "silent" }) );
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }),});
store.readFromFile("./lib/database/json/baileys/store_multi.json");
setInterval(() => { store.writeToFile("./lib/database/baileys/store_multi.json")}, 30 * 1000);
fs.readdirSync("./plugins").forEach((file) => {if (path.extname(file).toLowerCase() == ".js") {require(`./plugins/${file}`);}});
global.api = (name, path = "/", query = {}, apikeyqueryname) => (name in jsoConfig.APIs ? jsoConfig.APIs[name] : name) + path + (query || apikeyqueryname ? "?" + new URLSearchParams( Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: jsoConfig.APIs.apikey } : {}), }) ) : "");
const whatsappBot = async () => {
  let { version, isLatest } = await fetchLatestBaileysVersion();
  let connOptions = { markOnlineOnConnect: true, linkPreviewImageThumbnailWidth: 500, printQRInTerminal: true, browser: ["md", "Safari", "4.0.0"], logger: pino({ level: "silent" }), auth: state, version, };
  let conn = makeWASocket(connOptions);
  conn = new WAConnection(conn);
  store.bind(conn.ev);
  conn.ev.on("creds.update", saveState);
  conn.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, isNewLogin, isOnline, qr, receivedPendingNotifications, } = update;
    if (connection == "connecting") console.log("connecting to inrl-bot-md♾️");
    else if (connection == "open") console.log("Login successful! ✅️");
    else if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) { console.log(`💥 Bad Session File, Please Delete Session and Scan Again`); conn.logout(); } 
      else if (reason === DisconnectReason.connectionClosed) { console.log("💥 Connection closed, reconnecting...."); whatsappBot(); } 
      else if (reason === DisconnectReason.connectionLost) { console.log("💥 Connection Lost from Server, reconnecting..."); whatsappBot(); } 
      else if (reason === DisconnectReason.connectionReplaced) { console.log("💥 Connection Replaced, Another New Session Opened, Please Close Current Session First"); conn.logout(); } 
      else if (reason === DisconnectReason.loggedOut) { console.log(`💥 Device Logged Out, Please Scan Again And Run.`); process.exit(0); } 
      else if (reason === DisconnectReason.restartRequired) { console.log("💥 Restart Required, Restarting..."); whatsappBot(); } 
      else if (reason === DisconnectReason.timedOut) { console.log("💥 Connection TimedOut, Reconnecting..."); whatsappBot(); } 
      else conn.end(`💥 Unknown DisconnectReason: ${reason}|${connection}`);
    } else if (isOnline === true) console.log(" Online.");
    else if (isOnline === false) console.log("Offine.");
    else if (receivedPendingNotifications === true) console.log("Received Pending Notifications.");
    else if (receivedPendingNotifications === false) console.log(" Not Received Pending Notifications.");
    else if (isNewLogin === true) console.log(" New Login.");
    else if (isNewLogin === false) console.log(" Not New Login.");
    else if (qr) console.log(heh);
    else console.log("Connection...", update);
  });
  conn.ev.on("group-participants.update", async (m) => { if (events.config.setting.blockchat.includes(m.id)) return; else Welcome(conn, m);});
  conn.ev.on("messages.upsert", async (chatUpdate) => {
    global.isInCmd = false;
    let m = new serialize(conn, chatUpdate.messages[0]);
    if ((events.config.setting.blockchat.includes(m.from)) || (!m.message) || (m.key && m.key.remoteJid == "status@broadcast") || (m.key.id.startsWith("BAE5") && m.key.id.length == 16)) return;
    if (global.mydb.users.indexOf(m.sender) == -1) global.mydb.users.push(m.sender);
    await upsert(conn, m);
    await chatting(m, conn);
    try {
      events.commands.map(async (command) => {
        for (let i in command.pattern) {
          if (command.pattern[i] == m.client.command || command.on == "text") {
            global.isInCmd = true; global.mydb.hits += 1; global.catchError = false;
            await conn.sendReact(m.from, await events.reactArry("INFO"), m.key);
            await conn.sendPresenceUpdate( events.config.auto.presence.value, m.from );
            try {await command.function(m, conn);}
            catch (error) { global.catchError = true; console.log(error); }
            global.catchError ? await conn.sendReact( m.from, await events.reactArry("ERROR"), m.key ) : await conn.sendReact(m.from, command.sucReact, m.key); await conn.sendPresenceUpdate("available", m.from);
          }
        }
      });
    } catch (e) {
      console.log(e);
      sendErrorMessage(m.from,e,m.key,m,[],false);
    }
  });

  setInterval(async () => {
    var utch = new Date().toLocaleDateString("EN", { weekday: "long", year: "numeric", month: "long", day: "numeric", });
    var ov_time = new Date().toLocaleString("LK", { timeZone: "Asia/Colombo" }).split(" ")[1];
    const biography = "📅 " + utch + "\n⌚ " + ov_time + "\n\n💗 Auto Bio Powered By Whats Bot...💬\n\n👨🏼‍💻 Created By inrl-team";
    await conn.updateProfileStatus(biography);
  }, 1000 * 10);
  if (conn.user && conn.user?.id) conn.user.jid = jidNormalizedUser(conn.user?.id); conn.logger = conn.type == "legacy" ? DEFAULT_LEGACY_CONNECTION_CONFIG.logger.child({}) : DEFAULT_CONNECTION_CONFIG.logger.child({});
};

whatsappBot();
