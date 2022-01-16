const Discord = require('discord.js');

module.exports = {
    name: 'say',
    aliases: [],
    description: 'Repeats your Message',
    utilisation: '{prefix}say',

    execute(client, message, args) {

        let userMessage = args.slice().join(' ')
            if(!userMessage) {
                userMessage = 'You have to tell me what to say too, stupid.';
            }

        message.channel.send(`${userMessage}`);
        message.delete(1000);
    },
};