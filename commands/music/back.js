module.exports = {
    name: 'back',
    aliases: ['previous'],
    description: 'Returns to the previous song',
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        if (!queue.previousTracks[1]) return message.channel.send(`Nothing was played before ${message.author}.`);

        await queue.back();

        message.channel.send(`Playing the **previous** track.`);
    },
};