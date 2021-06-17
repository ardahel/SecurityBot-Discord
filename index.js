const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./settings.json')
const prefix = config.prefix;
const antispam = require('discord-anti-spam')


bot.login("NjU1NTUwNjM3MjIzODM3Njk2.Xft3vA.Ci-18_njOJthV1IVkN6hO_1J2ns")

bot.on('guildMemberAdd', function (member) { 
  let embed = new Discord.RichEmbed()
      .setDescription(':tada: **' + member.user.username + '**est arrivé !**')
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('650408528582017024').send(embed)
});


bot.on("message" , function (message) {
  let args = message.content.trim().split(/ +/g)
     if (args[0].toLowerCase() === prefix + "help") {
  
      const embed = new Discord.RichEmbed()
      .setTitle("**Catégories**")
      .addField("**Commandes de sécurité** :oncoming_police_car:", "**s!sec**")
      .addField("**Voir les info sur le serveur**", "**s!serverinfo**")
      .addField("**Pour obtenir les liens de SecurityBot**", "**s!liens**")
      .setDescription("**Encore en développement.**")
      .setFooter("Crée par Ardahel#6518")
      .setColor("RANDOM")
      message.channel.send(embed)
      }
      });

    
  // bot.on("message" , function (message) {
  //   if(message.content.includes("")){
  //     message.delete();
  //     message.member.send("Pas de raid :D")
  //     console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
  //   }});


bot.on("message" , function (message) {
  let args = message.content.trim().split(t!)
     if (args[0].toLowerCase() === prefix + "t!") {
  
  const embed = new Discord.RichEmbed()
  .setTitle("Sécurité du serveur")
  .setDescription("**C'est important de savoir que SecurityBot est équipé d'un anti-raid activé automatiquement, il détecte le spam et avertit par lui même la personne visée.**")
  .addField("**Voir la liste noir**", "**s!blacklist**")
  .addField("**Vérifié un utilisateur**", "**s!userinfo**")
  .setFooter("Crée par Ardahel#6518")
  .setColor("RANDOM")
  message.channel.send(embed)
  }
  })


            bot.on("message" , function (message) {
              let args = message.content.trim().split(/ +/g)
                 if (args[0].toLowerCase() === prefix + "blacklist") {
              
              const embed = new Discord.RichEmbed()
              .setTitle("Blacklist")
              .setDescription("**SecurityBot n'a trouvé aucun utilisateur dans la blacklist.**")
              .setFooter("Crée par Ardahel#6518")
              .setColor("RANDOM")
              message.channel.send(embed)
              }
              })


              bot.on("message" , function (message) {
                let args = message.content.trim().split(/ +/g)
                   if (args[0].toLowerCase() === prefix + "liens") {
                
                const embed = new Discord.RichEmbed()
                .setTitle("Les liens")
                .addField("**Le serveur support de SecurityBot**", "**https://discord.gg/eEdCZCW**")
                .addField("**Le lien d'invitation de SecurityBot**", "**https://discordapp.com/oauth2/authorize?client_id=655550637223837696&scope=bot&permissions=8**")
                .setFooter("Crée par Ardahel#6518")
                .setColor("RANDOM")
                message.channel.send(embed)
                }
                })
  
           

bot.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('650408528582017024').send(embed)
})


  bot.on("message" , function (message) {
    let args = message.content.trim().split(/ +/g)
       if (args[0].toLowerCase() === prefix + "serverinfo") { 

  const embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
      .setTitle(`**Server info**`)
      .setDescription(`**Info sur** ${message.guild.name}`)
      .addField(`**Nom du serveur**`, `${message.guild.name}`, true)
      .addField(`**ID du serveur**`, `${message.guild.id}`, true)
      .addField(`**Membres**`, `${message.guild.memberCount}`, true)
      .addField(`**Owner**`, `${message.guild.owner.user.tag}`, true)
      .setThumbnail(message.guild.iconURL)
      .setColor("RANDOM")
  message.channel.send(embed)
}
})

bot.on("message" , function (message) {
  let args = message.content.trim().split(/ +/g)
     if (args[0].toLowerCase() === prefix + "userinfo") { 

const embed = new Discord.RichEmbed()
.setTitle(`${message.author.username} Profile`)
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.addField(":id: **ID**", message.author.id, true)
.addField("**Tag**", message.author.tag, true)
.addField(":clock9: **Created**", `${message.author.createdAt}`, true)
.addField(":robot: **C'est un bot?**", message.author.bot, true)
.addField("**Status**", message.author.presence.status, true);

message.channel.send(embed);
}
})


const AntiSpam = new antispam({
  warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
  banThreshold: 12, // Amount of messages sent in a row that will cause a ban
  maxInterval: 2000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "{@user}, le spam et interdit sur le serveur. Tu est avertit.", // Message will be sent in chat upon warning.
  banMessage: "**{user_tag}** a ete ban pour spam.", // Message will be sent in chat upon banning.
  maxDuplicatesWarning: 8, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  maxDuplicatesBan: 15, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
  deleteMessagesAfterBanForPastDays: 1, // Amount of days in which old messages will be deleted. (1-7)
  ignoreBots: false, // Ignore bot messages
  verbose: false, // Extended Logs from module
  });
  
  AntiSpam.on("warnEmit", (member) => console.log(`Attempt to warn ${member.user.tag}.`));
  AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} a ete warn.`));
  AntiSpam.on("kickEmit", (member) => console.log(`Attempt to kick ${member.user.tag}.`));
  AntiSpam.on("kickAdd", (member) => console.log(`${member.user.tag} a ete kick.`));
  AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
  AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} a ete ban.`));
  AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));
  
  bot.on("ready", () => console.log(`Logged in as ${bot.user.tag}.`));
  
  bot.on("message", (msg) => {
  AntiSpam.message(msg);
  });



  

bot.on('ready', () => {
  bot.user.setActivity(`${prefix}help | ${bot.guilds.size} servers.`)
  console.log("ODU1MTc1NjU0NzM5NDEwOTc2.YMuqZA.J5PnZLFkH0ZwTr0q4LMiWEqEfRw");
});


