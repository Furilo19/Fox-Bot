const discord = require('discord.js');

module.exports = {
    name: 'ban',
    aliases: [],
    description: 'Used to ban Idiots',
    utilisation: '{prefix}ban',
    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'], 

    execute(client, message, args) {
        const member = message.mentions.members.first();

        if (!member) {
          return message.channel.send(
            `Who are you trying to ban? You must mention a user.`
          );
        }
      
        if (!member.banable) {
          return message.channel.send(`I can't ban this user. Sorry!`);
        }
      
        return member
          .ban()
          .then(() => message.channel.send(`${member.user.tag} was banned.`))
          .catch(error => message.channel.send(`Sorry, an error occured.`));
    },
};