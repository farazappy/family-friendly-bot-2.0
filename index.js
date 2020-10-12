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
const myAvatar = "https://cdn.discordapp.com/avatars/486578152454488065/37d3bd769b74dc4f6c89542a98eba4ad.webp";
const myName = "Family Friendly Bot";
const admins = ['240542597540610048', '310860262624460801', '202035944260370441', '202744505114296331'];
const dishas = ['O/o CCA Odisha Telecom Circle, 4th Floor, C P M G Building, Bhubaneswar - 751 001, Odisha', '7C42+W2 Santarapur, Odisha', '597M+W3 Sanapadar, Odisha', '643R+83 Tentuliapalli, Odisha', '858W+88 Padia Bhanga, Odisha'];
const simps = ['./raj.png', './raja.png', './shubham.png'];
const bitchs = ['./raj_bitch.png',];

var delQueenTxt = false;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {

    if (delQueenTxt) {
        if (msg.member.roles.cache.some(role => role.name === 'Q U E E N S'))
            msg.delete({ timeout: 2000 })
                .then(m => {
                    console.log(`Deleted message from ${m.author.username} after 5 seconds`)
                    // msg.channel.send('Power to <@&753249814350790776>!');
                })
                .catch(console.error);
    }


    if (msg.content.charAt(0) != '>') {
        return
    }

    const rand = Math.floor((Math.random() * 100) + 1) == 100;
    const content = msg.content.substring(1, msg.content.length)

    if (content === 'patriarchy') {
        if (!admins.includes(msg.author.id)) {
            msg.reply("Sorry, you are not admin.")
            return
        } else {
            delQueenTxt = true;
            msg.reply("Roger that Sir!");
        }
    }


    if (content === 'feminism') {
        if (!admins.includes(msg.author.id)) {
            msg.reply("Sorry, you are not admin.")
            return
        } else {
            delQueenTxt = false;
            msg.reply("Chalo theek hai!");
        }
    }

    if (content === 'lundfakir') {
        if (users.hasOwnProperty(msg.author.id)) {
            await axiosInstance.get(`/players/${users[msg.author.id].steam32}`).then((r) => {
                msg.reply(`Rank to lundwa (${tierToRank(r.data.rank_tier)}), fir bhi ghumandwa ?`);
            }).catch((e) => {
                console.log(e);
            })
         }
    }

    if (content === "mute") {
        if (!admins.includes(msg.author.id)) {
            msg.reply("Sorry, you are not admin.")
            return
        } else {
            // msg.member.voice.setDeaf(true, "Game starting");
            // msg.member.voice.setMute(true, "Game starting");
            msg.member.voice.channel.members.forEach((m) => {
                if (m.roles.cache.some(role => role.name === 'Groovy'))
                    return;
                m.voice.setMute(true, "Game Starting");
            });
            // msg.member.guild.voiceStates.cache.forEach((c) => {
            //     if (msg.member.voice.channelID === c.channelID)
            //         c.setMute(true, "Game Starting");
            // });
        }
    }

    if (content === "unmute") {
        if (!admins.includes(msg.author.id)) {
            msg.reply("Sorry, you are not admin.")
            return
        } else {
            // msg.member.voice.setDeaf(false, "Voting round");
            // msg.member.voice.setMute(false, "Voting round");
            msg.member.voice.channel.members.forEach((m) => {
                if (m.roles.cache.some(role => role.name === 'Groovy'))
                    return;
                m.voice.setMute(false, "Voting round");
            });
        }
    }

    if (content === 'dishakidisha') {
        msg.reply(dishas[Math.floor(Math.random() * dishas.length)]);
    }

    // if (content === 'ping') {
    //     msg.reply('pong');
    // }

    if (content.includes("password")) {
        msg.reply("IT Cell will take it from here. Thank you.");
    }

    if (content === 'ayesha') {
        msg.react('👺')
        msg.react(String.fromCodePoint("C".codePointAt(0) - 65 + 0x1f1e6))
        msg.react(String.fromCodePoint("H".codePointAt(0) - 65 + 0x1f1e6))
        msg.react(String.fromCodePoint("U".codePointAt(0) - 65 + 0x1f1e6))
        msg.react(String.fromCodePoint("D".codePointAt(0) - 65 + 0x1f1e6))
        msg.react(String.fromCodePoint("A".codePointAt(0) - 65 + 0x1f1e6))
        msg.react(String.fromCodePoint("I".codePointAt(0) - 65 + 0x1f1e6))
        msg.react(String.fromCodePoint("L".codePointAt(0) - 65 + 0x1f1e6))
        msg.react('👹')
        msg.react('🇱🇰')
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_c'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_h'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_u'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_d'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_a'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_i'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'regional_indicator_l'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'japanese_ogre'))
        // msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'flag_lk'));

    }
    if (content === 'appy') {
        msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'appy'))

    }

    if (content === 'truth') {
        msg.reply("I, Faraz Ali love Shilpi Dutta Tani from the bottom of my heart");

    }

    if (content.includes('asli')) {
        msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'pepehands'))
        msg.react(msg.guild.emojis.cache.find(emoji => emoji.name === 'sadsli'));
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

    if (content.split(" ")[0] === "say") {
        if (msg.mentions.users.first().id === "240542597540610048") {
            msg.reply("Sorry, NO!");
            return;
        }
        msg.delete({ timeout: 1000 })
            .then(m => {
            })
            .catch(console.error);
        msg.guild.members.cache.find(user => user.id === '486578152454488065').setNickname(msg.mentions.users.first().username).then(() => {
            msg.channel.send(content.substring(content.lastIndexOf(content.split(" ")[2]), content.length)).then(() => {
                // client.user.setAvatar(myAvatar);
                msg.guild.members.cache.find(user => user.id === '486578152454488065').setNickname(myName);
            }).catch(console.error);
        }).catch(console.error);

        // client.user.setAvatar(msg.mentions.users.first().avatarURL()).then(() => {
        //     client.user.setUsername(msg.mentions.users.first().username)
        //     msg.reply(content.substring(content.lastIndexOf(content.split(" ")[2]), content.length)).then(() => {
        //         client.user.setAvatar(myAvatar);
        //         client.user.setUsername(myName);
        //     }).catch(console.error);
        // }).catch(console.error);
    }

    if (content === 'allranks') {
        let ranks = await allRanks()
        const ranksEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Ranks of Retards')
            .addFields(ranks);
        msg.channel.send(ranksEmbed)
    }

    if (content === "whosimp") {
        msg.channel.send({ files: [{ attachment: simps[Math.floor(Math.random() * simps.length)], name: 'simp.png' }] })
    }

    if (content === "whobitch") {
        msg.channel.send({ files: [{ attachment: bitchs[Math.floor(Math.random() * bitchs.length)], name: 'bitch.png' }] })
    }

});

client.login(process.env.AUTH_TOKEN);