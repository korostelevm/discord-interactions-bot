
const discord_api = require('./discord_api')
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
          `/applications/${process.env.DISCORD_APPLICATION_ID}/guilds/${process.env.GUILD_ID }/commands`,
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