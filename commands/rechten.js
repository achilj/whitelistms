const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("RECHTEN command is working!");
var botEmbed = new discord.MessageEmbed()
            .setColor("#fffff")
            .addFields(
                {name: "💎 | STAFF Permissions", value: "Klik [hier](https://docs.google.com/document/d/1dskanpVRSKi-GmGc5sSxcb6fYZwIYQuFJQW1M2enCX4/edit?usp=sharing) om naar de *STAFF* -rechten te gaan"}
            )
            .setFooter("RealistiqRP", "https://cdn.discordapp.com/attachments/629335056095117312/773925896779202560/watermerk.png")

            return message.channel.send(botEmbed), message.delete()

}

module.exports.help = {
    name: "rechten"
}