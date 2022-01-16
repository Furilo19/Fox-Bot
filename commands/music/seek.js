const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    description: 'Skip to a time in the Song',
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`You cannot listen to anything outside the total Song time ${message.author}.\n*Try a time like **5s, 10s, 20 seconds, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Time set to **${ms(timeToMS, { long: true })}** ✅`);
    },
};