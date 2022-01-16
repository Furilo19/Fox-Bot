const discord = require('discord.js');

module.exports = {
    name: 'bonk',
    aliases: ['nohorny'],
    utilisation: '{prefix}bonk',
    minArgs: 1,
    expectedArgs: '<user>',
    expectedArgsTypes: ['USER'], 

    execute(client, message, args) {
        const member = message.mentions.members.first();
        const gifLink = 'https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755'

        if (!member) {
          return message.channel.send(
            `${gifLink}`
          );
        }
    
        return message.channel.send(`@${member.user.tag} ${gifLink}`);

    }
}