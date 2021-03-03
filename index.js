const Discord = require('discord.js');
const bot = new Discord.Client;
const prefix = '-';
 
bot.on('ready', () => {
    console.log('Your bot is now online!')
    bot.user.setActivity(" for commands | -commands",{
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
            { name: 'Use this command to view the help directory.', value: '**-help**' },
            { name: 'Use this command to view the help directory in direct messages or DMs.', value: '**-dmhelp**'},
            { name: 'Use this command to see all commands.', value: '**-commands**'},
            { name: 'Use this command to see the member count of the server the bot it currently in.', value: '**-membercount**'},
            { name: 'Use this command to see the current time.', value: '**-time**'},
            { name: `Use this command to kick a member from a discord server.`, value: '**-kick**' },
            { name: `Use this command to ban a member from a discord server.`, value: '**-ban**' },
        )
        .setFooter('Developed by Ghoulz is Just Ok at Coding#8325')
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
                        message.channel.send('Please specify who you would like to ban.')
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
            

})

// this is the bots token btw ODE2NjYyNTExNDY5NzIzNjY5.YD-OOw.CybHLmoxD9uxs9LQVM9qhg54OLg
bot.login(process.env.token);