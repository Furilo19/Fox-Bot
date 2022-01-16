module.exports = (client, message) => {
    client.on('guildMemberAdd', member => {
        member.guild.channels.get('926211569799528511').send("Welcome"); 
    });
};