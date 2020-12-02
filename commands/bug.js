const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("BUG command is working!");

if(!args.length) {
    return message.channel.send("Geef alstublieft een report op anders weten de developers niet waar ze moeten beginnen 😅.")
  }

  let channel = message.guild.channels.cache.find((x) => (x.name === "🔧bug-reports"))

  if(!channel) {
    return message.channel.send("Er is geen kanaal genoemd *🔧bug-reports*, contacteer de developers zelf om deze fout op te geven alstublieft!")
  }

  const reason = message.content.split(" ").slice(1).join(" ");
                                                  
  let embed = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setColor("ORANGE")
  .setDescription(`**Bug:** \n` + reason)
  .setTimestamp()
  
  channel.send(embed)
  
  var sendedSuggestion = new discord.MessageEmbed()
  .setColor("ORANGE")
  .setDescription(`<@${message.author.id}> je bug-report is verzonden naar onze developers`)
  .setFooter("RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/773925896779202560/watermerk.png")
  .setTimestamp()
  
  message.channel.send(sendedSuggestion), message.delete()

  var dmSuggestion = new discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`Even nog een overzicht van wat je ons ingestuurd hebt: \n{${reason}}`)
  .setAuthor("Report ingestuurd")
  .setTimestamp()
  .setFooter("RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/773925896779202560/watermerk.png")
  
  message.author.send(dmSuggestion)

  var logChannel = message.member.guild.channels.cache.find(channel => channel.name === "other-logs");
if (!logChannel) return message.reply("Kanaal bestaat niet...");

logChannel.send(`Nieuwe Bug gedetecteerd! (${message.author.id})`)

}

module.exports.help = {
    name: "bug"
}