"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages]
});
client.on("messageCreate", (message) => {
    // console.log(message.content);
    if (message.author.bot)
        return;
    message.reply({
        content: "Hi From Bot"
    });
});
console.log("Discord bot is Ready to go");
client.login(process.env.DISCORD_BOT_TOKEN);
