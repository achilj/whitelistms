const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("PING command is working!");
var botEmbed = new discord.MessageEmbed()
            .setColor("YELOW")
            .setTimestamp()
            .setFooter("RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/773925896779202560/watermerk.png")
            .addFields(
                {name: "PING - REACTIESNELHEID", value: `📊 Snelheid van de bot is ${Date.now() - message.createdTimestamp}ms.`}

            )
            return message.channel.send(botEmbed)

}

module.exports.help = {
    name: "ping"
}