const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Shows all the Commands',
    showHelp: true,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('ORANGE');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('These are all the Commands im going to listen to. Nothing else.');
        embed.addField(`Commands - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}  -  ${x.description}`).join(' \n '));

        embed.setTimestamp();
        embed.setFooter('Why are you even reading this?', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};