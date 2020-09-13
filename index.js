require('dotenv').config({ path: __dirname + '/.env' })

const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const users = require('./retards.config');
const ranks = require('./ranks.config');
const openDotaKey = process.env.OPEN_DOTA_KEY;
const axiosInstance = axios.create({
    baseURL: 'https://api.opendota.com/api/',
});

function tierToRank (tier) {
    const medal = tier.toString().charAt(0);
    const star = tier.toString().charAt(1);

    return `${ranks[medal]} ${star}`
    // console.log(ranks[medal]);
    // console.log(tier.toString().charAt(0));
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
    if (msg.content.charAt(0) != '>') {
        return
    }

    const rand = Math.floor((Math.random() * 100) + 1) == 100;
    const content = msg.content.substring(1, msg.content.length)

    if (content === 'ping') {
        msg.reply('pong');
    }

    if (content.includes("password")) {
        msg.reply("IT Cell will take it from here. Thank you.");
    }

    if (content === 'myrank') {
        if (users.hasOwnProperty(msg.author.id)) {
            await axiosInstance.get(`/players/${users[msg.author.id].steam32}`).then((r) => {
                msg.reply(`Your Dota Rank is ${tierToRank(r.data.rank_tier)}, step up your game pleb!`);
            }).catch((e) => {
                console.log(e);
            })
        } else {
            msg.reply('Premium membership required!');
        }
    }

    if (content === 'mymmr') {
        if (users.hasOwnProperty(msg.author.id)) {
            await axiosInstance.get(`/players/${users[msg.author.id].steam32}`).then((r) => {
                r.data.competitive_rank ? msg.reply(`Your Party MMR is ${r.data.competitive_rank}, eww!`) : (r.data.mmr_estimate ? msg.reply(`Your Party MMR is ${r.data.mmr_estimate.estimate}, eww!`) : msg.reply("Valve doesn't have your data, lmao noob!"));
            }).catch((e) => {
                msg.reply("That nearly killed me wew!");
                console.log(e);
            })
        } else {
            msg.reply('Premium membership required!');
        }
    }

    switch (msg.author.id) {
        case '327365815785619457': //Gagan
            if (rand == 100) {
                msg.reply("gift card please");
            }
            break;
        case '252653111414358016': //Pavan
            if (rand == 100) {
                msg.reply("It's Pawan, not Pavan.");
            }
            break;
        case '240542597540610048': //Asli
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