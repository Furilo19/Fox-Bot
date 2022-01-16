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
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        Admin: {
            enabled: false,
            roleName: 'Admin',
            commands: ['kick']
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
