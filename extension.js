// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

function activate(context) {
    // create a terminal to run artisan commands in
    let terminal = vscode.window.createTerminal('simple-artisan');

    // register artisan commands

    // artisan test
    context.subscriptions.push(vscode.commands.registerCommand('extension.artisan', function () {
        // The code you place here will be executed every time your command is executed
        terminal.show();
        terminal.sendText('php artisan', false);
    }));

    // artisan test, doesn't focus
    context.subscriptions.push(vscode.commands.registerCommand('extension.artisan-migrate-fresh-seed', function () {
        // The code you place here will be executed every time your command is executed
        terminal.show();
        terminal.sendText('php artisan migrate:fresh --seed', false);
    }));
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;

function createTerminal() {
    
}