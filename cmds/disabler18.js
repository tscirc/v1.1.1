const Discord = require("discord.js");
const botSettings = require("../botsettings.json");
const fs = require("fs");
var filename = "../botsettings.json"
var disabler18Check = botSettings.disabler18;

module.exports.run = async(bot, message, args) => {
	let can_manage_chans = message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS");
		if(can_manage_chans){	
			if(disabler18Check==true){
				message.channel.send("Explicit content was already disabled");		
			} else if(disabler18Check==false) {
				fs.readFile(filename, (err, buffer) => {
				    if (err){
				        console.log(err);
				    } else {
				    var data = JSON.parse(buffer); //now it an object
				    console.log("1ST \n" + disabler18Check);
				    data.disabler18Check = true;
				    console.log("1ST \n" + disabler18Check);
				    //data.push('disabler18: ' + true);

				    fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
				        if (err){ 
				        	return console.error('File write error:', err);
				    }
				        	else{
				        		message.channel.send("Disabled explicit content");	
				        	}
				      })
				}});
					 
			}
		} else {
			message.reply("You do not have permission to use this function");
		}
	}
module.exports.help = {
	name: "disabler18"
}




