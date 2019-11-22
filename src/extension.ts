import * as vscode from "vscode";
import * as commands from "./commands";

import config from "./config";
import { Typographer, TypographerStore, LebedevSerializer, LebedevProvider } from "./lib";

export function activate(context: vscode.ExtensionContext) {
  // Registering all typographers we have, to pick one of them (in accordance
  // to user settings) to perform typography. This service is an application's
  // aspect — it can be used any where, without explicit passwing it somewhere.
  TypographerStore.getInstance().register(config.typographyProvider, {
    serializer: new LebedevSerializer(),
    provider: new LebedevProvider()
  });

  // The service performs text typography in different ways, using different
  // providers for that.
  const typographer = new Typographer(config.typographyProvider);

  // @todo: Find a way to move command titles from package.json to here.
  // Registering extension commands. The command titles can be found in package.json.
  const disposables = [
    vscode.commands.registerCommand("extension.typographSelection", commands.typographSelection(typographer)),
    vscode.commands.registerCommand("extension.typographActiveEditor", commands.typographActiveEditor(typographer))
  ];

  disposables.forEach(disposable => context.subscriptions.push(disposable));
}

export function deactivate() {
  TypographerStore.getInstance().unregister(config.typographyProvider);
}
