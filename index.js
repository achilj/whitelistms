const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () =>{

    console.log(`${client.user.username} Is Online!`);
    client.user.setActivity("controleerd jullie maagdheid!", {type: "LOOKING"})

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ")

    var command = messageArray[0];

    if(command === `${prefix}whitelist`){
        return message.channel.send("**Weet ik veel?** `Ik zou zeggen test het uit... :)`")
    }
     
    async function promptMessage(message, author, time, reactions) {
        time *= 1000;

        for (const reaction of reactions) {
            await message.react(reaction);
        }

        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
     
        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }});