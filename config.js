require("dotenv").config()

module.exports = {
    app: {
        px: ',',
        token: process.env.token,
        playing: 'trash uwu'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['play', 'back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        Admin: {
            enabled: true,
            roleName: 'Admin',
            commands: ['kick', 'ban']
        },
        maxVol: 10000,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
