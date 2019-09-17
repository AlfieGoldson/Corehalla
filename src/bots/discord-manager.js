const Discord = require('discord.js');
const client = new Discord.Client();

const newMembersChannelID = '567834932722794499';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
	member.guild.channels.get(newMembersChannelID).send("➡️ **" + member.user.username + "** joined");
});

client.on('guildMemberRemove', member => {
	member.guild.channels.get(newMembersChannelID).send("⬅️ **" + member.user.username + "** left");
});

client.on('error', console.error);

client.login(process.env.DISCORD_BOT_TOKEN);