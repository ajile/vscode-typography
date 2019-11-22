import * as vscode from "vscode";
import * as typographer from "../lib/typographer";

export const typographActiveEditor = (typographer: typographer.Typographer) => async () => {
  const editor = vscode.window.activeTextEditor;

  // This commands works with active editor only. It cannot get selections that
  // needed to be typographed without editor.
  if (!editor) {
    return;
  }

  console.warn(`The command “typographActiveEditor” is not implemented yet`);
};
