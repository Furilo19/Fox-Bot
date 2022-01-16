module.exports = {
    name: 'say',
    aliases: [],
    utilisation: '{prefix}say',

    execute(client, message) {
        message.channel.send(`Do you really expect me to say some trash??? Nope.`);
    },
};