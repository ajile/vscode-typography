import * as vscode from "vscode";
import * as typographer from "../lib/typographer";

export const typographSelection = (typographer: typographer.Typographer) => async () => {
  const editor = vscode.window.activeTextEditor;

  // This commands works with active editor only. It cannot get selections that
  // needed to be typographed without editor.
  if (!editor) {
    return;
  }

  const selections = editor.selections.filter(selection => !selection.isEmpty);

  selections.map(selection => typographer.typograph(editor.document.getText(selection)));

  // @todo: The line below is needed for debug purpose only — it must be deleted
  // await typographer.typograph("It's just a test!");
};
