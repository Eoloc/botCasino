const commando = require('discord.js-commando');
const accessBank = require('../../../botBanque/commands/banque/access-bank.js');
let bank = accessBank.get();

class BlackJackCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'blackjack',
            group: 'casino',
            memberName: 'blackjack',
            description: '  Lances une partie de blackjack (en developpement)'
        });
    }

    async run(message, args){
        var estDansBanque = false;
        for(var i in bank){
            if(message.member.id == bank[i].id){
                bank = accessBank.get();
                estDansBanque = true;
                break;
            }
        }
        if(estDansBanque) {
            message.reply("votre main : ", { files: ["./src/img/carreau/ca2.jpg", "./src/img/pique/p1.jpg"] });
        }
        else {
          message.reply("Vous n'avez pas de compte bancaire, b!inscrire pour en créer un");
        }
        console.log(message.member.user.tag + " a fait la commande blackjack");
    }
}
module.exports = BlackJackCommand;