const commando = require('discord.js-commando');

class LanceDeCommand extends commando.Command {

    constructor(client) {
        super(client, {
            name: '1ou2',
            group: 'casino',
            memberName: '1ou2',
            description: '  c!1ou2 | Choisi aléatoirement 1 ou 2.'
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 2) + 1;
        message.reply(roll);
        console.log(message.member.user.tag + " a fait la commande 1ou2");
    }
}
module.exports = LanceDeCommand;