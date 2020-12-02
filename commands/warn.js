const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./waarschuwingen.json", "utf8"));

module.exports.run = async(client, message, args) => {

console.log("WARN command is working!");

var args = message.content.slice(message.length).split(/ +/);

if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Je hebt geen rechten om dit commando uit te voeren...")

if (!args[0]) return message.reply("Er werdt geen gebruiker opgegeven. `-warn @user <reason>`")

if (!args[1]) return message.reply("Er werdt geen reden opgegeven. `-warn @user <reason>`")

if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Ik heb niet genoeg rechten om iemand te waarschuwen. `KICK_MEMBERS`")

var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

var reason = args.slice(1).join(" ");

if (!warnUser) return message.reply("Kan de gebruiker niet vinden, heb je alles juist ingevuld? `-warn @user <reason>`")

if(warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Je kan geen moderator warnen!")

if(!warns[warnUser.id]) warns[warnUser.id] = {
    warns: 0
};

warns[warnUser.id].warns++;

fs.writeFile("./waarschuwingen.json/", JSON.stringify(warns), (err) =>{
    if (err) console.log(err);
})

var embed = new discord.MessageEmbed()
.setColor("ORANGE")
.setTitle("__Waarschuwing uitgedeeld__")
.setTimestamp()
.setDescription(`Gewaarschuwd: ${warnUser} \n **Moderator:** ${message.author} \n **Reden:** ${reason}`)
.addField("Aantal Waarschuwingen:", warns[warnUser.id].warns);

var channelLog = message.member.guild.channels.cache.get("782553464412569631")

if(!channel) return;

channelLog.send(embed)

var embedChannel = new discord.MessageEmbed()
.setColor("")
.setTitle("**Lid gewaarschuwd**")
.setDescription(`${warnUser} is zojuist Gewaarschuwd. \n\nReden: ${reason}`);

channel.send(embedChannel)

}

module.exports.help = {
    name: "warn"
}