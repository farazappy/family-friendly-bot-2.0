users.forEach((u) => {
    let allRanks = []
    await axiosInstances.get(`/players/${u.steam32}`).then((r) => {
        allRanks.push(`\n${u.name} -------- ${tierToRank(r.data.rank_tier)}`)
    }).catch(e) => {
        console.log(e);
    })

})