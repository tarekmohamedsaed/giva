const express = require("express");
const app = express();
const ms = require('ms')//npm install ms
const color = "0054ff"
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Collection,MessageSelectMenu, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require("discord.js");

const pretty = require("pretty-ms")
client.on("ready", async() => {
        console.log(`I 'm online!`)
client.user.setActivity('mention me to get prefix!', { type: 'WATCHING' });

});

  client.on('ready', async() => {
  
          

        console.log("Hello Im Online")
});


const prefix = '.';

const prefixx = prefix

const test = ["771223207536623686"]
client.on('message', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);   
      const command = args.shift().toLowerCase();
  if (command === `set-low`) {
    const deve = ["771223207536623686","877484293813833761","792453054150082560"]

            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')

if(!args) return message.channel.send("اكتب الشروط حقت الجيف اوي")
message.channel.send(`تم اضافة ${args.join(" ")} الي شروط القيف اوي <:bin:1136203361067216966> `).then(()=> {

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

message.channel.send(`**تم ازالة شروط القيفاوي **<:bin:1136203361067216966>`).then(()=> {

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

message.channel.send(`**تم ازالة مسلمين القيفاوي **<:admin:1136203358970052680>`).then(()=> {

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
message.channel.send(` <:admin:1136203358970052680> تم اضافة ${user} الي مسلمين القيف اوي`).then(()=> {

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
            embedColor: "0054ff",//لون الامباد حق القيفاواي
            embedColorEnd: "f7001d",//لون الامباد حق القيفاواي لما يخلص
            reaction: '1136203370491813950'
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
                            .setColor("0054ff")

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))
 
            if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                            .setColor("0054ff")

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))
            
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
                        embedColor: '0054ff'
                    },
                                      messages: {
                        giveaway: `**<:gift:1136203370491813950> **جيفاوي** <:gift:1136203370491813950>\n 
اضغط علي <:gift:1136203370491813950> حتي تشترك في الجيف اوي**`,//رسالة القيف اواي لما يبد
        inviteToParticipate: ``,//الرساله اللي في وسط الامباد لما يبلش القيف اواي
                        giveawayEnded: `**end-Givaway**`,//رسالة القيف اواي لما يخلص
                        timeRemaining: `
                        **التسليم من: <@${by}> <:catur:1136203421997879296>\n
                          الوقت المتبقي : 
                        {duration} <:catur:1136203421997879296> **`,
        inviteToParticipate: `**الشروط : ${low}**  <:bin:1136203361067216966> \n`,//الرساله اللي في وسط الامباد لما يبلش القيف اواي
        winMessage: `<:memberr:1136203563291389983>** تم اختيار فائزين و هم ** : {winners}\n 
<:gift:1136203370491813950>** الجائزة **: **{prize}**\n
 <:mn:1136203510657073263> **رابط الجيف اوي : **[\`اضغط هنا\`](${message.url})\n
 <:bin:1136203361067216966> **الشروط المضافة الي هاذا الجيف اوي : ${low}**\n
<:admin:1136203358970052680> **التسليم بواسطة : <@${by}>**\n`,//لما يخلص و يربح شخص يرسل ده
        embedFooter: message.guild.name,
        noWinner: 'عدد رياكشن ضغطه الخادم فقط ! ',
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
            .setDescription(`> Usage: ${prefix}reroll [giveaway > ID]\n ${prefix}reroll 44564686464886546978`))
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
                .setColor("0054ff")
            .setDescription(`> Usage: ${prefix}edit [giveaway message ID] [time] [winners] [prize]\n ${prefix}edit 6468456486465811 1d 1w nitro classic`))
                  
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.edit(messageID, {
                    addTime: 5000,
                    newWinnerCount: parseInt(args[2]),
                    newPrize: `Prize!: ${args.slice(3).join(' ')}`
                }).then(() => {
                    const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 3000;
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
.setColor("0054ff")

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
                                .setColor("0054ff")

            .setDescription(`> Usage: ${prefix}end [giveaway message ID]\n ${prefix}end 54746465468154668456`))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.end(messageID).then(() => {
                    message.channel.send(`Success! Giveaway ended!`);
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
        });
        











client.on('ready', () => {
console.log(`Client (${client.user.tag}) Now Ready $`)
setInterval(() => {
client.guilds.cache.forEach(guild => {
guild.members.cache.forEach(member => {
let mute_data = db.get(`mute_${guild.id}_${member.id}`)
if (mute_data == null) return;
if (mute_data.time - (Date.now() - mute_data.date) <= 0) {
let role = guild.roles.cache.find(role => role.name == 'Muted')
if (role) member.roles.remove(role).then(() => {
})
}
})
})
}, 5000)
})
  
client.on('message', async message => {

let user = message.mentions.members.first()


    if (!message.guild) return;

    if (message.content.startsWith(prefix + 'mute')) {

if (!test.includes(message.author.id)) return;

        let args = message.content.split(' ').slice(1)
        let user = message.mentions.members.first()


        if (!user) return message.channel.send(new MessageEmbed({
          color:['0054ff'],
            fields: [{ name: "Command: mute", value: "منع احد الاعضاء من الكتابة في الرومات الكتابيه" }, { name: "الاختصارات:", value: "mute" }, { name: "أمثله للأمر:", value: `#mute ${message.author} 1m Spamming\n#mute ${message.author} 1h\n#mute ${message.author} 1d\n#mute ${message.author} 1mo\n#mute ${message.author} 1y`.replace(/#/g, prefix) }, ]
        }))
        let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
        if (!muteRole) {
            muteRole = await message.guild.roles.create({
                data: {
                    name: 'Muted',
                    color: '#0054ff',
                    permissions: []
                }
            });
        }
       // if (user == client.user)

        if (message.mentions.members.first() == client.user) return;
        
        if (user.roles.cache.get(muteRole.id)) return message.channel.send(`❌ This member is muted already`)
        let time = ms(args[1])

      if(!time) return message.channel.send("اكتب المدة")
      const ever = ""
    

        let reason = message.content.split(' ').slice(3).join(' ') || '&&&&'
       /*message.guild.channels.cache.forEach(channel => {
           channel.overwritePermissions([{
               id: muteRole.id,
              deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
            }]);
        });*/
        //if (user.permissions.has("MUTE_MEMBERS" || "DEAFEN_MEMBERS")) return message.channel.send(`❌ This member is a mod`);
        user.roles.add(muteRole).then(() => {
          
db.set(`reason_${message.guild.id}_${user.id}`,reason)

db.set(`mod_${message.guild.id}_${user.id}`,message.author.id)


        db.set(`mute_${message.guild.id}_${user.id}`, {
            time: time,
            date: Date.now(),
       
        })
const mod =db.get(`mod_${message.guild.id}_${user.id}`)
     
          time = isNaN(time) ? 'forever' : pretty(time)
                let mute_dataaa = db.get(`mute_${message.guild.id}_${user.id}`)
        if (mute_dataaa == null) return   message.channel.send('✖ **لا يوجد لدية ميوت**')


    const mmm = (mute_dataaa.time - (Date.now() - mute_dataaa.date))
        message.channel.send(new MessageEmbed()
        .setColor(process.env.color)
        .setDescription(`🤐
        
  ** \`INFO\`**
---------------------
**
User : ${user} 👤

Admin :  <@${mod}> 👮‍♂️

MuteReason : ${reason} 📁

TimeMute : ${pretty(mmm)}

**
---------------------`))
      
    })
 
        
    }

    });



      client.on('message', async message => {

   if (message.content.startsWith(prefix + 'unmute')) {
if (!test.includes(message.author.id)) return;
        let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
let user = message.mentions.members.first()
if (!user) return message.channel.send('❌ I cant find this member')
if (!user.roles.cache.get(muteRole.id)) return message.channel.send(`❌ This member isn't muted`)

user.roles.remove(muteRole).then(() => {

   
  let mute_data = db.get(`mute_${message.guild.id}_${user.id}`)


    
      let mute_dataa = db.get(`mute_${message.guild.id}_${user.id}`)
        if (mute_data == null) return   message.channel.send('✖ **لا يوجد لدية ميوت**')


    const mm = (mute_dataa.time - (Date.now() - mute_dataa.date))
         const reason = db.get(`reason_${message.guild.id}_${user.id}`)
const mod =db.get(`mod_${message.guild.id}_${user.id}`)

db.delete(`reason_${message.guild.id}_${user.id}`)
db.delete(`mod_${message.guild.id}_${user.id}`)
        db.delete(`mute_${message.guild.id}_${user.id}`)
       
          message.channel.send(new MessageEmbed()
        .setColor(process.env.color)
                               .setThumbnail(`${message.author.avatarURL({dynamic : true})}`)

        .setDescription(`🤐 Successfully unmute
    
     ** \`INFO\`**
---------------------
**
User : ${user} 👤

Admin :  <@${mod}> 👮‍♂️

MuteReason : ${reason} 📁

TimeMute : ${pretty(mm)}\n

**
---------------------`))
})
                                 }
                                 
})

client.on('message', async message => {

    if (message.content.startsWith(prefix + 'info-mute')) {
        let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');


    if (!message.guild) return;
   
                  let user = message.mentions.members.first() 
if(!user) return message.channel.send("منشن العضو من فضلك")
        let mute_data = db.get(`mute_${message.guild.id}_${user.id}`)
        if (mute_data == null) return   message.channel.send('✖ **لا يوجد لدية ميوت**')


    const m = (mute_data.time - (Date.now() - mute_data.date))

        


const reason = db.get(`reason_${message.guild.id}_${user.id}`) || "No Reason"

const timem =db.get(`mute_${message.guild.id}_${user.id}`) || "0"

const mod =db.get(`mod_${message.guild.id}_${user.id}`) || "No Mod"
if (mute_data.time - (Date.now() - mute_data.date) > 0) {





message.channel.send(new MessageEmbed()
        .setColor(process.env.color)
                     .setThumbnail(`${message.author.avatarURL({dynamic : true})}`)

        .setDescription(`☑ ** تم ايجاد معلومات الميوت لهاذا العضو**
---------------**
ReasonMute : ${reason}\n
TimeMute : ${pretty(m)}\n
Mod : <@${mod}>\n  
**`))


}
    
    
}
})
client.on("guildMemberAdd", member => {
let muteRole = member.guild.roles.cache.find(role => role.name == 'Muted');
let noree = member.guild.roles.cache.find(role => role.name == '❨❌❩ ・مــحــظــور');
const nore = db.get(`nore_${member.guild.id}_${member.user.id}`)
if (nore) return member.members.fetch(member.user.id).roles.add(noree)
const mutelevay = db.get(`mute_${member.guild.id}_${member.id}`)
if(mutelevay) return member.roles.remove(muteRole)
})











client.login(process.env.token);
