if (command === 'warn') {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You do not have permission to do that.");
        const user = message.mentions.users.first();
        const mutedroleid = message.guild.roles.cache.find(
            (role) => role.name === 'Muted!');
        const mutedrole = mutedroleid
        if (!user) return message.reply("Please specify someone you want to warn. **-warn <user>**");
        const target = message.guild.members.cache.get(user.id);

        const warnEmbedPlayer = new Discord.MessageEmbed()
        .setTitle("You have been warned!")
        .setColor(0xff0000)
        .addFields(
            { name: 'Warned By:', value: `${message.author.username}`},
            { name: 'Reason:', value: 'Breaking one or more rules. If continued, a more severe punishment will be given!' },
            )
        .setFooter('Developed by Ghoulz is Good at Coding#8325.')
        
        message.channel.send("User has been warned!")

        user.send(warnEmbedPlayer)
        user.send(`<@${user.id}>`)
        
return;
}