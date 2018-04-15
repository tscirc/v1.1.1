const Discord = require("discord.js");
const botSettings = require("../botsettings.json");
var disabler18Check = botSettings.disabler18;
module.exports.run = async(bot, message, args) => {
	console.log(disabler18Check);
	let can_manage_chans = message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS");
		if(can_manage_chans){	
			if(disabler18Check==false){
				message.channel.send("Explicit content is allowed");		
			} else if (disabler18Check==true){

				message.channel.send("Explicit content is not allowed");		 	
			} else {
			message.reply("You do not have permission to use this function");
		}
	}
	}
module.exports.help = {
	name: "r18"
}




