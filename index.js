const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const execSync = require('child_process').execSync;
const fs = require('fs');
const https = require('https');

client.on('ready', () => {
  console.log('The bot has logged in.');
});

client.on('messageCreate', message => {

    const args = message.content.slice().trim().split(/ +/);
    const command = args.shift().toLowerCase();
    let text = args.concat();
    const user = message.author.id;
    const server = message.guild.id;

    if (message.content.toLowerCase() == '--initialize') {
	execSync('cd ..; mkdir ' + server + '; cd ' + server + ';echo ' + message.guild.name + ' >> .serverid.txt; mkdir ' + user + '; cd ' + user + '; echo ' + message.author.username + ' >> .userid.txt');
    }

    if (message.content.toLowerCase() == 'ls') {
	console.log(message.author.username);
	const output = execSync('cd ../' + server + '; cd ' + user + '; ls');
	if (output == '') {
	    message.channel.send('The command was issued, but there was no output in stdout, this might mean the folder is empty, try "ls -a"');
	} else {
	    message.channel.send('```' + output + '```');
	}
    }

    if (message.content.toLowerCase() == 'ls -a') {
	const output = execSync('cd ../' + server + '; cd ' + user + '; ls -a');
	message.channel.send('```' + output + '```');
    }
    
    if (command == 'sendfile') {
	try {
	    const output = execSync('cd ../' + server + '/' + user + '/' + '; ls ' + text);
	} catch(err) {
	    message.channel.send('No such file exists, try again.');
	    return;
	}
	    message.channel.send({ files: ['../' + server + '/' + user + '/' + text] });
    }
    
    if (command == 'savefile') {
		let data = message.attachments.first().url
		var content = fs.createWriteStream('../' + server + '/' + user + '/' + text);
		const request = https.get(data, function(response) {
  		response.pipe(content);
});


	};
	//fs.writeFile('../' + server + '/' + user, text, data)
});

client.login("TOKEN HERE");
