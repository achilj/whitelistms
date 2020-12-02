const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("HELP command is working");
var botEmbed = new discord.MessageEmbed()
            .setTitle("📢 | Help Commando")
            .setDescription("*Het prefix van de bot is **`!`***")
            .setColor("BLUE")
            .setTimestamp()
            .addFields(
                 {name: "• help", value: "Geeft dit venster weer."},
                 {name: "• info", value: "Geeft wat nuttige links."},
                 {name: "• ping", value: "Bekijk wat de respond tijd is van de bot."},
                 {name: "• modhelp", value: "Stuurt een menu voor staffleden. [StaffOnly]"},
                 {name: "• suggestie <je suggestie>", value: "Stuur een suggestie in."},
                 {name: "• bug <je bug>", value: "Stuur een bug-report in."},
                 {name: "`• ticket <je verhaal>`", value: "`Maak een ticket aan. [Defect]`"}
                )
                .setFooter("RealistiqRP", "https://cdn.discordapp.com/attachments/629335056095117312/773925896779202560/watermerk.png")

                return message.author.send(botEmbed), message.delete()
}

module.exports.help = {
    name: "help"
}