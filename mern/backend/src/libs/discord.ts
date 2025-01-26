
import {Client , GatewayIntentBits} from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    intents : [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.on("messageCreate", (message) => {
    // console.log(message.content);
    if(message.author.bot) return;
    message.reply({
        content : "Hi From Bot"
    })
});

console.log("Discord bot is Ready to go");
client.login(process.env.DISCORD_BOT_TOKEN);