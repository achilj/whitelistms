// Dit werkt niet helemaal, de bedoeling is dat je een commando doet om een speler een rol te geven en dat er dan een bericht komt met gewhitelist //

const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    console.log("WHITELIST command is working!");

    var args = message.content.slice(message.length).split(/ +/);
    if (!args[1]) return message.reply("Geen gebruiker opgegeven.");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Je hebt niet genoeg permissies om dit commando uit te voeren...");

    var whitelistUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    var whitelistrole = member.guild.cache.roles.get('739963236560142386')

    if(!whitelistrole) return;

    member.roles.add(whitelistrole)

    var whitelistEmbed = new discord.MessageEmbed()
.setColor("GREEN")
.setTitle("__BEWONER GEWHITELIST__")
.setTimestamp()
.setDescription(`${whitelistUser} werdt gewhitelist!`)
.setFooter("RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/773925896779202560/watermerk.png");

message.channel.send(whitelistEmbed), message.delete()


}

module.exports.help = {
    name: "whitelist"
}