const Discord = require('discord.js');
const bot = new Discord.Client;
const prefix = '-';
const fs = require('fs');
const ms = require('ms');



bot.on('ready', () => {
    console.log('Your bot is now online!')
    bot.user.setActivity("for commands | -commands",{
        type: "WATCHING"
    })
});


bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if(!message.content.startsWith(prefix))return;

    
    if (command === 'help') {
        const helpDirectory = new Discord.MessageEmbed()
        .setColor(0xFFA500)
        .setTitle('Help Directory')
        .addFields(
            { name: 'Direct Messages', value: 'Use the command "-2" to learn more.'},
        )
        .setFooter('Developed by Ghoulz is Just Ok at Coding#8325')
    message.channel.send(helpDirectory);
    return;
    }
    if (command === '2') {
        const DirectMessageHelp = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('Direct Messages')
        .setDescription('To contact a specific admin or staff member privately, please feel free to directly message them.')
        .setFooter('Developed by Ghoulz is Just Ok at Coding#8325')
    message.channel.send(DirectMessageHelp);
    return;
    }
    if (command === 'dmhelp') {
        const dmEmbed = new Discord.MessageEmbed()
        .setColor(0xFFA500)
        .setTitle('Help Directory')
        .addFields(
            { name: 'Direct Messages', value: 'Use the command "-2" to learn more.'},
        )
        .setFooter('Developed by Ghoulz is Just Ok at Coding#8325')
    message.author.send(dmEmbed)
    message.channel.send(`Check for the dm from <@816662511469723669>, ${message.author}.`)
    return;
    }
    if (command === 'commands') {
        const commandHelp = new Discord.MessageEmbed()
        .setColor(0x0000ff)
        .setTitle('**Command Directory**')
        .addFields(
            { name: '**-commands**', value: 'Use this command to see all commands.'},
            { name: '**-membercount**', value: 'Use this command to see the member count of the server the bot it currently in.'},
            { name: '**-time**', value: 'Use this command to see the current time.'},
            { name: `**-kick**`, value: 'Use this command to kick a member from a discord server.' },
            { name: `**-mute**`, value: 'Use this command to mute a member.' },
            { name: `**-unmute**`, value: 'Use this command to unmute a member.' },
            { name: `**-ban**`, value: 'Use this command to ban a member from a discord server.' },
            { name: '**-clear**', value: 'Use this command to delete an amount of messages with a confirmation message.'},
            { name: '**-clean**', value: 'Use this command to delete an amount of message without a confirmation message.'},
        )
        .setFooter('Developed by Ghoulz is Good at Coding#8325')
    message.channel.send(commandHelp)
    return;
    }
    if (command === 'membercount') {
        const serverEmbed = new Discord.MessageEmbed()
        .setColor(0x74D5DD)
        .setTitle(`Member Count For: **${message.guild.name}**`)
        .addFields(
            { name: 'Members', value: `${message.guild.memberCount}` },
        )
        .setFooter(`Developed by Ghoulz is Just Ok at Coding#8325.`)
    message.channel.send(serverEmbed)
    return;
    }
    if (command === 'time') {
        const timeEmbed = new Discord.MessageEmbed()
        .setColor(0xffff00)
        .setTimestamp()
    message.channel.send(timeEmbed)
    return;
    }
    if (command === 'ban') {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have permission to run this command.')
                    const member = message.mentions.users.first();
                    if(member){
                        const memberTarget = message.guild.members.cache.get(member.id);
                        memberTarget.ban();
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor(0xff0000)
                        .setDescription(':white_check_mark: The user has been banned.')
                        
                        message.channel.send(newEmbed)
        
                    }else{
                        message.channel.send('Please specify who you would like to ban.')
                    }
        
                return;
                }
                if (command === 'ban') {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have permission to run this command.')
                    const member = message.mentions.users.first();
                    if(member){
                        const memberTarget = message.guild.members.cache.get(member.id);
                        memberTarget.ban();
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor(0xff0000)
                        .setDescription(':white_check_mark: The user has been banned.')
                        
                        message.channel.send(newEmbed)
        
                    }else{
                        message.channel.send(`Please specify who you would like to ban.`)
                    }
        
                return;
}
if (command === 'kick') {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You do not have permission to run this command.')
                const member = message.mentions.users.first();
                if(member){
                    const memberTarget = message.guild.members.cache.get(member.id);
                    memberTarget.kick();
                    const kickEmbed = new Discord.MessageEmbed()
                    .setColor(0xff0000)
                    .setDescription(':white_check_mark: The user has been kicked.')
                    
                    message.channel.send(kickEmbed)
    
                }else{
                    message.channel.send('Please specify who you would like to kick.')
                }
    
            return;
}        
if (command === 'clear') {

    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to run this command.');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please enter a valid number after the command!') }

    if (parseInt(args[0]) > 100) {
        message.reply('You can only delete 100 messages at one time.')
    } else{
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount +1, true);
    message.channel.send(`**Successfully deleted ***${deleteAmount}*** messages!**`)

    return;
}
if (command === 'clean') {
    
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to run this command.');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please enter a valid number after the command!') }

    if (parseInt(args[0]) > 100) {
        message.reply('You can only delete 100 messages at one time.')
    } else{
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount +1, true);

    return;
}
if (command === 'mute') {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;
    
        let mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted!'
        );

        if (!mutedRole) {
            message.channel.send('You need to make a muted role for this discord server. The muted role needs to be named "Muted!". After you make the role you need to go into the text channel permissions and add the Muted! role to the permissions list. Then, go into the permissions of the muted role and turn off the send messages permission. Finally, go to the server settings and drag the Muted! role above the role at the top of the list, making it first. After all of that, run the command again. ')
        }
        if(mutedRole) {
            member.roles.add(mutedRole);
            message.channel.send("User was Successfully muted.");
        }
    return;
}
if (command === 'unmute') {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

    let mutedRole = message.guild.roles.cache.find(
        (role) => role.name === 'Muted!'
    );
        
        if(mutedRole) {
            member.roles.remove(mutedRole);
            message.channel.send("User was Successfully Unmuted.");
        }
        return;
}
if (command === 'warn') {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You do not have permission to do that.");
        const user = message.mentions.users.first();
        const mutedroleid = message.guild.roles.cache.find(
            (role) => role.name === 'Muted!');
        const mutedrole = mutedroleid
        if (!user) return message.reply("Please specify someone you want to warn. **!warn <user> [reason]**");
        const target = message.guild.members.cache.get(user.id);
        if(target.roles.cache.has(mutedroleid)) return message.reply("You cannot warn muted members.");
        if(!mutedrole) return message.reply("Couldn't find the Muted role.");

        const reason = args.slice(1).join(" ");
            const warn = new Discord.MessageEmbed()
            .setColor(0xff0000)
            .setDescription(`${user} has been warned by ${message.author}.`)
            message.channel.send(warn);

    const warnEmbedPlayer = new Discord.MessageEmbed()
    .setTitle("You have been warned!")
    .addFields(
        { name: 'Warned By:', value: `${message.author.username}`},
        { name: 'Reason:', value: reason },
        )
    .setFooter('Developed By Ghoulz is Good At Coding#8325.')

    message.mentions.members.send(warnEmbedPlayer);
return;
}
    

}) 


// this is the bots token btw ODE2NjYyNTExNDY5NzIzNjY5.YD-OOw.CybHLmoxD9uxs9LQVM9qhg54OLg
bot.login(process.env.token);