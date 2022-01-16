module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `You first have to play some Music ${message.author}.`, ephemeral: true, components: [] });

            int.member.send(`There you go, the Song is called ${queue.current.title} by ${queue.current.author} `).then(() => {
                return int.reply({ content: `Sent you the Song in DMs`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Unable to send you a private message ${message.author}. Please try again.`, ephemeral: true, components: [] });
            });
        }
    }
};