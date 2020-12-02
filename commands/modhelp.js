const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("MODHELP command is working!");

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Je bent geen stafflid, dit commando is beschermd!");


var botEmbed = new discord.MessageEmbed()
            .setTitle("💎 | Moderator Commands")
            .setDescription("*Het prefix van de bot is `!`*")
            .setColor("BLUE")
            .addFields(
                 {name: "• ban", value: "Verban een lid van de discord."},
                 {name: "• kick", value: "Verwijder een lid van de discord."},
                 {name: "• warn", value: "Waarschuw een lid van de discord."},
                 {name: "`• delwarn`", value: "`Verwijder warnings van een gebruiker. [NotWorking]`"},
                 {name: "• close", value: "Sluit een ticket."},
                 {name: "• rechten", value: "Geeft link naar alle in-game rechten en wat helpers/admins mogen en niet mogen doen."},
                 {name: "• modhelp", value: "Toont dit scherm."}
                )
                .setFooter("RealistiqRP", "https://cdn.discordapp.com/attachments/629335056095117312/773925896779202560/watermerk.png")

                return message.author.send(botEmbed)
 
}

module.exports.help = {
    name: "modhelp"
}