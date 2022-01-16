module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        if (!queue.tracks[0]) return message.channel.send(`No other Songs in queue after the current one ${message.author}.`);

        await queue.shuffle();

        return message.channel.send(`Shuffled **${queue.tracks.length}** song(s) ! ✅`);
    },
};