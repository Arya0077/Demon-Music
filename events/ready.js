module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("!!help", { // Change your bot's status here
    type: "WATCHING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
