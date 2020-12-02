// Hij zegt dat ik geen getal opgeef maar dat doe ik wel//

const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    ////// Error Embeds

    var errorEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription(`Er ging wat mis tijdens het verwijderen van een hoop berichten...`)

///////////////////////////////////////////

    var erroraEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription(`Geef een getal op.`)

///////////////////////////////////////////

    var errorbEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription(`Ik kan maar 100 berichten verwijderen in 1x.`)

///////////////////////////////////////////

    var errorcEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .setDescription(`Geef een hoger getal dan 2 op.`)

///////////////// Code ////////////////////
    
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.author.send("Je hebt geen rechten om een BulkDelete uit te voeren.");
    if (isNaN(args[0])) return message.channel.send(erroraEmbed)
    if (args[0] > 100) return message.channel.send(errorbEmbed)
    if (args[0] < 1) return message.channel.send(errorcEmbed)

    await message.delete()
    await message.channel.bulkDelete(args[0])

    .then(messages => message.channel.send(giveawayEmbed)).then(d => d.delete({timeout: 10000}))
    .catch(() => message.channel.send(errorEmbed))

                var giveawayEmbed = new discord.MessageEmbed()
                .setColor("GREEN")
                .setTimestamp()
                .setDescription(`${args[0]} Berichten werden verwijderd.`)

console.log("Een admin heeft het clear commando gebruikt!");


var embedCloseTicket = new discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`Er werdt een hele boel berichten verwijderd in **<#${message.channel.id}>**!`)
.setFooter("Bulk Delete")
.setTimestamp()

var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "message-logs");
if (!ticketChannel) return message.reply("Kanaal bestaat niet...");

ticketChannel.send(embedCloseTicket)

}

module.exports.help = {
    name: "clear"
}