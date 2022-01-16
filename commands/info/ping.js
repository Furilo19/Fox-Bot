const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    description: 'Sends a Ping',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Pong! **${client.ws.ping}ms**`);
    },
};