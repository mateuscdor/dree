/* Copyright (C) 2020 INrlTeam.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

inrl-md

*/
const _0x3a7fb6=_0xb942;(function(_0x1f7b44,_0x33aeab){const _0x3811af=_0xb942,_0xf7961=_0x1f7b44();while(!![]){try{const _0x430c88=-parseInt(_0x3811af(0xc1))/0x1+parseInt(_0x3811af(0xeb))/0x2*(parseInt(_0x3811af(0xcf))/0x3)+-parseInt(_0x3811af(0x8e))/0x4*(-parseInt(_0x3811af(0xe7))/0x5)+parseInt(_0x3811af(0xb1))/0x6+-parseInt(_0x3811af(0xd3))/0x7*(-parseInt(_0x3811af(0x95))/0x8)+-parseInt(_0x3811af(0xcd))/0x9*(parseInt(_0x3811af(0xce))/0xa)+parseInt(_0x3811af(0xd9))/0xb;if(_0x430c88===_0x33aeab)break;else _0xf7961['push'](_0xf7961['shift']());}catch(_0x1680ec){_0xf7961['push'](_0xf7961['shift']());}}}(_0x50a3,0x77de9),require('./lib/global'));const Config=require(_0x3a7fb6(0xed)),{default:makeWASocket,DisconnectReason,useSingleFileAuthState,fetchLatestBaileysVersion,jidNormalizedUser,makeInMemoryStore,DEFAULT_CONNECTION_CONFIG,DEFAULT_LEGACY_CONNECTION_CONFIG}=require('Wa-Web'),fs=require('fs');let StringCrypto=require(_0x3a7fb6(0xba)),PastebinAPI=require(_0x3a7fb6(0xdb)),pastebin=new PastebinAPI({'api_dev_key':'u_53edsqmFGKd02RMyQPwONVG0bIPi-R'});const mddc=Config[_0x3a7fb6(0xcc)];var m=mddc;function _0x50a3(){const _0x330811=['46284LDLmoI','config','inrl-team','Received\x20Pending\x20Notifications.','sucReact','.js','reactArry','44824noMzBZ','\x20New\x20Login.','inrl~','jid','Connection...','text','sendReact','timedOut','error','./lib/perfix','pattern','restartRequired','key','legacy','messages.upsert','end','loggedOut','startsWith','exit','users','setting','toLocaleDateString','connecting\x20to\x20inrl-bot-md♾️','indexOf','./plugins/','silent','💥\x20Connection\x20closed,\x20reconnecting....','long','4899156GYkIOx','remoteJid','catchError','\x20Online.','sender','includes','split','./session.json','💥\x20Unknown\x20DisconnectReason:\x20','string-crypto','💥\x20Restart\x20Required,\x20Restarting...','log','writeToFile','blockchat','extname','writeFileSync','435988yaEZhD','pino','hits','output','Asia/Colombo','\x20Not\x20New\x20Login.','commands','4.0.0','connectionClosed','getPaste','logger','SESSION_ID','34254DrwzUe','2460vjLAUa','187719cfRtYx','📅\x20','then','logout','329LMeDVe','mydb','type','readFileSync','BAE5','./lib/database/config.json','5967786Krnahx','sendPresenceUpdate','pastebin-js','INFO','entries','map','💥\x20Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','path','ERROR','value','\x0a\x0a💗\x20Auto\x20Bio\x20Powered\x20By\x20Whats\x20Bot...💬\x0a\x0a👨🏼‍💻\x20Created\x20By\x20inrl-team','💥\x20Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','from','user','50WpdUsN','Offine.','./lib','toLocaleString','4DXjEDI','APIs','./config','creds.update','isInCmd','length','bind','statusCode','toLowerCase','close','open','connectionLost','updateProfileStatus','./plugins','numeric','status@broadcast','./lib/Welcome','child','apikey'];_0x50a3=function(){return _0x330811;};return _0x50a3();}let mdm=m['replaceAll'](_0x3a7fb6(0x97),'');function _0xb942(_0x26778b,_0x40d2b6){const _0x50a376=_0x50a3();return _0xb942=function(_0xb9427f,_0x476d92){_0xb9427f=_0xb9427f-0x7e;let _0x4fbd5f=_0x50a376[_0xb9427f];return _0x4fbd5f;},_0xb942(_0x26778b,_0x40d2b6);}const stringToProtect=mdm,password=_0x3a7fb6(0x90),{decryptString}=new StringCrypto();decryptedPlainText=decryptString(stringToProtect,password);var st=decryptedPlainText,decodedString=atob(st);pastebin[_0x3a7fb6(0xca)](decodedString)[_0x3a7fb6(0xd1)](function(_0x2a94c){const _0x157880=_0x3a7fb6;fs[_0x157880(0xc0)](_0x157880(0xb8),_0x2a94c);return;});const pino=require(_0x3a7fb6(0xc2)),path=require(_0x3a7fb6(0xe0)),{Boom}=require('@hapi/boom'),{Simple,upsert,eventsfunc}=require(_0x3a7fb6(0xe9)),Welcome=require(_0x3a7fb6(0x8b)),jsoConfig=JSON['parse'](fs[_0x3a7fb6(0xd6)](_0x3a7fb6(0xd8))),events=require(_0x3a7fb6(0x9e)),{chatting}=eventsfunc,{serialize,WAConnection}=Simple;global['mydb']={},global[_0x3a7fb6(0xd4)][_0x3a7fb6(0xa8)]=new Array(),global[_0x3a7fb6(0xd4)][_0x3a7fb6(0xc3)]=new Number(),global['isInCmd']=![],global[_0x3a7fb6(0xb3)]=![];const {state,saveState}=useSingleFileAuthState('./session.json',pino({'level':'silent'})),store=makeInMemoryStore({'logger':pino()['child']({'level':'silent','stream':'store'})});store['readFromFile']('./lib/database/json/baileys/store_multi.json'),setInterval(()=>{const _0x4d6356=_0x3a7fb6;store[_0x4d6356(0xbd)]('./lib/database/baileys/store_multi.json');},0x1e*0x3e8),fs['readdirSync'](_0x3a7fb6(0x88))['forEach'](_0xb527fa=>{const _0x32ea0c=_0x3a7fb6;path[_0x32ea0c(0xbf)](_0xb527fa)[_0x32ea0c(0x83)]()==_0x32ea0c(0x93)&&require(_0x32ea0c(0xad)+_0xb527fa);}),global['api']=(_0x379f0f,_0x1fe52b='/',_0x4189bd={},_0x4038ae)=>(_0x379f0f in jsoConfig[_0x3a7fb6(0xec)]?jsoConfig['APIs'][_0x379f0f]:_0x379f0f)+_0x1fe52b+(_0x4189bd||_0x4038ae?'?'+new URLSearchParams(Object[_0x3a7fb6(0xdd)]({..._0x4189bd,..._0x4038ae?{[_0x4038ae]:jsoConfig[_0x3a7fb6(0xec)][_0x3a7fb6(0x8d)]}:{}})):'');const whatsappBot=async()=>{const _0x56c2ba=_0x3a7fb6;let {version:_0x5e8851,isLatest:_0x524a2b}=await fetchLatestBaileysVersion(),_0x21e459={'markOnlineOnConnect':!![],'linkPreviewImageThumbnailWidth':0x1f4,'printQRInTerminal':!![],'browser':['md','Safari',_0x56c2ba(0xc8)],'logger':pino({'level':_0x56c2ba(0xae)}),'auth':state,'version':_0x5e8851},_0x261f57=makeWASocket(_0x21e459);_0x261f57=new WAConnection(_0x261f57),store[_0x56c2ba(0x81)](_0x261f57['ev']),_0x261f57['ev']['on'](_0x56c2ba(0x7e),saveState),_0x261f57['ev']['on']('connection.update',async _0x10c87c=>{const _0x4dc90a=_0x56c2ba,{lastDisconnect:_0x3698bc,connection:_0x348dca,isNewLogin:_0x34fda7,isOnline:_0x4c1fd7,qr:_0x422a0a,receivedPendingNotifications:_0x108c6d}=_0x10c87c;if(_0x348dca=='connecting')console[_0x4dc90a(0xbc)](_0x4dc90a(0xab));else{if(_0x348dca==_0x4dc90a(0x85))console[_0x4dc90a(0xbc)]('Login\x20successful!\x20✅️');else{if(_0x348dca==_0x4dc90a(0x84)){let _0x4dcdf5=new Boom(_0x3698bc?.[_0x4dc90a(0x9d)])?.[_0x4dc90a(0xc4)][_0x4dc90a(0x82)];if(_0x4dcdf5===DisconnectReason['badSession'])console[_0x4dc90a(0xbc)](_0x4dc90a(0xe4)),_0x261f57['logout']();else{if(_0x4dcdf5===DisconnectReason[_0x4dc90a(0xc9)])console[_0x4dc90a(0xbc)](_0x4dc90a(0xaf)),whatsappBot();else{if(_0x4dcdf5===DisconnectReason[_0x4dc90a(0x86)])console[_0x4dc90a(0xbc)]('💥\x20Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),whatsappBot();else{if(_0x4dcdf5===DisconnectReason['connectionReplaced'])console[_0x4dc90a(0xbc)]('💥\x20Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),_0x261f57[_0x4dc90a(0xd2)]();else{if(_0x4dcdf5===DisconnectReason[_0x4dc90a(0xa5)])console[_0x4dc90a(0xbc)](_0x4dc90a(0xdf)),process[_0x4dc90a(0xa7)](0x0);else{if(_0x4dcdf5===DisconnectReason[_0x4dc90a(0xa0)])console[_0x4dc90a(0xbc)](_0x4dc90a(0xbb)),whatsappBot();else{if(_0x4dcdf5===DisconnectReason[_0x4dc90a(0x9c)])console[_0x4dc90a(0xbc)]('💥\x20Connection\x20TimedOut,\x20Reconnecting...'),whatsappBot();else _0x261f57[_0x4dc90a(0xa4)](_0x4dc90a(0xb9)+_0x4dcdf5+'|'+_0x348dca);}}}}}}}else{if(_0x4c1fd7===!![])console[_0x4dc90a(0xbc)](_0x4dc90a(0xb4));else{if(_0x4c1fd7===![])console[_0x4dc90a(0xbc)](_0x4dc90a(0xe8));else{if(_0x108c6d===!![])console['log'](_0x4dc90a(0x91));else{if(_0x108c6d===![])console[_0x4dc90a(0xbc)]('\x20Not\x20Received\x20Pending\x20Notifications.');else{if(_0x34fda7===!![])console[_0x4dc90a(0xbc)](_0x4dc90a(0x96));else{if(_0x34fda7===![])console[_0x4dc90a(0xbc)](_0x4dc90a(0xc6));else{if(_0x422a0a)console['log'](heh);else console['log'](_0x4dc90a(0x99),_0x10c87c);}}}}}}}}}}),_0x261f57['ev']['on']('group-participants.update',async _0x3b60fe=>{const _0x26b5f2=_0x56c2ba;if(events[_0x26b5f2(0x8f)][_0x26b5f2(0xa9)][_0x26b5f2(0xbe)][_0x26b5f2(0xb6)](_0x3b60fe['id']))return;else Welcome(_0x261f57,_0x3b60fe);}),_0x261f57['ev']['on'](_0x56c2ba(0xa3),async _0x1409a5=>{const _0xeb8185=_0x56c2ba;global[_0xeb8185(0x7f)]=![];let _0x2eac62=new serialize(_0x261f57,_0x1409a5['messages'][0x0]);if(events[_0xeb8185(0x8f)]['setting']['blockchat'][_0xeb8185(0xb6)](_0x2eac62[_0xeb8185(0xe5)])||!_0x2eac62['message']||_0x2eac62[_0xeb8185(0xa1)]&&_0x2eac62[_0xeb8185(0xa1)][_0xeb8185(0xb2)]==_0xeb8185(0x8a)||_0x2eac62[_0xeb8185(0xa1)]['id'][_0xeb8185(0xa6)](_0xeb8185(0xd7))&&_0x2eac62['key']['id'][_0xeb8185(0x80)]==0x10)return;if(global[_0xeb8185(0xd4)][_0xeb8185(0xa8)][_0xeb8185(0xac)](_0x2eac62[_0xeb8185(0xb5)])==-0x1)global['mydb']['users']['push'](_0x2eac62[_0xeb8185(0xb5)]);await upsert(_0x261f57,_0x2eac62),await chatting(_0x2eac62,_0x261f57);try{events[_0xeb8185(0xc7)][_0xeb8185(0xde)](async _0x2e78f8=>{const _0x16714e=_0xeb8185;for(let _0x490189 in _0x2e78f8[_0x16714e(0x9f)]){if(_0x2e78f8['pattern'][_0x490189]==_0x2eac62['client']['command']||_0x2e78f8['on']==_0x16714e(0x9a)){global[_0x16714e(0x7f)]=!![],global[_0x16714e(0xd4)][_0x16714e(0xc3)]+=0x1,global['catchError']=![],await _0x261f57[_0x16714e(0x9b)](_0x2eac62[_0x16714e(0xe5)],await events[_0x16714e(0x94)](_0x16714e(0xdc)),_0x2eac62['key']),await _0x261f57[_0x16714e(0xda)](events['config']['auto']['presence'][_0x16714e(0xe2)],_0x2eac62[_0x16714e(0xe5)]);try{await _0x2e78f8['function'](_0x2eac62,_0x261f57);}catch(_0xd943f1){global[_0x16714e(0xb3)]=!![],console[_0x16714e(0xbc)](_0xd943f1);}global[_0x16714e(0xb3)]?await _0x261f57['sendReact'](_0x2eac62[_0x16714e(0xe5)],await events[_0x16714e(0x94)](_0x16714e(0xe1)),_0x2eac62[_0x16714e(0xa1)]):await _0x261f57[_0x16714e(0x9b)](_0x2eac62[_0x16714e(0xe5)],_0x2e78f8[_0x16714e(0x92)],_0x2eac62[_0x16714e(0xa1)]),await _0x261f57[_0x16714e(0xda)]('available',_0x2eac62[_0x16714e(0xe5)]);}}});}catch(_0x40186b){console[_0xeb8185(0xbc)](_0x40186b),sendErrorMessage(_0x2eac62[_0xeb8185(0xe5)],_0x40186b,_0x2eac62['key'],_0x2eac62,[],![]);}}),setInterval(async()=>{const _0x198fae=_0x56c2ba;var _0x37d7df=new Date()[_0x198fae(0xaa)]('EN',{'weekday':_0x198fae(0xb0),'year':'numeric','month':_0x198fae(0xb0),'day':_0x198fae(0x89)}),_0x43b949=new Date()[_0x198fae(0xea)]('LK',{'timeZone':_0x198fae(0xc5)})[_0x198fae(0xb7)]('\x20')[0x1];const _0x49ce36=_0x198fae(0xd0)+_0x37d7df+'\x0a⌚\x20'+_0x43b949+_0x198fae(0xe3);await _0x261f57[_0x198fae(0x87)](_0x49ce36);},0x3e8*0xa);if(_0x261f57['user']&&_0x261f57[_0x56c2ba(0xe6)]?.['id'])_0x261f57[_0x56c2ba(0xe6)][_0x56c2ba(0x98)]=jidNormalizedUser(_0x261f57[_0x56c2ba(0xe6)]?.['id']);_0x261f57[_0x56c2ba(0xcb)]=_0x261f57[_0x56c2ba(0xd5)]==_0x56c2ba(0xa2)?DEFAULT_LEGACY_CONNECTION_CONFIG['logger'][_0x56c2ba(0x8c)]({}):DEFAULT_CONNECTION_CONFIG[_0x56c2ba(0xcb)][_0x56c2ba(0x8c)]({});};whatsappBot();
//thanks to all who helped to create this//
