const axios = require('axios');

module.exports = {
  config: {
    name: "mistral",
    author: "Rajveer--",//api by rajveer
    version: "2.5
",
    countDown: 5,
    role: 0,
    category: "Ai",
    shortDescription: {
      en: "{p}mistral"
    }
  },
  onStart: async function ({ api, event, args }) {
    try {
      if (!args[0]) {
        return api.sendMessage("Please provide a prompt for Mistral.", event.threadID);
      }

      const prompt = encodeURIComponent(args.join(" "));
      const apiUrl = `https://code-merge-api-hazeyy01.replit.app/api/mistral/response?prompt=${prompt}`;

      const response = await axios.get(apiUrl);

      if (response.data && response.data.response) {
        api.sendMessage(response.data.response, event.threadID);
      } else {
        api.sendMessage("message garna gaaro vo rajveer lae...", event.threadID);
      }
    } catch (error) {
      console.error('Error making rajveer API request:', error.message);
      api.sendMessage("rajveer le yo message padhna sakena aurko kunei kura sodha uslae..", event.threadID);
    }
  }
};
