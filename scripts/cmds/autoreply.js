module.exports = {
config: {
name: "autorespondv2",
version: "2.0.0",
author: "Rajveer",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"🌸": ["gorgeous "],
"💚": ["rajvir", "newar", "aayush", "turtle", "rajveer", "🐢", "rajbir"],
"😾": ["🤨", "rando", "khatey"],
"😼": ["wtf", "fuck", "myachikne", "stfu", "puti ", "mugi", "randi ", "muji", "lado"],
"😸": ["haha", "laugh", "lol", "hasayo", "hehe", "hoy"],
"👋": ["🍽😐", "jaja", "🍽"],
"🌊": ["ok", "cool", "bien", "aaich", "hm", "dami", "amai"],
};

// Replies to specific words
const replies = {
"Bye": "A+ tard 🌸💐...",
"Mwah": "💋🌷 bisous ",
"turtle": "Kina mero owner lae bolako? 😾  ",
"k xa": "k xa halkhabar bro 😏",
"baby": "masu ko jhol baby seby yo gc maa nagar 😾 ",
"sut": "laamo afei gayera sutna 😾 ",
"rajvir": "busy xa aile nabola 🧸",
"rajbir": "busy xa paxi bholaunu 🗿👍",
"rajveer": "the person you trying to talk with is busy rn",
"oi": "muley halla nagar ",
"newar": "Mero owner lae salam gar 🧸"};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
};