import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import Heroku from 'heroku-client'
const heroku = new Heroku({
    token: "fc8b9556-bca5-419b-bd8a-15eb09722f34"
});
const baseURI = '/apps/' + "marin2134"

import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'restart',
            description: `restart bot`,
            aliases: ['restart'],
            category: 'dev',
            usage: `${client.config.prefix}restart`,
            modsOnly: true,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
//if (!this.client.config.hapi) return void M.reply("No heroku API key set");
    //if (!this.client.config.hname) return void M.reply("No heroku name set");
    await M.reply(`Restarting.............`)
await heroku.delete(baseURI + '/dynos').catch(async (error: any) => {
        await M.reply("Error");
    });
}
}
