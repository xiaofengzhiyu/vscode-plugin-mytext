"use strict";
import * as vscode from 'vscode';

const documentSymbolProvider_1 = require("./docSymbolProvider.js");
const foldingRangeProvider_1 = require("./foldingRangeProvider.js");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider([
        { language: 'ini', pattern: '**/*.{ini,cfg,reg}' },
        { language: 'ini', scheme: 'untitled' },
    ], new documentSymbolProvider_1.IniDocumentSymbolProvider()));

    context.subscriptions.push(vscode.languages.registerFoldingRangeProvider([
        { language: 'ini', pattern: '**/*.{ini,cfg,reg}' },
        { language: 'ini', scheme: 'untitled' },
    ], new foldingRangeProvider_1.IniFoldingRangeProvider()));
}


export function deactivate() {}

//# sourceMappingURL=extension.js.map