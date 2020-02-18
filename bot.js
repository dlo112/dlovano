const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("663141688843436033")
setInterval(function() {
channel.send(`FakYOU`);
}, 30)
})

client.login(process.env.BOT_TOKEN);