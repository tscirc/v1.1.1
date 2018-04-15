const Discord = require("discord.js");

module.exports.run = async(bot, message, args, disabler18) => {
	if(args){
	if(args.length > 2){		
		let z = ['Fucking oath YES','Oh Hell Nawwww','maybe...just kidding, you are absolutely fucked','Hmmmm Maybe Baby ;)','Lick my clit first then I will answer'];
		let x = Math.floor((Math.random() * z.length));

		if(x===z.length-1 && disabler18 === false){
			let embed = new Discord.RichEmbed().setImage("https://image.ibb.co/g4RWAS/xx.png",10,10);
			message.channel.send({embed});
		}
		message.reply(z[x]);
	} else if (args.length < 3){	
		message.reply("And your question is.....?");		
	} 
}
}
module.exports.help = {
	name: "8ball",
	usage: "8ball <QUESTION>"
}




