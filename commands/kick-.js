// Hij reageerd zelf niet met de duimpjes om hem te kicken/banne//

const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

console.log("KICK command is working!");

    var args = message.content.slice(message.length).split(/ +/);

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet gebruiken");

    if(!message.guild.me.hasPermission("KICK_MEMBERS"))return message.reply("Ik heb niet genoeg permissies voor dit commando");

    if(!args[1]) return message.reply("Geen gebruiker opgegeven (`!kick @user reden`)");

    if(!args[2]) return message.reply("Geen reden opgegeven");

    var KickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    if(!KickUser) return message.reply("Gebruiker niet gevonden");

        KickUser.kick(reason).catch(err =>{
            if(err) return message.reply("Er is een fout opgetreden bij het kicken van de persoon...");
        });

    var embed = new discord.MessageEmbed()
    .setColor("#ffff00")
    .setFooter(`Inwoner eruit gezwierd!`)
    .setTitle("**__Inwoner Gekicked__**")
    .setTimestamp()
    .setDescription(`**Gekickt:** ${KickUser} (${KickUser.id})
    **Gekickt door:** ${message.author}
    **Reden:** ${reason}`)

    var channel = message.member.guild.channels.cache.get("782553464412569631")

    if(!channel) return;
    
    channel.send(embed)

    // var kickEmbed = new discord.MessageEmbed()
    // .setColor("#ffff00")
    // .setFooter(`Verwijderd uit de discord server`)
    // .setTimestamp()
    // .setDescription(`Beste ${KickUser}, \nJe werdt gekicked uit de Realistiq Roleplay Discord \nDe reden daarvan is: ${reason}`)

    // message.mentions.members.first().send(kickEmbed)

}    

module.exports.help = {
    name: "kick"
}