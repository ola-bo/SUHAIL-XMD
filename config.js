const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349046377550";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_38_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjYzQ1ZPdjZ3QUJiQ1hTVERVNUxxMFc1dDd0bysvUS8ySTZLK0tFTHFuZ2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJrc29iazRjUmthOW14SGhPbUZCVlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTliYWZjNWYtZTE5NC00ZWZjLTliZGQtYjlmZDcwZWEzZjBhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAyMDksXG4gICAgICAxNDAsXG4gICAgICAxNTYsXG4gICAgICAxMzEsXG4gICAgICAxNzgsXG4gICAgICAxNSxcbiAgICAgIDIzNCxcbiAgICAgIDE1MCxcbiAgICAgIDcxLFxuICAgICAgMTM3LFxuICAgICAgMTIsXG4gICAgICAyMDMsXG4gICAgICAzNixcbiAgICAgIDMsXG4gICAgICAxNDksXG4gICAgICAyNTEsXG4gICAgICAxNzYsXG4gICAgICA0MSxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICA5NyxcbiAgICAgIDE3NSxcbiAgICAgIDEwMSxcbiAgICAgIDYyLFxuICAgICAgMTYwLFxuICAgICAgMTI2LFxuICAgICAgMjIzLFxuICAgICAgMTA5LFxuICAgICAgMTI1LFxuICAgICAgMTE1LFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICA1MSxcbiAgICAgIDE3NyxcbiAgICAgIDIwMyxcbiAgICAgIDk5LFxuICAgICAgNjMsXG4gICAgICAxNDcsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODFaNDRLTDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDYzNzc1NTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODkyMDY3MDU2NjAwNTA6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcms5SllDRU8vTm43Z0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIisyVE5saFo0NWxFZTkyQkRxUTFwK1F0Q3JnTkFLa2ZIZFIvSVFpM2tpRW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSWdGVnVubitjZHRMRW1COEtrMStCS3gzM1dIT28rcGlXbzBxVFdmb3pTNjY5WGdSQmx5VHczNzB0MHRldEd4S0JqVkd0d0FsOStpTHhublhjR05NQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidmxRTFpsVWo0NmZjYnVPRlQ1eEdmWDBMYmtzeHFrNWpVMm96MloyTXcyMGhVRTlvS0xhS3hXL1c1SGlSYS9pczJtWFZRNWVja3o3TEozeWdDZXhTRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0NjM3NzU1MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODU3MTEyNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
