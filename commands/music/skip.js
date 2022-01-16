module.exports = {
    name: 'skip',
    aliases: ['sk'],
    description: 'Skip the current Song',
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        const success = queue.skip();

        return message.channel.send(success ? `Current Song ${queue.current.title} skipped.` : `Something went wrong ${message.author}.`);
    },
};