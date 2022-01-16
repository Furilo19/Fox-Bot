module.exports = {
    name: 'resume',
    aliases: ['rs'],
    description: 'Resumes the current Song',
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`You first have to play some Music ${message.author}.`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Current Song ${queue.current.title} resumed ` : `Something went wrong ${message.author}.`);
    },
};