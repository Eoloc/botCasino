const commando = require('discord.js-commando');
const accessDe = require('./access-de.js');

class DeCreeCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'de',
            group: 'casino',
            memberName: 'de',
            description: '  c!de [nombre de face] | Tire un nombre entre 1 et le nombre que vous avez entré'
        });
    }

    async run(message, args) {
        if (message.content.startsWith("c!de ")) {
            var argument = message.content.substr("c!de ".length);
            argument = parseInt(argument);
            if (isNaN(argument) || argument <= 0) {
                message.reply("les faces ne sont pas valide");
            }
            else {
                let de = accessDe.get();
                console.log("\n=====   CREATION DU DE   =====\n");
                de = ([{ face: argument }]);
                console.log(de);
                accessDe.set(de, (err) => {
                    if (err) throw err;
                    console.log('De cree');
                });
                message.reply("choisit un dé a " + argument + " faces");
            }
        }
        else {
            message.reply("Erreur d'utilisitation de la commande : c!de [nombre de face] exemple : c!de 6");
        }

    }

}

module.exports = DeCreeCommand;