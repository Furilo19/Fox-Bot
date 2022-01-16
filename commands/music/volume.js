const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`You first have to play some Music ${message.author}.`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Volume: ${queue.volume} 🔊\n*To change the volume enter a number between **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Thats the same Volume as before... Nothing changed ${message.author}.`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`You cannot change the Volume to that. Enter a number between **1** and **${maxVol}** ${message.author}.`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `The volume has been set to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${message.author}.`);
    },
};