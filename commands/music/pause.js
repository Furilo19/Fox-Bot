module.exports = {
    name: 'pause',
    aliases: [],
    description: 'Pauses current song',
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`You first have to play some Music ${message.author}.`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Paused ${queue.current.title} ` : `Something went wrong ${message.author}.`);
    },
};