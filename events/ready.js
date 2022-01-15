const { app } = require("../config");

module.exports = async (client) => {

    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);


    client.user.setActivity(`to ${app.px}help`, { type: 'LISTENING' });
    //client.user.setActivity(client.config.app.playing);
};