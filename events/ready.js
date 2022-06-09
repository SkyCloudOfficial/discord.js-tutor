const client = require('../index.js');

const activities =[
    { name: 'github.com/SkyCloud', type: 'WATCHING' },
    { name: 'Люблю скай клауда', type: 'WATCHING' },
];

client.once('ready', () => {
    console.log(`${client.user.tag}`);
    client.user.setPresence({ status: 'online', activity: activities[0] });
    let activity = 1;
    setInterval(() => {
        activities[2] = { name: `Пользователей: ${client.users.cache.size}`, type: 'WATCHING' };
        if (activity > 2) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
    }, 5000);

})