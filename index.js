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


    if (command === 'commands') {
        const commandHelp = new Discord.MessageEmbed()
        .setColor(0x0000ff)
        .setTitle('**Command Directory**')
        .addFields(
            { name: '**-commands**', value: 'Use this command to see all commands.'},
            { name: '**-say**', value: 'Use this command to make the bot say something.'},
            { name: '**-membercount**', value: 'Use this command to see the member count of the server the bot it currently in.'},
            { name: '**-time**', value: 'Use this command to see the current time.'},
            { name: '**-warn**', value: 'Use this command to warn a user.'},
            { name: `**-kick**`, value: 'Use this command to kick a member from a discord server.' },
            { name: `**-mute**`, value: 'Use this command to mute a member.' },
            { name: `**-unmute**`, value: 'Use this command to unmute a member.' },
            { name: `**-ban**`, value: 'Use this command to ban a member from a discord server.' },
            { name: '**-clear**', value: 'Use this command to delete an amount of messages with a confirmation message. (You can only delete less that 99 messages at a time.)'},
            { name: '**-clean**', value: 'Use this command to delete an amount of message without a confirmation message. (You can only delete less that 99 messages at a time.)'},
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
        .setFooter(`Developed by Ghoulz is Good at Coding#8325.`)
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
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('You do not have permision to run this command!')
        let dude = message.mentions.users.first()
        if (!dude) return message.channel.send('You did not list a user to ban! Example: -ban @Ghoulz#8325 *Reason*')

        if (!args[1]) return message.channel.send('You did not provide a reason! Example: -ban @Ghoulz#8325 *Reason*')

    let reason4ban = args.join(" ").slice(22);
    let moderator4ban = message.author;

                    if(dude){
                        const memberTarget = message.mentions.guild.members.cache.get(dude.id)
                        memberTarget.ban();
                        const newEmbed = new Discord.MessageEmbed()
                        .setColor(0xff0000)
                        .setDescription(`:white_check_mark: The user: ${dude} has been banned from: **${message.guild.name}** for the reason of **${reason4ban}**`)
                        
                        message.channel.send(newEmbed)

                        const banEmbed = new Discord.MessageEmbed()
                        .setTitle(`You have been banned from: **${message.guild.name}**!`)
                        .setColor(0xFF0000)
                        .addFields(
                            { name: '**Reason:**', value: `${reason4ban}` },
                            { name: '**Moderator:**', value: `${moderator4ban}` },
                        )
                        .setFooter('Developed by Ghoulz is Good At Coding#8325.')

                        try {
                            dude.send(banEmbed)
                        } catch (error) {
                            console.error();
                        }
                    }
        
                return;
                }
if (command === 'kick') {
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send('You do not have permision to run this command!')
    let kickbro = message.mentions.users.first()
    if (!kickbro) return message.channel.send('You did not list a user to kick! Example: -kick @Ghoulz#8325 *Reason*')

    if (!args[1]) return message.channel.send('You did not provide a reason! Example: -kick @Ghoulz#8325 *Reason*')

let reason4kick = args.join(" ").slice(22);
let moderator4kick = message.author;

                if(kickbro){
                    const kickmemberTarget = message.mentions.guild.members.cache.get(kickbro.id)
                    kickmemberTarget.kick()
                    const newkickbroEmbed = new Discord.MessageEmbed()
                    .setColor(0xff0000)
                    .setDescription(`:white_check_mark: The user: ${kickbro} has been kicked from: **${message.guild.name}** for the reason of **${reason4kick}**`)
                    
                    message.channel.send(newkickbroEmbed)

                    const kickbroEmbed = new Discord.MessageEmbed()
                    .setTitle(`You have been kicked from: **${message.guild.name}!**`)
                    .setColor(0xFF0000)
                    .addFields(
                        { name: '**Reason:**', value: `${reason4kick}` },
                        { name: '**Moderator:**', value: `${moderator4kick}` },
                    )
                    .setFooter('Developed by Ghoulz is Good At Coding#8325.')

                    try {
                        kickbro.send(kickbroEmbed)
                    } catch (error) {
                        console.error();
                    }
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
    let modtomute = message.author
    let reason = args.join(" ").slice(22);
    if (!args[0]) return message.channel.send("Please list a member to mute. Example: -mute @user *reason*")

    if (!args[1]) return message.channel.send("Please list a reason. Example: -mute @user *reason*")
        let mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted!'
        );

        if (!mutedRole) {
            message.channel.send('You need to make a muted role for this discord server. The muted role needs to be named "Muted!". After you make the role you need to go into the text channel permissions and add the Muted! role to the permissions list. Then, go into the permissions of the muted role and turn off the send messages permission. Finally, go to the server settings and drag the Muted! role above the role at the top of the list, making it first. After all of that, run the command again. ')
        }
        if(mutedRole) {
            member.roles.add(mutedRole);
            message.channel.send(`${member} was Successfully muted.`);
        }
        const mutebroEmbed = new Discord.MessageEmbed()
                    .setTitle(`You have been muted in: **${message.guild.name}!**`)
                    .setColor(0xFF0000)
                    .addFields(
                        { name: '**Reason:**', value: `${reason}` },
                        { name: '**Moderator:**', value: `${modtomute}` },
                    )
                    .setFooter('Developed by Ghoulz is Good At Coding#8325.')

                    try {
                        member.send(mutebroEmbed)
                    } catch (error) {
                        console.error();
                    }

    return;
}
if (command === 'unmute') {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if (!args[0]) return message.channel.send('Please list a member to unmute. Example: -unmute @user')
    let mutedRole = message.guild.roles.cache.find(
        (role) => role.name === 'Muted!'
    );
        
        if(mutedRole) {
            member.roles.remove(mutedRole);
            message.channel.send(`${member} was successfully unmuted.`);
        }

        const unmuteEmbed = new Discord.MessageEmbed()
        .setTitle(`You have been unmuted in: **${message.guild.name}**`)
        .setColor(0x008000)
        .setDescription(`You are now able to type in ${message.guild.name}.`)
        .setFooter('Developed by Ghoulz is Good at Coding#8325.')

        try {
            member.send(unmuteEmbed)
        } catch (error) {
            console.error();
        }
        return;
}
if (command === 'warn') {
    if (!message.member.permissions.has("MUTE_MEMBERS")) return message.channel.send('You do not have permision to run this command!')

    let user = message.mentions.users.first()
    if (!user) return message.channel.send('You did not list a user to warn! Example: -warn @Ghoulz#8325 *Reason*')
    
    if (!args[1]) return message.channel.send('You did not provide a reason! Example: -warn @Ghoulz#8325 *Reason*')

    let reason = args.join(" ").slice(22);
    let moderator = message.author;

    const playertowarnEmbed = new Discord.MessageEmbed()
    .setTitle(`You have been warned in **${message.guild.name}**!`)
    .setColor(0xFF0000)
    .addFields(
        { name: '**Reason:**', value: `${reason}` },
        { name: '**Moderator:**', value: `${moderator}`},
    
    )
    .setFooter("Developed by Ghouz is Good at Coding#8325.")

    message.channel.send(`The user: ${user} has been warned for: ${reason}`)
    user.send(playertowarnEmbed)

    return;
}
if (command === 'say') {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use that command.');
    let botmessage = args.join(" ");
    if (!args[1]) message.channel.send('Please list something for me to say. Example: -say Hello There')
    message.delete().catch();
    message.channel.send(botmessage);
    return;
}

}) 



bot.login(process.env.token);