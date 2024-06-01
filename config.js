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
  sessionName:  process.env.SESSION_ID === defined ? "KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBpQzNMNU1PRE1yUkEwTjFDNnIrVmRWU0dPSU5PWWF5dWhwTGhDUnhYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0lSYVJpR0w4SGZBaEo4SVdLYWJDNDdkZkZYNDRJaXcwNldqS2VVSGsyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT2tOeUttamVWb1h4T1dZODJIWVNHRnVNRjhRSHRnNUt2WkJvdmVMTVZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT3E1Skp1aWhSRUJWUFc1KzNLN2wvZUxBc2JiTWhZemhHYUh3dE9HUkhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHT1MrMGtqWEFXTDJXeEF1N1FtM1VzS0NnREo3TkZXblI0VzJFbVBWVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBacTYrRWZJMlRrVHJXZTFKUHpYWUpvSUp4aGRJZlZiVU5OTmpKTUxtR1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEF3ZExsQXNRZjdaZGlEMHhoVnlIc0RaQnFKWGNOaTduK0E0Sm54VW9rOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamhhcmpsS3BSL0ZIUzBWVUpCSktvUXJncFBTaXVXckoyaUlzYTI4NXlERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPRTMzeW15em9TY1pUZzh3VEZxRktIaUZOeFgrZ282V002UUcrN0lCU1hQQnVEdndpekNvZCtDMDA2akF0eERnaE5aMVZMRE1OMkIxbWo0NW1LRUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJpS1pKRGcxRm92ZkdJaHV2TUEzUUhhSnhoVldwZU1iYlIxRlRLMjhQNDBjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyVHJRWEZSLVJQT2llWEJWZGNBMlZBIiwicGhvbmVJZCI6ImEyNjNmMzYyLTE1ODctNDQwYS1hMTEwLWU4M2ViMGYzY2ZlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT3hzemxSbDB4QXhxT0FzeTU2LzkvNjJFa1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWdwcXlTRnJkNXN0am94VWp2QjhwV3d4TDFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdEUFJLWVoxIiwibWUiOnsiaWQiOiIyNTQ3MjYwNDQyOTA6NDdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x5dXBMOERFS0NaN2JJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9SMjYyNHI2TGkxNksxZXk5QkhlLzVhOEJLU0ZQRWRUK0FjSmJLeG9EUUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9uN3FNV3UvdEtDa1ZobEVkbGJKTnR6K3NWTHhjY3RVNm14SERQK0NnUXFBR1hRRTBKd1NMY3hIUWtmUUcyaW1yampFLzdyVEdJa293VTVNVi9xUkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnN1BXcGRGbnYrM085VmJnSG9XVjlCeXJTVVZLVys0bjlseWE2eVRhM2pGWHhFUm9ObDN2ZUtvMjhQdHZQL0d5UktIV25SMDUydEFPbkpyVkFXRkJCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyNjA0NDI5MDo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMGR1dHVLK2k0dGVpdFhzdlFSM3YrV3ZBU2toVHhIVS9nSENXeXNhQTBBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3MjU5NDM4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpYVCJ9"  : process.env.SESSION_ID,
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
