const discord = require('discord.js');

module.exports = {
    name: 'kick',
    aliases: [],
    utilisation: '{prefix}kick',
    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'], 

    execute(client, message, args) {
        const member = message.mentions.members.first();

        if (!member) {
          return message.channel.send(
            `Who are you trying to kick? You must mention a user.`
          );
        }
      
        if (!member.kickable) {
          return message.channel.send(`I can't kick this user. Sorry!`);
        }
      
        return member
          .kick()
          .then(() => message.channel.send(`${member.user.tag} was kicked.`))
          .catch(error => message.channel.send(`Sorry, an error occured.`));
    },
};