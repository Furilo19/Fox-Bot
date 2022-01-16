module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    description: 'Shows at wich time the song is',
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Playing a livestream, i dont know for how long its gonna go.`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};