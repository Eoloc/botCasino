const { CommandoClient } = require('discord.js-commando');
const jsonToken = require('./token.json');

const bot = new CommandoClient({
	commandPrefix: 'c!',
	owner: '188728222240866305',
});

const d = new Date();
const dateActu = d.getUTCDate() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCFullYear();

bot.registry.registerGroups([
	['casino', 'Casino'],
	['dev', 'Dev'],
]);
bot.registry.registerDefaultGroups();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(jsonToken.token);

bot.on('ready', () => {
	console.log('\nBot Casino prêt');
	bot.user.setAvatar(__dirname + '/src/avatar/LaRoulette.jpg')
		.then(() => console.log('Avatar Casino prêt'))
		.catch(() => console.error);
	console.log('Date Casino : ' + dateActu);
	console.log('Log Casino terminé');
});