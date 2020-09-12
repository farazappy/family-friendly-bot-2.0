require('dotenv').config({ path: __dirname + '/.env' })

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const rand = Math.floor((Math.random() * 100) + 1) == 100;

    if (msg.content === 'ping') {
        msg.reply('pong');
    }

    if (msg.content.includes("password")) {
        msg.reply("IT Cell will take it from here. Thank you.");
    }

    switch (msg.author.id) {
        case '327365815785619457':
            if (rand == 100) {
                msg.reply("gift card please");
            }
            break;
        case '252653111414358016':
            if (rand == 100) {
                msg.reply("It's Pawan, not Pavan.");
            }
            break;
        case '240542597540610048':
            if (rand == 100) {
                msg.reply("Please fuck off.");
            }
            break;
        default:
            break;
    }
    // if (msg.author.id == "252653111414358016") {
    //     if (Math.floor((Math.random() * 100) + 1) == 100) {
    //         msg.reply("It's Pawan, not Pavan.");
    //     }
    // }

});

client.login(process.env.AUTH_TOKEN);