const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("INFO command is working");
var botEmbed = new discord.MessageEmbed()
            .setTitle("📌 | Nuttige Informatie")
            .setDescription("__Hier heb je wat nuttige links!__")
            .setColor("BLUE")
            .addFields(
                {name: "🔗 | invite", value: "Klik met je rechtermuis -knop [hier](https://invite.gg/realistiqrp1) om de link te kopiëren."},
                {name: "🎥 | Twitch", value: "Klik [hier](https://twitch.tv/realistiqrp) om ons twitch kanaal te bekijken!"},
                {name: "🎥 | YouTube", value: "Klik [hier](https://www.youtube.com/channel/UCCV8qtTDBMuECw9TU46Sg7g?view_as=subscriber) om een kijkje te nemen op ons youtube kanaal!"},
                {name: "🌏 | Website", value: "Klik [hier](https://www.realistiqrp.nl/) om een kijkje op onze website te nemen!"},
                {name: "🎮 | Installeer FiveM", value: "Klik [hier](https://fivem.net) om naar de website van fivem gestuurd te worden."}
            )
            .setFooter("RealistiqRP", "https://cdn.discordapp.com/attachments/629335056095117312/773925896779202560/watermerk.png")

            return message.channel.send(botEmbed), message.delete()

}

module.exports.help = {
    name: "info"
}