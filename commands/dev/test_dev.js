const commando = require('discord.js-commando');

class TestDevCommand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: 'testdev',
            group: 'dev',
            memberName: 'testdev',
            description: '  Commande pour le developpeur de ce bot.',
        });
    }

    async run(message, args){
        message.channel.sendMessage("Salut " + message.member.user.tag );
        console.log(message.member.user.tag + " a fait la commande testdev");
    }
}
module.exports = TestDevCommand;