const discord_api = require('./discord_api')

const payload = {
    "content": " ",
    "embeds": [
        {
            "description": "**What do you make?**"
        }
    ],
    "components": [
        {
            "type": 1,
            "components": [
                {
                    "type": 3,
                    "custom_id": "make",
                    "placeholder": "Pick Your Roles",
                    "min_values": 0,
                    "max_values": 1,
                    "options": [
                        {
                            "label": "JS",
                            "value": "1068251439681503282",
                            "description": "",
                            "emoji": {
                                "name": "javascript",
                                "id": "1063861988960243782"
                            }
                        },
                        // {
                        //     "label": "Full Stacks",
                        //     "value": "1061282057193525309",
                        //     "description": "",
                        //     "emoji": {
                        //         "name": "pharmanite",
                        //         "id": "1060483569409085470"
                        //     }
                        // },
                        // {
                        //     "label": "Front Ends",
                        //     "value": "1061281954290487388",
                        //     "description": "",
                        //     "emoji": {
                        //         "name": "bulls",
                        //         "id": "1060483555567874098"
                        //     }
                        // },
                        // {
                        //     "label": "Bots",
                        //     "value": "1061282118426181692",
                        //     "description": "",
                        //     "emoji": {
                        //         "name": "default",
                        //         "id": "1060483624518025256"
                        //     }
                        // }
                    ]
                }
            ]
        }
    ]
}


const run = async function(){
    try
      {

            let discord_response = await discord_api.post(
            `/channels/${process.env.ROLES_CHANNEL}/messages`,
            payload
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