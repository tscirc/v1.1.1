const botSettings = require("./botsettings.json");
const sqlSettings = require("./sqlsettings.json");
const Discord = require("discord.js");
const fs = require("fs");
const mysql = require('mysql');
const bot = new Discord.Client({disableEveryone: true}); 
const prefix = botSettings.prefix;
bot.commands = new Discord.Collection();
var boolHello = false;
var temp ="";
disabler18 = true;


//const sql = require("sqlite");
//sql.open("./botSettings.sqlite");

//const embed = new Discord.RichEmbed()
fs.readdir("./cmds", (err, files) => {
	if(err) console.error(err);
	let jsfiles = files.filter(f => f.split(".").pop() === "js"); // "test.hello.js" ["test","hello","js"] - checking if file extension is js
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}
	console.log('Loading ' + jsfiles.length + ' commands!');
	jsfiles.forEach((f,i) => {
		let props = require('./cmds/' + f);
		console.log(i+1 + ': ' + f  + ' loaded');
		bot.commands.set(f,props);
	});

});


bot.on("ready", async () => {
	console.log(bot.user.username + " is ready!");

	try{
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);	
	} catch(e) {
		console.log(e.stack);
	}
});

//import settings.js
// const db_config = {
//     hostname : "localhost",
//     user : sqlSettings.user, //username
//     password : sqlSettings.password, //password
//     database : sqlSettings.database //db
// }

// //create db connection pool
// const con = mysql.createPool(db_config);

// async function query(sql, params) {
//     const connection = await con.getConnectionAsync();
//     return connection.queryAsync(sql,params).then(rows => rows).finally(() => connection.release());
// }
//     console.log(query(con, "CREATE DATABASE sqlSettings.database"));
bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;



	// sql.get(`SELECT * FROM botsettings WHERE settingsid ="disabler18"`).then(row => {
	//     if (!row) {
	//       sql.run("INSERT INTO botsettings (settingsId, bool) VALUES (?, ?)", [disabler18, true]);
	//     } //else {
	//       //sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
	//     //}
	//   }).catch(() => {
	//     console.error;
	//     sql.run("CREATE TABLE IF NOT EXISTS botsettings (settingsId TEXT, points BOOLEAN)").then(() => {
	//       sql.run("INSERT INTO botsettings (settingsId, bool) VALUES (?, ?)", [disabler18, true]);
	//     });
	//   });





	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0].toLowerCase();
	let args = messageArray.slice(1);

	let disabler18 = botSettings.disabler18;
if(!command.startsWith(prefix)) {
	let cmd = bot.commands.get("textReply.js");
	if(cmd) cmd.run(bot, message, messageArray, disabler18);
	return;
} else if (command.startsWith(prefix)) {
let cmd = bot.commands.get(command.slice(prefix.length)+".js");
if(cmd) cmd.run(bot, message, args, disabler18);
}
});
bot.login(botSettings.token);

    //var guildID = message.guild.id;
	//message.guildID.send("Hello!");
	//console.log(message.guild.id);
	//console.log(guildID);

