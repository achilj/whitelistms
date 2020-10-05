const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(command === `${prefix}server`){
        return message.channel.send("**__De Wijnpers 2020-2021__** `IP: dewijnpers.serv.nu`")
    }   

}

module.exports.help = {
    name: "server"
}