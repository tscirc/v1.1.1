module.exports.run = async(bot, message, messageArray) => {	
const botSettings = require("../botsettings.json");

	var temp ="";
		for (var i = 0; i < messageArray.length; i++) {
			temp = messageArray[i].toLowerCase();
			if (temp==="hello" ||temp==="hi" ||temp==="hey"){
				let z = ['Nice shoes.... wana fuck?','you smell like piss','whats up sweet thang','Your happiness is killing me, go sit in the corner','Oh look we have a sarcastic bitch over here'];
				let x = Math.floor((Math.random() * z.length));
				message.reply(z[x]);
				break;
			}
		}
		for (var i = 1; i < messageArray.length-1; i++) {
			temp = messageArray[i-1].toLowerCase() + " " + messageArray[i].toLowerCase() + " " + messageArray[i+1].toLowerCase();
			if (temp === "i love you" || temp === "i love u" || temp === "i luv u"){
				let z = ['Did you just say you love me? Pssssh you pussy','oh get a room','I love you so fucking much i just want to pinch your nipples','you know im into deep anal penetration then taking the shit and rubbing it all over myself and my partner... still love me because i love you :D' ,'Oh please, go sit in the corner and masturbate, just dont look at me','Oh look we have a sarcastic bitch over here'];
				let x = Math.floor((Math.random() * z.length));
				message.reply(z[x]);
				break;
			}			

		}
		if(messageArray.length > 3){
			temp = messageArray[0].toLowerCase() + " " + messageArray[1].toLowerCase() + " " + messageArray[2].toLowerCase()+ " " + messageArray[3].toLowerCase();
			if (temp === "who is your daddy" || temp === "who is your daddy?"){
				if(message.author.username+message.author.discriminator === botSettings.botOwner){
					message.reply("You are my daddy :)");
				} else {message.reply("LOL. YOU ARE FUNNY");
			}				
		}
	}
}