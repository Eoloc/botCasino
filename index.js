const commando = require('discord.js-commando');
const jsonToken = require('./token.json');

const prefix = "c!";
const bot = new commando.Client({
    commandPrefix: prefix
});
var d = new Date();
var dateActu = d.getUTCDate()+ "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCFullYear();

bot.registry.registerGroup('dev', 'Dev');
bot.registry.registerGroup('casino', 'Casino');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(jsonToken.token);

bot.on('ready',() => {
    console.log('\nBot Casino prêt');
    bot.user.setAvatar(__dirname + "/src/avatar/LaRoulette.jpg")
    .then(() => console.log('Avatar Casino prêt'))
    .catch(() => console.error);
    console.log("Date Casino : " + dateActu);
    console.log('Log Casino terminé');
    
});