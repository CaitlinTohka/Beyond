/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "rules",
      description: "shows the rules for beyond",
      category: "general",
      usage: `${client.config.prefix}rules`,
      baseXp: 0,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "mods",
        buttonText: { displayText: `${this.client.config.prefix}mods` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `_*----🎀[Rule]🎀----*_\n\n❌*DONT ASK FOR THE SCRIPT*🚫\n*>>>* use $support to get the Official group link in your dm\n*--->*  If you want to chat with Star you can use *Don't chat in private bot can't chat in Pm\n*--->* If you want to add Yotsuba in your group the contact the owner by *$owner/$mods* \n*--->* Dont use wrong command, use the command given in the *help list* \n*--->* Dont spam the bot with commands if the bot is not responding, its means the bot maybe offline or facing internet issue. \n*--->* Dont Dm the bot \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON* 🚫`,
      footerText: "🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
