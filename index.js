const express = require("express");
const app = express();
const db = require('quick.db')
const ms = require('ms');

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');

const { Client, GatewayIntentBits , MessageEmbed  } = require('discord.js');
const client = new Discord.Client();


client.on("ready", async() => {
        console.log(`I 'm online!`)
client.user.setActivity('mention me to get prefix!', { type: 'WATCHING' });

});

  client.on('ready', async() => {          

        console.log("Hello Im Online")
});


const prefix = '..';

const prefixx = prefix






client.on('message', async message => {
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'set-low') {
      let test = db.get(`admin_${message.author.id}`) || false;
      if (!test) return;
  
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("❌ انت مش أدمن!");
      }
  
      const text = args.join(" ");
      if (!text || text.length < 1) {
        const errEmbed = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("🚫 خطأ في التعيين")
          .setDescription("يرجى كتابة نص الشروط اللي عايز تضيفها.")
          .setFooter("مثال: !set-low الشروط هنا")
          .setTimestamp();
        return message.channel.send(errEmbed);
      }
  
      const successEmbed = new Discord.MessageEmbed()
        .setColor("#00ccff")
        .setTitle("📋 تم تعيين الشروط")
        .setDescription(`✅ تم إضافة الشروط التالية للقيف أوي:\n\n**${text}**`)
        .setTimestamp();
  
      message.channel.send(successEmbed).then(() => {
        db.set(`loa_${message.author.id}_${message.guild.id}`, text);
      }).catch(console.error);
    }
  });
//
const men = "**\@eveyone**"

client.on('message', async message => {
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'remove-low') {
      let test = db.get(`admin_${message.author.id}`) || false;
      if (!test) return;
  
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("❌ انت مش أدمن!");
      }
  
      const embed = new Discord.MessageEmbed()
        .setColor("#9400ff")
        .setTitle("🗑️ إزالة الشروط")
        .setDescription(`✅ تم إزالة شروط القيف أوي بنجاح <a:give:932419582659014666>`)
        .setTimestamp();
  
      message.channel.send(embed).then(() => {
        db.delete(`loa_${message.author.id}_${message.guild.id}`);
      }).catch(console.error);
    }
  });

//--------------------------set-low-------------------------\\
//--------------------------set-low-------------------------\\      
//--------------------------set-low-------------------------\\
//--------------------------set-low-------------------------\\
//--------------------------remove-low-------------------------\\
client.on('message', async message => {
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'remove-by') {
      let test = db.get(`admin_${message.author.id}`) || false;
      if (!test) return;
  
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("❌ انت مش أدمن!");
      }
  
      const embed = new Discord.MessageEmbed()
        .setColor("#9400ff")
        .setTitle("🗑️ تم الإزالة")
        .setDescription(`❌ تم إزالة المسؤول من الجيف القادم`)
        .setTimestamp();
  
      message.channel.send(embed).then(() => {
        db.delete(`by_${message.guild.id}`);
      }).catch(console.error);
    }
  });
  
//--------------------------set-by-------------------------\\
//--------------------------set-by-------------------------\\
//--------------------------set-by-------------------------\\
//--------------------------set-by-------------------------\\
//--------------------------set-by-------------------------\\

client.on('message', async message => {
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'set-by') {
    let test = db.get(`admin_${message.author.id}`) || false;
    if (!test) return;

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌ انت مش أدمن!");
    }

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) {
      const errEmbed = new Discord.MessageEmbed()
        .setColor("#9400ff")
        .setTitle("🚫 خطأ في التعيين")
        .setDescription("يرجى كتابة منشن أو ID صحيح للمستخدم اللي عايز تضيفه لمسلمين القيف أوي.")
        .setFooter("مثال: !set-by @user")
        .setTimestamp();
      return message.channel.send(errEmbed);
    }

    const successEmbed = new Discord.MessageEmbed()
      .setColor("#9400ff")
      .setTitle("📌 تم التعيين")
      .setDescription(`✅ تم إضافة ${user} إلى مسلمين القيف أوي.`)
      .setTimestamp();

    message.channel.send(successEmbed).then(() => {
      db.set(`by_${message.guild.id}`, user.id);
    });
  }
});
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\
//--------------------------Remove-by-------------------------\\

    const { GiveawaysManager } = require('discord-giveaways');
const { settings } = require('cluster');

    // Starts updating currents giveaways
    const manager = new GiveawaysManager(client, {
        storage: 'giveaways.json',
        updateCountdownEvery: 1000,
        hasGuildMembersIntent: true,
        default: {
            botsCanWin: true,
            embedColor: "9400ff",//لون الامباد حق القيفاواي
            embedColorEnd: "9400ff",//لون الامباد حق القيفاواي لما يخلص
            reaction: '1358110000379203948'
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
                            .setColor("9400ff")

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))
 
            if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                            .setColor("9400ff")

            .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n ${prefix}start 1d 1w nitro classic`))
            if(args[1] < "1") return message.channel.send(new Discord.MessageEmbed()
                            .setColor("9400ff")
                            .setTitle("لازم عدد المختارين يكون 1 و فوق لو انت عايز")
                            .setColor("9400ff"))
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
                        embedColor: '9400ff'
                    },
                    messages: {
                        giveaway: `**<:giveaway:1358110000379203948> **جيفاوي** <:give:932419582659014666>\n 
اضغط علي <:giveaway:1358110000379203948> حتي تشترك في الجيف اوي**`,//رسالة القيف اواي لما يبد
        inviteToParticipate: ``,//الرساله اللي في وسط الامباد لما يبلش القيف اواي
                        giveawayEnded: `**انتهت هذه المسابقه <:warn:1358119879798161529>**`,//رسالة القيف اواي لما يخلص
                        timeRemaining: `
                        **<:plusSign:1358783464501153812> التسليم بواسطه : <@${by}>\n
                         <:news:1357719282930290879> الوقت المتبقي : 
                        {duration}  **`,
        inviteToParticipate: `**<:warn:932432723837059122> الشروط : ${low}**\n`,//الرساله اللي في وسط الامباد لما يبلش القيف اواي
        winMessage: `**<:give:932419582659014666> تم اختيار فائزين و هم  : {winners}\n 
<:star:1358785206139748378> الجائزة : **{prize}**\n
 <:link:1357716975584805116> رابط الجيف اوي  : ${message.url}\n
 <:boost:1358783469060100348> الشروط المضافة الي هاذا الجيف اوي : ${low}\n
 <:plusSign:1358783464501153812> التسليم بواسطة : <@${by}>\n**`,//لما يخلص و يربح شخص يرسل ده
        embedFooter: message.guild.name,
        noWinner: 'ليس هنا ضغطه الرياكشن',
        hostedBy: `Hosted by : ${by}`,
        winners: ` Winner(s) `,
        endedAt: `End`,
                    }
            }).then((gData) => {
                console.log(`Giveaway started with ID ${gData.messageID}`);
                
            });
        }
        if (command === 'reroll') {
            let test = db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات
            if (!test) return;
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
                let test = db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات
                if (!test) return;
              if(message.author.bot) return;
          if(message.channel.type === "dm") return;
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                .setColor("9400ff")
            .setDescription(`> Usage: ${prefix}edit [giveaway message ID] [time] [winners] [prize]\n ${prefix}edit 6468456486465811 1d 1w nitro classic`))
                  if(args[2] < "1w") return message.channel.send(new Discord.MessageEmbed()
                            .setColor("9400ff")
                            .setTitle("لازم عدد المختارين يكون 1 و فوق لو انت عايز")
                            .setColor("9400ff"))
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
                let test = db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات
                if (!test) return;
              if(message.author.bot) return;
          if(message.channel.type === "dm") return;
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setColor("9400ff")

            .setDescription(`> Usage: ${prefix}delete [giveaway message ID]\n ${prefix}delete 54684641254645164514`))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.delete(messageID).then(() => {
                    message.channel.send('Success! Giveaway deleted!');
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
            if (command === 'end') {
                let test = db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات
                if (!test) return;
              if(message.author.bot) return;
          if(message.channel.type === "dm") return;
                if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('you not allowed to use this!')
                const messageID = args[0];
                if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                .setColor("9400ff")

            .setDescription(`> Usage: ${prefix}end [giveaway message ID]\n ${prefix}end 54746465468154668456`))
                if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
                client.giveawaysManager.end(messageID).then(() => {
                    message.channel.send(`Success! Giveaway ended!`);
                }).catch((err) => {
                    message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
                });
            }
        });
        


//--------------------------mu-------------------------\\



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
            let test = await db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات

            if (!test) return;
    
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
                        color: '9400ff',
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
    let pretty;
    (async () => {
      pretty = (await import('pretty-ms')).default;
    
    
              time = isNaN(time) ? 'forever' : pretty(time)
                    let mute_dataaa = db.get(`mute_${message.guild.id}_${user.id}`)
            if (mute_dataaa == null) return   message.channel.send('✖ **لا يوجد لدية ميوت**')

            
        const mmm = (mute_dataaa.time - (Date.now() - mute_dataaa.date))
            message.channel.send(new MessageEmbed()
            .setColor("9400ff")
            .setAuthor({iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true })) 
            .setDescription(`>  User : ${user} ${process.env.emouser || " "}
    
      ** \`INFO\`** ${process.env.emoinfo || " "}:
    ---------------------
    **
    Admin :  <@${mod}> ${process.env.emoadmin || " "}
    
    MuteReason : ${reason} ${process.env.emoreason || " "}
    
    TimeMute : ${pretty(mmm)} ${process.env.emotime || " "}
    **
    ---------------------`))
})();
        })
     
      
        }
    
        });
    
    
    
          client.on('message', async message => {
    
       if (message.content.startsWith(prefix + 'unmute')) {
            let test = await db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات
            if (!test) return;
            let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
    let user = message.mentions.members.first()
    if (!user) return message.channel.send('❌ I cant find this member')
    if (!user.roles.cache.get(muteRole.id)) return message.channel.send(`❌ This member isn't muted`)
    
    user.roles.remove(muteRole).then(() => {
    
       
      let mute_data = db.get(`mute_${message.guild.id}_${user.id}`)
    
    
        
          let mute_dataa = db.get(`mute_${message.guild.id}_${user.id}`)
            if (mute_data == null) return   message.channel.send('✖ **لا يوجد لدية ميوت**')
                let pretty;
            (async () => {
              pretty = (await import('pretty-ms')).default;
          
            
    
        const mm = (mute_dataa.time - (Date.now() - mute_dataa.date))
             const reason = db.get(`reason_${message.guild.id}_${user.id}`)
    const mod =db.get(`mod_${message.guild.id}_${user.id}`)

    db.delete(`reason_${message.guild.id}_${user.id}`)
    db.delete(`mod_${message.guild.id}_${user.id}`)
            db.delete(`mute_${message.guild.id}_${user.id}`)
           
              message.channel.send(new MessageEmbed()
            .setColor("9400ff")
            .setAuthor({iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))   
            .setDescription(`🤐 Successfully unmute
        
         ** \`INFO\`**
    ---------------------
    **
    User : ${user} 👤
    
    Admin :  <@${mod}> ${process.env.emoadmin || " "}
    
    MuteReason : ${reason} ${process.env.emoreason || " "}
    
    TimeMute : ${pretty(mm)} ${process.env.emotime || " "}\n
    
    **
    ---------------------`))
})();
    })
                                     }
                                     
    })
    
    client.on('message', async message => {
    
        if (message.content.startsWith(prefix + 'info-mute')) {
            let test = await db.get(`admin_${message.author.id}`) || false; // جلب حالة المستخدم من قاعدة البيانات
            let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
            if (!test) return;

    
        if (!message.guild) return;
       
          if(!user) return message.channel.send("منشن العضو من فضلك")
            let mute_data = db.get(`mute_${message.guild.id}_${user.id}`)
            if (mute_data == null) return   message.channel.send('✖ **لا يوجد لدية ميوت**')
    
    
        const m = (mute_data.time - (Date.now() - mute_data.date))
    
        let pretty;
        (async () => {
          pretty = (await import('pretty-ms')).default;
       
        
    
    
    const reason = db.get(`reason_${message.guild.id}_${user.id}`) || "No Reason"
    
    const timem =db.get(`mute_${message.guild.id}_${user.id}`) || "0"
    
    const mod =db.get(`mod_${message.guild.id}_${user.id}`) || "No Mod"
    if (mute_data.time - (Date.now() - mute_data.date) > 0) {
    
    
    
    
    message.channel.send(new MessageEmbed()
            .setColor("9400ff")
            .setAuthor({iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))    
            .setDescription(`☑ ** تم ايجاد معلومات الميوت لهاذا العضو**
    ---------------**
    Reason : ${reason} ${process.env.emoreason || " "}\n
    Time : ${pretty(m)} ${process.env.emotime || " "}\n
    Mod : <@${mod}> ${process.env.emoadmin || " "}\n  
    **`))
    
    
    }
})();  
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
    
    
    
    //------------------------------admin----------\\

    client.on('message', async message => {
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(prefix)) return;
      
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
      
        // ✅ إضافة مسؤول
        if (command === 'addadmin') {
          let allowed = "771223207536623686";
          if (!allowed.includes(message.author.id)) return;
      
          const userId = args[0];
          if (!userId) {
            return message.channel.send(new Discord.MessageEmbed()
              .setColor("#ff0000")
              .setTitle("🚫 خطأ")
              .setDescription("يرجى كتابة ID المستخدم الذي تريد إضافته كمسؤول."));
          }
      
          await db.set(`admin_${userId}`, true);
      
          return message.channel.send(new Discord.MessageEmbed()
            .setColor("#00cc66")
            .setTitle("✅ تمت الإضافة")
            .setDescription(`تم إضافة <@${userId}> كمسؤول في النظام.`));
        }
      
        // ❌ إزالة مسؤول
        if (command === 'removeadmin') {
          let test = db.get(`admin_${message.author.id}`) || false;
          if (!test) return;
      
          const userId = args[0];
          if (!userId) {
            return message.channel.send(new Discord.MessageEmbed()
              .setColor("#ff0000")
              .setTitle("🚫 خطأ")
              .setDescription("يرجى كتابة ID المستخدم الذي تريد إزالته."));
          }
      
          await db.delete(`admin_${userId}`);
      
          return message.channel.send(new Discord.MessageEmbed()
            .setColor("#ff3300")
            .setTitle("✅ تم الحذف")
            .setDescription(`تم إزالة <@${userId}> من قائمة المسؤولين.`));
        }
      
        // 📋 عرض المسؤولين
        if (command === 'listadmins') {
          let test = db.get(`admin_${message.author.id}`) || false;
          if (!test) return;
      
          const all = await db.all();
          const admins = all.filter(entry => entry.id.startsWith("admin_"));
      
          if (admins.length === 0) {
            return message.channel.send(new Discord.MessageEmbed()
              .setColor("#cccccc")
              .setTitle("📋 قائمة المسؤولين")
              .setDescription("لا يوجد مسؤولين حاليًا."));
          }
      
          const adminList = admins
            .map(admin => `<@${admin.id.replace("admin_", "")}>`)
            .join("\n");
      
          return message.channel.send(new Discord.MessageEmbed()
            .setColor("#3399ff")
            .setTitle("📋 قائمة المسؤولين")
            .setDescription(adminList)
            .setFooter(`عدد المسؤولين: ${admins.length}`));
        }
});
    
    
    
    
    
client.login(process.env.token);
