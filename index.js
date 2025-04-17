const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on("ready", async() => {
        console.log(`I 'm online!`)
client.user.setActivity('mention me to get prefix!', { type: 'WATCHING' });

});

  client.on('ready', async() => {
        client.channels.cache.get('1361805465163403517').join()
          

        console.log("Hello Im Online")
});


const prefix = '..';

const prefixx = prefix

client.on('message', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);   
      const command = args.shift().toLowerCase();
  if (command === `set-low`) {
    const deve = ["771223207536623686","877484293813833761","792453054150082560"]

            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')

if(!args) return message.channel.send("اكتب الشروط حقت الجيف اوي")
message.channel.send(`تم اضافة ${args.join(" ")} الي شروط القيف اوي`).then(()=> {

db.set(`loa_${message.author.id}_${message.guild.id}`,args.join(" "))
    
})
  }
});
//

const men = "**\@eveyone**"
client.on('message', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  if (command === `remove-low`) {


            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')

message.channel.send(`**تم ازالة شروط القيفاوي **\`<:give:932419582659014666>\``).then(()=> {

db.delete(`loa_${message.author.id}_${message.guild.id}`)
    
})
  }
});
client.on('message', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  if (command === `remove-by`) {


            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')

message.channel.send(`**تم ازالة مسلمين القيفاوي **\`<:give:932419582659014666>\``).then(()=> {

db.delete(`by_${message.guild.id}`)
    
}).catch(err => { console.log(err)})
  }
});

const db = require('quick.db')


client.on('message', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  if (command === `set-by`) {

         var user = message.mentions.members.first() || client.users.cache.get(args[1]);


            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
if(!user) return message.channel.send("اكتب ايدي او منشن المسلم  بتاع الجيف اوي")
message.channel.send(`تم اضافة ${user} الي مسلمين القيف اوي`).then(()=> {

db.set(`by_${message.guild.id}`,user.id)
    
})
  }
});

    const { GiveawaysManager } = require('discord-giveaways');
const { settings } = require('cluster');

    // Starts updating currents giveaways
    const manager = new GiveawaysManager(client, {
        storage: 'giveaways.json',
        updateCountdownEvery: 5000,
        hasGuildMembersIntent: true,
        default: {
            botsCanWin: true,
            embedColor: "c32b61",//لون الامباد حق القيفاواي
            embedColorEnd: "f7001d",//لون الامباد حق القيفاواي لما يخلص
            reaction: '932419582659014666'
        }
    });
    client.giveawaysManager = manager;
    client.on('message', (message) => {
        const ms = require('ms'); // npm install ms
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let giveaway = client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.prize === args.join(' ')) || client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.messageID === args[0]);
        if(message.content.includes(client.user.id)) return message.channel.send(`Prefix My : \`${prefix}\`
        
        list help  : \`${prefix}help\``)
        if (command === 'start') {
          if(message.author.bot) return;
          if(message.channel.type === "dm") return;
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
            
    const low = db.get(`loa_${message.author.id}_${message.guild.id}`) || "ليس هناك شروط"
        const by = db.get(`by_${message.guild.id}`) || message.author.id
    //          if(args !== "1s","2s","3s","4s","5s","6s","7s","8s","9s","10s") return message.channel.send(new Discord.MessageEmbed()
//.setTitle("**لازم يكون الجيف اوي اكتر من 10 ثواني**"))
            if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                            .setColor("c32b61")

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))
 
            if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                            .setColor("c32b61")

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))
            if(args[1] < "1") return message.channel.send(new Discord.MessageEmbed()
                            .setColor("c32b61")
                            .setTitle("لازم عدد المختارين يكون 1 و فوق لو انت عايز")
                            .setColor("c32b61"))
            if(!args[2]) return message.channel.send(new Discord.MessageEmbed()
            

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))

            client.giveawaysManager.start(message.channel, {
                time: ms(args[0]),
                winnerCount: parseInt(args[1]),
                prize: args.slice(2).join(' '),
                lastChance: {
                        enabled: true,
                        content: '⚠️ **  جارئ الانتهاء الان  !** ⚠️',
                        threshold: 10000,
                        embedColor: 'c32b61'
                    },
                    messages: {
                        giveaway: `**<:give:932419582659014666> **جيفاوي** <:give:932419582659014666>\n 
اضغط علي <:give:932419582659014666> حتي تشترك في الجيف اوي**`,//رسالة القيف اواي لما يبد
        inviteToParticipate: ``,//الرساله اللي في وسط الامباد لما يبلش القيف اواي
                        giveawayEnded: `**end-Givaway**`,//رسالة القيف اواي لما يخلص
                        timeRemaining: `
                        **<:pok:932419583871164457>  التسليم من: <@${by}>\n
                         <:time:932431380195979264> الوقت المتبقي : 
                        {duration}  **`,
        inviteToParticipate: `**<:warn:932432723837059122> الشروط : ${low}**\n`,//الرساله اللي في وسط الامباد لما يبلش القيف اواي
        winMessage: `**<:give:932419582659014666> تم اختيار فائزين و هم  : {winners}\n 
<:one1:932419583380447303> الجائزة : **{prize}**\n
 <:linker:932419582944227349> رابط الجيف اوي  : ${message.url}\n
 <:catch:932419582512234536> الشروط المضافة الي هاذا الجيف اوي : ${low}\n
 <:Id:932419582742904852> التسليم بواسطة : <@${by}>\n**`,//لما يخلص و يربح شخص يرسل ده
        embedFooter: message.guild.name,
        noWinner: 'ليس هنا احد ضاغط الرياكشن',
        hostedBy: `Hosted by : ${by}`,
        winners: ` Winner(s) `,
        endedAt: `End`,
                    }
            }).then((gData) => {
                console.log(gData);
            });
        }
        if (command === 'reroll') {
          if(message.author.bot) return;
          if(message.channel.type === "dm") return;
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`> Usage: ${prefix}reroll [giveaway message ID]\n ${prefix}reroll 44564686464886546978`))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.reroll(messageID, {
                    messages: {
                        congrat: ':tada: New winner(s): {winners}! Congratulations, you won **{prize}**!\n{messageURL}',
                        error: 'No valid participations, no new winner(s) can be chosen!'
                    }
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
            if (command === 'edit') {
              if(message.author.bot) return;
          if(message.channel.type === "dm") return;
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                .setColor("c32b61")
            .setDescription(`> Usage: ${prefix}edit [giveaway message ID] [time] [winners] [prize]\n ${prefix}edit 6468456486465811 1d 1w nitro classic`))
                  if(args[2] < "1w") return message.channel.send(new Discord.MessageEmbed()
                            .setColor("c32b61")
                            .setTitle("لازم عدد المختارين يكون 1 و فوق لو انت عايز")
                            .setColor("c32b61"))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.edit(messageID, {
                    addTime: 5000,
                    newWinnerCount: parseInt(args[2]),
                    newPrize: `Prize!: ${args.slice(3).join(' ')}`
                }).then(() => {
                    const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 5000;
                    message.channel.send('Success! Giveaway will updated in less than ' + numberOfSecondsMax + ' seconds.');
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
            if (command === 'delete') {
              if(message.author.bot) return;
          if(message.channel.type === "dm") return;
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor("c32b61")

            .setDescription(`> Usage: ${prefix}delete [giveaway message ID]\n ${prefix}delete 54684641254645164514`))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.delete(messageID).then(() => {
                    message.channel.send('Success! Giveaway deleted!');
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
            if (command === 'end') {
              if(message.author.bot) return;
          if(message.channel.type === "dm") return;
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                .setColor("c32b61")

            .setDescription(`> Usage: ${prefix}end [giveaway message ID]\n ${prefix}end 54746465468154668456`))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.end(messageID).then(() => {
                    message.channel.send(`Success! Giveaway ended!`);
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
        });
        



client.login(process.env.token);
