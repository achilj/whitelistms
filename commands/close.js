// const discord = require("discord.js");

// module.exports.run = async(client, message, args) => {

//     const reason = message.content.split(" ").slice(1).join(" ");

//     const SupportCategory = message.guild.channels.cache.find(category => category.name === "📞 | FIVEM TICKETS");


//     if (!reason) {
//         return message.channel.send("Waarom wil je een ticket sluiten? \n`!close (reden)` ")
//     }    

//     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt niet voldoende rechten om een ticket te sluiten, vraag een admin of helper!");
//     if(message.channel.parentID == SupportCategory) {
//         message.channel.delete()

//     //Maak een embed
//     var embedCloseTicket = new discord.MessageEmbed()
//     .setColor("GREEN")
//     .setTitle(message.channel.name)
//     .setDescription("Het ticket is gemarkeerd als **Afgehandeld**")
//     .setFooter("Ticket Gesloten")
//     .setTimestamp()
//     .addFields(
//         {name: "Reden:", value: `${reason}`}
//     )

//     //Channel voor het close command te loggen
//     var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "ticket-logs");
//     if (!ticketChannel) return message.reply("Kanaal bestaat niet...");

//     ticketChannel.send(embedCloseTicket)
    
//     } else {

//         message.channel.send("Dit commando is enkel in tickets te gebruiken!");
//     }


// console.log("CLOSE (tickets) command is working");


// }

// module.exports.help = {
//     name: "close"
// }