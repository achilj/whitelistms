// const discord = require("discord.js");

// module.exports.run = async(client, message, args) => {

// console.log("BAN command is working!");

//     var args = message.content.slice(message.length).split(/ +/);

//     if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Je hebt niet genoeg rechten om dit uit te voeren!");

//     if(!message.guild.me.hasPermission("BAN_MEMBERS"))return message.reply("Ik heb niet genoeg permissies voor dit commando!");

//     if(!args[1]) return message.reply("Geen gebruiker opgegeven (`!ban @user reden`)");

//     if(!args[2]) return message.reply("Geen reden opgegeven (`!ban @user reden`)");

//     var BanUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

//     var reason = args.slice(2).join(" ");

//     if(!BanUser) return message.reply("Gebruiker niet gevonden");

//         BanUser.ban(reason).catch(err =>{
//             if(err) return message.reply("Er is een fout opgetreden bij het verbannen van de persoon...");
//         });

//     var embed = new discord.MessageEmbed() // Dit wordt gestuurd in #ban-kicks onder DISCORD LOGGING
//     .setColor("#ff0000")
//     .setFooter(`Vliegticketje uitgedeeld!`)
//     .setTitle("**__INWONER VERBANNEN__**")
//     .setTimestamp()
//     .setDescription(`**Verbannen:** ${BanUser} (${BanUser.id})
//     **Verbannen door:** ${message.author}
//     **Reden:** ${reason}`)

//     var channel = message.member.guild.channels.cache.get("782553464412569631")

//     if(!channel) return;
    
//     channel.send(embed)

//     var leaveEmbed = new discord.MessageEmbed() // dit embed stuurd een bericht in het welkom kanaal dat er iemand een vliegticketje heeft gekregen ook met de reason erbij.
//     .setColor("RED")
//     .setTitle("__ER HEEFT IEMAND EEN VLIEGTICKET ONTVANGEN__")
//     .setTimestamp()
//     .setDescription(`<@${member.user.id}> heeft het uitgehangen en heeft een vliegticketje gekregen!` + reason)
//     .setFooter(`UserID: ${member.user.id}`);
    
//         member.guild.channels.get('702217465660178504').send(leaveEmbed);

// }    

// module.exports.help = {
//     name: "ban"
// }