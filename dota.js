const users = require('./retards.config');
const ranks = require('./ranks.config');

const axios = require('axios');
const axiosInstance = axios.create({
    baseURL: 'https://api.opendota.com/api/',
});

tierToRank = (tier) => {
    const medal = tier.toString().charAt(0);
    const star = tier.toString().charAt(1);

    return `${ranks[medal]} ${star}`
    // console.log(ranks[medal]);
    // console.log(tier.toString().charAt(0));
}

allRanks = async () => {
    let allRanks = []

    await Promise.all(Object.values(users).map(u =>
        axiosInstance.get(`/players/${u.steam32}`).then((r) => {
            // allRanks.push(`${r.data.profile.personaname} -------- ${tierToRank(r.data.rank_tier)}`)
            allRanks.push({ name: r.data.profile.personaname, value: tierToRank(r.data.rank_tier) })
        }).catch((e) => {
            console.log(e);
        })
    ));

    return allRanks;

    // await Object.values(users).forEach(async (u) => {
    //     await axiosInstance.get(`/players/${u.steam32}`).then((r) => {
    //         allRanks.push(`\n${u.name} -------- ${tierToRank(r.data.rank_tier)}`)
    //     }).catch((e) => {
    //         console.log(e);
    //     })
    // })

    // return allRanks
}