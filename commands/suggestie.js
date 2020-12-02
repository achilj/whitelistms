const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("SUGGESTIE command is working!");

if(!args.length) {
    return message.channel.send("Geef alstublieft een suggestie op.")
  }

  let channel = message.guild.channels.cache.find((x) => (x.name === "📂suggesties" || x.name === "💭suggesties"))


  if(!channel) {
    return message.channel.send("Er is geen kanaal genoemd *📂suggesties*")
  }


  if(!channel) {
    return message.channel.send("Er is geen kanaal genoemd *💭suggesties*")
  }

  const reason = message.content.split(" ").slice(1).join(" ");
                                                  
  let embed = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setThumbnail("https://cdn.discordapp.com/attachments/740696048841916497/782080484700192809/logo.png")
  .setColor("BLUE")
  .setDescription(`**Suggestie:** \n` + reason)
  .setTimestamp()
  
  
  channel.send(embed).then(m => {
    m.react("👍")
    m.react("👎")
  })
  
  var sendedSuggestion = new discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Je hebt je suggestie geplaatst! Stemmen kan in ${channel}`)
  .setFooter("Suggestie Ingestuurd")
  .setTimestamp()
  
  message.channel.send(sendedSuggestion), message.delete()

  var dmSuggestion = new discord.MessageEmbed()
  .setColor("ORANGE")
  .setDescription(`Je hebt een suggestie ingestuurd, eens kijken wat anderen van jou idee vinden 😛! \n[${reason}]`)
  .setFooter("Suggestie Ingestuurd")
  .setTimestamp()
  .setFooter("RealistiqRP", "https://cdn.discordapp.com/attachments/629335056095117312/773925896779202560/watermerk.png")
  
  message.author.send(dmSuggestion)

  var logChannel = message.member.guild.channels.cache.find(channel => channel.name === "botlogs");
if (!logChannel) return message.reply("Kanaal bestaat niet...");

logChannel.send("Er werdt een nieuwe suggestie geplaatst!")

}

module.exports.help = {
    name: "suggestie"
}