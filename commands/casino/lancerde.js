const commando = require('discord.js-commando');
const accessDe = require('./access-de.js');

class LanceDeCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'lancerde',
            group: 'casino',
            memberName: 'lancerde',
            description: '  c!lancerde | Lance le dé.'
        });
    }

    async run(message, args) {
        let de = accessDe.get();
        
        if (de.length == 0) {
            message.reply("Pas de dé créé, c!de [nombre de face] pour en créer un");
        }
        else {
            var roll = Math.floor(Math.random() * de[0].face) + 1;
            message.reply("lance le dé et fait : " + roll);
        }
        console.log(message.member.user.tag + " a fait la commande lancerde");
    }
}
module.exports = LanceDeCommand;