const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '+254726044290'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '♔꧁ĶÊÑØÇHĔ꧂♔' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '♔꧁ĶÊÑØÇHĔ꧂♔' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === defined ? true  : process.env.SESSION_ID,"KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJEcjdVaVEwWHYxYTZ0V1ViZTRjU0V4OVNZdTVsWmkrRWJ6YU11b0hYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGVHVEdmbVhLU2NxbEtlS01DaHdLT1gvc0JJdlBIT2tJM3BzWGFhc2RYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTTF1ZkM4NWRjeVRzLzl5eVpadWthMGRqVEk1eUJnUGdrbCtndHpwaVdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcG1QTHdBN2RDNzJTSnFoQ1E4M0w0NkZaUlhGdWxiSzFnbWhGaEMxSHo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIc1paSU5aLzU5eTVNb3M4SDAyamRWaVk4emtIMlI5VFFSclRWNlpiVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYxVFpRejBHcXhBMkFUeUpuWlVERDNBcmZXYndzTGJ0V1htTnZ3eHVWMUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUY2Z0J2SWF5UXVuZ2E3WnBqdzVIT1dFRWJKOVIrbkl3MmdNNkVPL1FuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlYxTDdXcEJCdjRySDJHNU5BLzVpSDZ2NERVMUFHMTl4cFBVbkNMY00yND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFjRDk0U21iemE1c2RqY3llU082UXd0dXJvUnoyZjE3NlkwNysxNDM4eDI2cFpscldtR2FBYWlSTXV6R24yVFd5aXA5M2M1YWFpNm04cTg1QTcyTWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6IkllYURaZ3czT1RkM2E0RmxWRUVSMDRLbXpqNnkzWUk2ZWNzMEE2RVVUUU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzI2MDQ0MjkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVDNkUwNkVEQjY3RDMyN0FBM0EyRTNBNEYzNUY5MjYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcyNjgxMjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhROGQtYWdIUTAyMFFxbHUxb2p4ZmciLCJwaG9uZUlkIjoiYTE4MjQxYzUtM2RlZi00NmRhLThhYjAtNWQ5ZmQ2MTMxYjNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxGUDloZWpHdzg2WVk3Q0tEUlNVOU15WFBjQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZDRQV2FtVGszdmp1ZFJOcmZNMTgxenUwdzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRjRGMzRHRTQiLCJtZSI6eyJpZCI6IjI1NDcyNjA0NDI5MDo0OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDZ1cEw4REVJdmQ3YklHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL1IyNjI0cjZMaTE2SzFleTlCSGUvNWE4QktTRlBFZFQrQWNKYkt4b0RRQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQkFicTZ4Q2JLamI3NWxOazVSS3FTejV2N21NY1c5Y2dHTkhHNFR3RkdsY1dmY25KZWFYVDI0TjExK0VzeksyZ0RNeVNSMlBFVUZEanVxZVA5VkR5QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IkcyUGJOMXBjV3c3ZE05SG50Z0ZYa1BmeFFCeVdZWXBLYzI4OElPV1EyRjJVUkgxUzhuaWp3c2RXWTFldXc5b0VUR2Mwc1crWStaZmtlckNRUTBVUWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI2MDQ0MjkwOjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYwZHV0dUsraTR0ZWl0WHN2UVIzditXdkFTa2hUeEhVL2dIQ1d5c2FBMEEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTcyNjgxMjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlhUIn0="
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'true' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
