/* eslint-disable no-shadow */
const commando = require('discord.js-commando');
const accessBank = require('../../../botBanque/commands/banque/access-bank.js');
let bank = accessBank.get();

function randomInt(mini, maxi) {
	let nb = mini + (maxi + 1 - mini) * Math.random();
	return Math.floor(nb);
}

Array.prototype.shuffle = function(n) {
	if(!n) {n = this.length;}
	if(n > 1) {
		let i = randomInt(0, n - 1);
		let tmp = this[i];
		this[i] = this[n - 1];
		this[n - 1] = tmp;
		this.shuffle(n - 1);
	}
};

class BlackJackCommand extends commando.Command {

	constructor(client) {
		super(client, {
			name: 'blackjack',
			group: 'casino',
			memberName: 'blackjack',
			description: '  Lances une partie de blackjack (en developpement)',
		});
	}

	async run(message) {
		// eslint-disable-next-line no-var
		var estDansBanque = false;
		// eslint-disable-next-line no-var
		for(var i in bank) {
			if(message.member.id == bank[i].id) {
				bank = accessBank.get();
				estDansBanque = true;
				break;
			}
		}
		if(estDansBanque) {
			let paquet = new Array();
			let couleur = ['pique', 'trefle', 'carreau', 'coeur'];
			let carte = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'valet', 'dame', 'roi'];
			for(let i = 0; i < 13; i++) {
				for(let j = 0; j < 4; j++) {
					paquet.push({ 'carte': carte[i], 'couleur': couleur[j] });
				}
			}
			paquet.shuffle();
			let main = new Array();
			main.push(paquet.shift());
			main.push(paquet.shift());
			console.log(process.cwd());
			message.reply('votre main : ', { files: ['./src/img/' + main[0].couleur + '/' + main[0].carte + '.jpg', './src/img/' + main[1].couleur + '/' + main[1].carte + '.jpg'] });
		}
		else {
			message.reply('Vous n\'avez pas de compte bancaire, b!inscrire pour en créer un');
		}
		console.log(message.member.user.tag + ' a fait la commande blackjack');
	}
}
module.exports = BlackJackCommand;