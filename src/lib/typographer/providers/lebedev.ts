const { exec } = require("child_process");

import BaseProvider from "./base";
import { TypographyRequestData, TypographyRequestOptions } from "./types";

export class LebedevProvider extends BaseProvider {
  async request(payload: TypographyRequestData, options: TypographyRequestOptions) {
    const command = `curl 'https://www.artlebedev.ru/typograf/ajax.html' -H 'Referer: https://www.artlebedev.ru/typograf/?showsetting' --data 'doTypa=1&msg=${encodeURI(
      payload
    ).replace(`'`, `%27`)}&quote_1=3&quote_2=5&entity=0' --compressed`;

    console.log(command);

    const { stdout, stderr } = await exec(command);
    stdout.on("data", (data: unknown) => {
      console.log(data);
    });

    // console.error("stderr:", stderr);
    // console.log(payload, options);
    return "";
  }
}

export default LebedevProvider;
