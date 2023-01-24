const APPLICATION_ID = process.env.DISCORD_APPLICATION_ID 
const TOKEN = process.env.token 
const GUILD_ID = process.env.GUILD_ID 


const axios = require('axios')

const discord_api = axios.create({
  baseURL: 'https://discord.com/api/',
  timeout: 3000,
  headers: {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
	"Access-Control-Allow-Headers": "Authorization",
	"Authorization": `Bot ${TOKEN}`
  }
});

const run = async function(){

    let slash_commands = [
        {
          "name": "submit",
          "description": "Submit info on what you are building to share with others during office hours",
          "options": []
        },
      ]
      try
      {
        let discord_response = await discord_api.put(
          `/applications/${APPLICATION_ID}/guilds/${GUILD_ID}/commands`,
          slash_commands
        )
        console.log(discord_response.data)
        console.log('commands have been registered')
      }catch(e){
        console.error(e.code)
        console.error(e.response?.data)
        console.log(`${e.code} error from discord`)
        // throw e.response?.data
        throw e
      }
    
    
}


run()