/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TROEP VOOR BOT DISCORD OP TE HALEN EN ANDERE DINGEN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const fs = require("fs");

const client = new discord.Client();
client.login(process.env.token);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMMAND HANDLER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Kon geen files vinden...")
        return;
    }

    jsFiles.forEach((f,i) => {
        
        var fileGet = require(`./commands/${f}`);
        console.log(`${f} loaded.`)

        client.commands.set(fileGet.help.name, fileGet);

        


    })

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//STATUS + CONSOLE BERICHT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", async () =>{

    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("!help", 
    {type: "STREAMING",
     url: "https://twitch.tv/realistiqrp"
    })

});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TROEP OM BERICHTEN TE KUNNEN STUREN OFZO...
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JOIN/LEAVE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// dit doet niks, zeer bizar naar mijn mening //

client.on('guildMemberAdd', member => {

    var joinEmbed = new discord.MessageEmbed()
.setColor("GREEN")
.setTitle("__REIZIGER AANGEKOMEN__")
.setTimestamp()
.setDescription(`Welkom in de stad <@${member.user.id}>, Lees heel efkes de regels door 😉!`)
.setFooter(`UserID: ${member.user.id}`);

var joinChannel = message.member.guild.channels.cache.get("702217465660178504")

if(!joinChannel) return;

joinChannel.send(joinEmbed)

});

client.on('guildMemberRemove', member => {

    var leaveEmbed = new discord.MessageEmbed()
    .setColor("RED")
    .setTitle("__ER HEEFT IEMAND DE STAD VERLATEN__")
    .setTimestamp()
    .setDescription(`<@${member.user.id}> heeft de stad verlaten 😔!`)
    .setFooter(`UserID: ${member.user.id}`);
    
    var leaveChannel = message.member.guild.channels.cache.get("702217465660178504")

    if(!leaveChannel) return;
    
    leavechannel.send(leaveEmbed)
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MESSAGE DELETE LOGS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageDelete', message => {
var embed = new discord.MessageEmbed()
.setColor("RED")
.setTitle("__Bericht Verwijderd__")
.setTimestamp()
.setDescription(`**Bericht van:** <@${message.author.id}> \n**Kanaal:** <#${message.channel.id}>`)
.setFooter(`UserID: ${message.author.id}`);

var channel = message.member.guild.channels.cache.get("782567135809241119")

if(!channel) return;

channel.send(embed)

    })

})



    client.login(botConfig.token);