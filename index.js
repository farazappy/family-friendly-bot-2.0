require('./dota')
const axios = require('axios');
const axiosInstance = axios.create({
    baseURL: 'https://api.opendota.com/api/',
});

require('dotenv').config({ path: __dirname + '/.env' })

const Discord = require('discord.js');
const client = new Discord.Client();
const dota = require('./dota');
const users = require('./retards.config');
const ranks = require('./ranks.config');
const openDotaKey = process.env.OPEN_DOTA_KEY;

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

    if (content === 'ayesha') {
        message.react('�');
        message.react('�');//c
        message.react('�');//h
        message.react('�');//u
        message.react('�');//d
        message.react('�');//a
        message.react('�');//i
        message.react('�');//l
        message.react('�');
    }
    if (content === 'appy') {
        msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'appy'))
        message.react('�');
        message.react('�');
    }

    if (content.includes('asli')) {
        msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'pepehands'));
        message.react('725797840751689770');
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

    if (content === 'allranks') {
        let ranks = await allRanks()
        const ranksEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Ranks of Retards')
            .addFields(ranks);
        msg.channel.send(ranksEmbed)
    }

});

client.login(process.env.AUTH_TOKEN);