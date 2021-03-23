const Discord = require('discord.js');
const prefix = '-';
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLocaleLowerCase();


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