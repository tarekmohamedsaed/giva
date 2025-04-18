const express = require("express");
const app = express();
require('events').EventEmitter.defaultMaxListeners = 30;  // يمكنك تعديل الرقم حسب الحاجة
app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');


const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,                      // للوصول إلى معلومات الخوادم
    Intents.FLAGS.GUILD_MESSAGES,              // للوصول إلى الرسائل في الخوادم
    Intents.FLAGS.MESSAGE_CONTENT,             // للوصول إلى محتوى الرسائل
    Intents.FLAGS.GUILD_MEMBERS,               // للوصول إلى معلومات الأعضاء في الخوادم
    Intents.FLAGS.GUILD_MEMBER_UPDATES,        // للوصول إلى تحديثات الأعضاء
    Intents.FLAGS.GUILD_PRESENCES,             // للوصول إلى حالة الأعضاء
    Intents.FLAGS.GUILD_VOICE_STATES,          // للوصول إلى حالة الصوت للأعضاء
    Intents.FLAGS.GUILD_INVITES,               // للوصول إلى الدعوات في الخوادم
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,   // للوصول إلى الـ Emojis والـ Stickers
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS,      // للوصول إلى الأحداث المجدولة في الخوادم
    Intents.FLAGS.DIRECT_MESSAGES,             // للوصول إلى الرسائل الخاصة
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,    // للوصول إلى ردود الفعل على الرسائل الخاصة
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,       // للوصول إلى بيانات الكتابة في الرسائل الخاصة
    Intents.FLAGS.MESSAGE_TYPING,              // للوصول إلى الكتابة في الخوادم
    Intents.FLAGS.GUILD_WEBHOOKS,              // للوصول إلى Webhooks في الخوادم
    Intents.FLAGS.GUILD_BANS,                  // للوصول إلى بيانات الحظر في الخوادم
    Intents.FLAGS.GUILD_INTEGRATIONS           // للوصول إلى Integrations مثل Twitch و YouTube
  ]
});


client.on("messageCreate", async() => {
        console.log(`I 'm online!`)
client.user.setActivity('mention me to get prefix!', { type: 'WATCHING' });

});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === prefix + 'ping') {
    const ping = Date.now() - message.createdTimestamp;
    message.channel.send(`🏓 Pong! \`${ping}ms\``);
  }
});
client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content) {
   console.log("done ["+message.content+"]")
  }
});

client.on('ready', async () => {
 const guild = client.guilds.cache.get('1361805464735580231'); // ID السيرفر
  if (!guild) return console.error('❌ السيرفر مش موجود أو البوت مش فيه.');

  const channel = guild.channels.cache.get('1361805465163403517'); // ID الروم الصوتي
  if (!channel || channel.type !== 'voice') return console.error('❌ الروم مش صوتي أو مش موجود.');

  channel.join()
    .then(connection => {
      console.log('✅ دخلت الروم الصوتي بنجاح!');
    })
    .catch(err => {
      console.error('❌ حصل خطأ أثناء الدخول للروم:', err);
    });
});


const prefix = '..';

const prefixx = prefix
    const deve = ["790598733771309076","771223207536623686","792453054150082560"]




const test = ["790598733771309076"]
client.on('messageCreate', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);   
      const command = args.shift().toLowerCase();
  if (command === `set-low`) {

 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }
if(!args) return message.channel.send("اكتب الشروط حقت الجيف اوي")
message.channel.send(`تم اضافة ${args.join(" ")} الي شروط القيف اوي <:bin:1136203361067216966> `).then(()=> {

db.set(`loa_${message.author.id}_${message.guild.id}`,args.join(" "))
    
})
  }
});
//

const men = "**\@eveyone**"
client.on('messageCreate', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  if (command === `remove-low`) {


 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }
message.channel.send(`**تم ازالة شروط القيفاوي **<:bin:1136203361067216966>`).then(()=> {

db.delete(`loa_${message.author.id}_${message.guild.id}`)
    
})
  }
});
client.on('messageCreate', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  if (command === `remove-by`) {


 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }
message.channel.send(`**تم ازالة مسلمين القيفاوي **<:admin:1136203358970052680>`).then(()=> {

db.delete(`by_${message.guild.id}`)
    
}).catch(err => { console.log(err)})
  }
});

const db = require('quick.db')


client.on('messageCreate', async message => {
  
    if(message.channel.type === "dm") return;
  
    const args = message.content.slice(prefixx.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  if (command === `set-by`) {

         var user = message.mentions.members.first() || client.users.cache.get(args[1]);


 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }if(!user) return message.channel.send("اكتب ايدي او منشن المسلم  بتاع الجيف اوي")
message.channel.send(` <:admin:1136203358970052680> تم اضافة ${user} الي مسلمين القيف اوي`).then(()=> {

db.set(`by_${message.guild.id}`,user.id)
    
})
  }
});
/*
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
            reaction: '🎉'
        }
    });
    client.giveawaysManager = manager;
    client.on('messageCreate', (message) => {
        const ms = require('ms'); // npm install ms
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let giveaway = client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.prize === args.join(' ')) || client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.messageID === args[0]);
        if(message.content.includes(client.user.id)) return message.channel.send(`Prefix My : \`${prefix}\`
        
        list help  : \`${prefix}help\``)
        if (command === 'start') {
          if(message.author.bot) return;
          if(message.channel.type === "dm") return;
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }            
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
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }
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
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }                const messageID = args[0];
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
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }                const messageID = args[0];
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
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }                const messageID = args[0];
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
        


*/
/*
const { GiveawaysManager } = require('discord-giveaways');
const { settings } = require('cluster');
const ms = require('ms'); // npm install ms

// إعدادات الـ Giveaways
const manager = new GiveawaysManager(client, {
    storage: 'giveaways.json',
    updateCountdownEvery: 5000,
    hasGuildMembersIntent: true,
    default: {
        botsCanWin: true,
        embedColor: "0054ff", // لون الامباد حق القيفاواي
        embedColorEnd: "f7001d", // لون الامباد لما ينتهي القيفاواي
        reaction: '🎉' // رمز الرياكشن
    }
});
client.giveawaysManager = manager;

client.on('messageCreate', (message) => {

    if (message.content.includes(client.user.id)) return message.channel.send(`Prefix My : \`${prefix}\`
    list help  : \`${prefix}help\``);
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// البحث عن الجيف اواي الحالي
let giveaway = client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.prize === args.join(' ')) || client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.messageID === args[0]);

// إذا كانت الرسالة تتضمن الـ ID الخاص بالبوت، رد على المستخدم برسالة توضح البريفكس
if (message.content.includes(client.user.id)) return message.channel.send(`Prefix My : \`${prefix}\`\nlist help  : \`${prefix}help\``);

// التحقق من الأمر
if (command === 'start') {
    if (message.author.bot) return; // تجاهل الرسائل من البوتات
    if (message.channel.type === "dm") return; // تجاهل الرسائل من الـ DM

    // التحقق إذا كان المستخدم في قائمة المسموح لهم
    if (!deve.includes(message.author.id)) {
        return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
    }

    // جلب الشروط من قاعدة البيانات
    const low = db.get(`loa_${message.author.id}_${message.guild.id}`) || "ليس هناك شروط";
    const by = db.get(`by_${message.guild.id}`) || message.author.id;

    // التحقق من وجود المعاملات المطلوبة
    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
        .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n${prefix}start 1d 1w nitro classic`));

    if (!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
        .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n${prefix}start 1d 1w nitro classic`));

    if (!args[2]) return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
        .setDescription(`> Usage: ${prefix}start [time] [winners] [prize]\n${prefix}start 1d 1w nitro classic`));

    // تحقق من صحة الوقت المُدخل (مثل 1d, 2h)
    const time = ms(args[0]);
    if (!time) {
        return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> الوقت غير صحيح، يرجى إدخال الوقت بتنسيق صحيح مثل: 1d, 2h, 1w`));
    }

    // تحقق من صحة عدد الفائزين (يجب أن يكون رقمًا)
    const winners = parseInt(args[1]);
    if (isNaN(winners) || winners <= 0) {
        return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> عدد الفائزين غير صحيح، يرجى إدخال رقم صحيح أكبر من 0`));
    }

    // تحقق من أن الجائزة ليست فارغة
    const prize = args.slice(2).join(' ');
    if (!prize) {
        return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> الجائزة غير صحيحة، يرجى تحديد الجائزة بشكل صحيح.`));
    }

    // تنفيذ إنشاء الجيف اواي
    client.giveawaysManager.start(message.channel, {
        time: time,
        prize: prize,
        winnerCount: winners,
        hostedBy: message.author,
        description: low,
    }).then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> الجيف اوي بدأ بنجاح! 🎉\n**الوقت المتبقي**: ${args[0]}\n**عدد الفائزين**: ${winners}\n**الجائزة**: ${prize}`));
    }).catch(err => {
        console.error(err);
        message.channel.send("حدث خطأ أثناء بدء الجيف اوي.");
    });
}


    if (command === 'reroll') {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }

        const messageID = args[0];
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`> Usage: ${prefix}reroll [giveaway message ID]\n ${prefix}reroll 44564686464886546978`));

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
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }

        const messageID = args[0];
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> Usage: ${prefix}edit [giveaway message ID] [time] [winners] [prize]\n ${prefix}edit 6468456486465811 1d 1w nitro classic`));

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
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }

        const messageID = args[0];
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> Usage: ${prefix}delete [giveaway message ID]\n ${prefix}delete 54684641254645164514`));

        if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');

        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send('Success! Giveaway deleted!');
        }).catch((err) => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
    }

    if (command === 'end') {
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }

        const messageID = args[0];
        if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("0054ff")
            .setDescription(`> Usage: ${prefix}end [giveaway message ID]\n ${prefix}end 54746465468154668456`));

        if (!giveaway) return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');

        client.giveawaysManager.end(messageID).then(() => {
            message.channel.send(`Success! Giveaway ended!`);
        }).catch((err) => {
            message.channel.send('No giveaway found for ' + messageID + ', please check and try again');
        });
    }
});
*/


client = new Discord.Client(),
settings = {
    prefix: "^"
};

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
        storage: __dirname+"/giveaways.json",
        updateCountdownEvery: 5000,

        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "MANAGE_GUILD", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        embedColorEnd: "BLACK",
        reaction: "🎉"
    
});

client.giveawaysManager = manager;
 



client.on("messageCreate", (message) => {
 
    const ms = require("ms"); 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "create"){
    
        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }
                         let time = args[0];
                      let winners = args[1];
                      let prize = args.slice(2).join(" ")
                      if (!time || !winners || !prize) return message.reply(`Wrong Use | Usage : \n **${prefix}create** <time> <winners> <prize>`)
                      if (isNaN(winners)) return message.reply(`Winner Need To Be Number`)
                      if (!time) return message.reply(`1s , 1m , 1h , 1w , 1mn`)
      
client.giveawaysManager.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
      messages: {
       giveaway: "🎉🎉  **NEW GIVEAWAY** 🎉🎉",
        giveawayEnded: "@everyone\n\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**! ⏲️ ",
        inviteToParticipate: "**React with 🎉 to participate this giveaway **!",
        winMessage: "Congratulations, {winners}! You won **{prize}**🎊🎉 !",
        embedFooter: "Giveaways",
        noWinner: "😟 No Winner !",
        winners: "winner(s) 🥳",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days"
        }
    }
});
    }
});


client.on("messageCreate", (message) => {
 
    const ms = require("ms"); 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "reroll"){
      
        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }
      let messageID = args[0];
      if(!messageID) messageID = "**Not found :x: **";
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled! :tada:");
        }).catch((err) => {
            message.channel.send("⛔ No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});



client.on("messageCreate", (message) => {
 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "end"){

        if (!deve.includes(message.author.id)) {
            return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
        }
      let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway Ended 🎊 !");
        }).catch((err) => {
          if(!messageID) messageID = "**None :x: **";
            message.channel.send("⛔ No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});



//help


client.on('messageCreate', message => {
  var helplist = `**قائمة الاوامر  

> ${prefix}create <time> <winners> <prize> : لعمل جيف اواي
> ${prefix}end + Message Id : لانهاء جيف اواي بدون تحديد الفائز
> ${prefix}reroll + Message Id : لاختيار شخص اخر للفوز ب الجيف اواي**`
  if(message.content === prefix + 'help') {
            message.delete(1000)
    let e = '** جاري الارســال .. :envelope_with_arrow: **'
	  message.reply(e).then(m => m.delete(1000))
	  message.author.send(helplist).catch(error => message.reply('** لم اتمكن من الارسال الاوامر لك , يرجي فتح خاصك :negative_squared_cross_mark:**'))
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
  
client.on('messageCreate', async message => {

let user = message.mentions.members.first()


    if (!message.guild) return;

    if (message.content.startsWith(prefix + 'mute')) {

 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }
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



      client.on('messageCreate', async message => {

   if (message.content.startsWith(prefix + 'unmute')) {
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }        let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
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

client.on('messageCreate', async message => {

    if (message.content.startsWith(prefix + 'info-mute')) {
 if (!deve.includes(message.author.id)) {
    return message.channel.send("❌ انت مش مسموحلك تستخدم الأمر ده!");
  }
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
