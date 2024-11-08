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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_13_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3cFR5N0FZcWRTY0I4UVg2ZnRUdzI3Z2VMdzZKQ3RRS0U2ZzVHeUVVUmpvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOSnVpNWNxcFN6eXdPZnAwbk12c3JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1NjVhZjcwLTRkYWUtNDZjNC1hZDM0LWIyYjBhY2NjMDk0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMDIsXG4gICAgICAyMTQsXG4gICAgICAxODYsXG4gICAgICAyMjcsXG4gICAgICAxMjAsXG4gICAgICAxMzgsXG4gICAgICAxNjUsXG4gICAgICAxNzksXG4gICAgICAyMzcsXG4gICAgICAyMjcsXG4gICAgICAyMjAsXG4gICAgICAxOTQsXG4gICAgICAyMDgsXG4gICAgICA1MixcbiAgICAgIDE2MSxcbiAgICAgIDIzNCxcbiAgICAgIDEwMSxcbiAgICAgIDQ3LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDI0NyxcbiAgICAgIDYwLFxuICAgICAgMTUwLFxuICAgICAgMTU4LFxuICAgICAgMjE5LFxuICAgICAgMTExLFxuICAgICAgMzgsXG4gICAgICAzNixcbiAgICAgIDIzMixcbiAgICAgIDQ1LFxuICAgICAgNDYsXG4gICAgICAyNDEsXG4gICAgICA2MixcbiAgICAgIDE0MixcbiAgICAgIDIxMixcbiAgICAgIDQxLFxuICAgICAgMjQ2LFxuICAgICAgNTYsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQckRtNGNIRVBMMnRMa0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZRSWFQVnBGejZzYzhZbm50cXB3RjF6ZjgrMHAySUVVYjVZVi9VMmVvMmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmlXN1VvaFBMcHVENy9ETUZGY1pBRW9TbWo5WFdkT1R2SzdXLzRMMHk4Vnp3Zm5ITFFyVVVRN21wa3EzWjNyeGw5Ry94ZXE2UTJ0akdwNDJEL3hOQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUl6UE81amw2Z09iTVMvYjZHbkY2cVJBS0o4cnVKMFUzM0hIWkNRcGNjVlFLMnA2QTBja1RTQlozRHl2UXBQWE5yL20xRnZ2aGhZbU8zYnU0RkR2aFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ2Mzc3NTUwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5MjA2NzA1NjYwMDUwOjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ2Mzc3NTUwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDE3NTkwXG59Igp9"  // PUT your SESSION_ID 


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
