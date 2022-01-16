module.exports = {
    name: 'save',
    aliases: ['sv'],
    description: 'Sends song name and Author to DMs',
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        message.author.send(`There you go, the Song is called ${queue.current.title} by ${queue.current.author} `).then(() => {
            message.channel.send(`Sent you the Song in DMs`);
        }).catch(error => {
            message.channel.send(`Unable to send you a private message ${message.author}. Please try again.`);
        });
    },
};