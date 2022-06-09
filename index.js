const {Collection, Client, Discord} = require('discord.js')
const config = require('./config.json');
const fs = require('fs');
const client = new Client({ intents: 32767 })

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(config.token)
