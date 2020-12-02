// const discord = require("discord.js")


// module.exports.run = async (bot, message, args) => {

//     const reason = message.content.split(" ").slice(1).join(" ");

//     const SupportCategory = message.guild.channels.cache.find(category => category.name === "📞 | Support Service");

//     if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory) {
//         SupportCategory = await message.guild.channels.create('📞 | Support Service', {
//             type: 'category',
//         });
//     };

//     if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory) {
//         message.channel.send("Ik heb geen rechten om een categorie aan te maken...")
//     }

//     if (!message.guild.roles.cache.find(role => role.name === "Ticket Acces")) {
//         await (message.guild.roles.create({
//             name: 'Ticket Acces'
//         }));
//     };

//     let supportrole = message.guild.roles.cache.find(role => role.name === "💎 | ADMIN" || role.name === "💎 | HELPER")


//     if (!supportrole) {
//         return message.channel.send("Er is geen *💎 | ADMIN* of *💎 | HELPER* rol in deze server...")
//     }

//     if (!reason) {
//         return message.channel.send("Er is geen reden voor een ticket aan te maken... \n`ticket (subject)` ")
//     }

//     const channelName = `ticket-${message.author.username}`
//     if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username}`)) {
//         return message.channel.send("Je hebt nog een ticket open staan")
//     }

//     message.guild.channels.create(channelName, { parent: SupportCategory.id, topic: `Ticket aangemaakt door: <@${message.author.id}>` }).then(c => {
//         const sr = message.guild.roles.cache.get(supportrole)
//         const everyone = message.guild.roles.cache.find(role => role.name === "@everyone")
//         channel.updateOverwrite(supportrole, {
//             SEND_MESSAGES: true,
//             VIEW_CHANNEL: true,
//         });
//         channel.updateOverwrite(everyone, {
//             SEND_MESSAGES: false,
//             VIEW_CHANNEL: false,
//         });
//         var CreatedTicketEmbed = new discord.MessageEmbed()
//             .setColor("GREEN")
//             .setTitle("Nieuw Support Ticket")
//             .setDescription(`<@${message.author.id}> Je Support Ticket is te vinden in <#${channel.tag}>`)
//             .setTimestamp()

//         message.channel.send(CreatedTicketEmbed), message.delete()


//         var GreetEmbed = new discord.MessageEmbed()
//             .setColor("GREEN")
//             .addField(`${message.author.tag}`, `Bedankt voor een ticket aan te maken, wij komen zo bij je!`)
//             .addField(`Hulp nodig met: `, `${reason}`)
//             .setTimestamp()
//             .setFooter("RealistiqRP", "https://media.discordapp.net/attachments/740696048841916497/764867726299758602/watermerk.png")

//         channel.send(GreetEmbed)

//     //Embed voor Logs
//     var embedCloseTicket = new discord.MessageEmbed()
//     .setColor("GREEN")
//     .setTitle(`Support Ticket geopent`)
//     .setDescription(`Er is een nieuw support ticket aangemaakt \nAangemaakt door: <@${message.author.id}>`)
//     .setTimestamp()
//     .setFooter("Ticket Aangemaakt")

//     //Channel voor het close command te loggen
//     var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "ticket-logs");
//     if (!ticketChannel) return message.reply("Kanaal bestaat niet...");

//     ticketChannel.send(embedCloseTicket)
// })}

// module.exports.help = {
//     name: "ticket",
// }