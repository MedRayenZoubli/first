const { Message, DiscordAPIError } = require('discord.js');
const discord = require('Discord.js');
const client = new discord.Client();
const prefix = '-'
const fs = require('fs');
client.commands = new discord.Collection();
const commandfiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('this bot is online');
});
client.on('message', Message =>{
    if (!Message.content.startsWith(prefix) || Message.author.bot) return ;

    const args = Message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping'){
        client.commands.get('ping').execute(Message, args);
        
    }
    else if(command === 'zboubli'){
        Message.channel.send('https://instagram.com/ahmed.jhider?igshid=YmMyMTA2M2Y=');
    }
    else if(command === 'jhider'){
        Message.channel.send('https://instagram.com/ahmed.jhider?igshid=YmMyMTA2M2Y=');
    }
});


client.login('OTg0OTE4ODM5NTU5MDczODU1.GF98xL.3L86oetNztNJ7uu-XSMRBVD2R1_mj23NwsIB0g');
