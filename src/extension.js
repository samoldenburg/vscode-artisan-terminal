// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

function activate(context) {
    // create a terminal to run artisan commands in
    let terminal = vscode.window.createTerminal('simple-artisan');

    // -------------------------
    // register artisan commands
    // -------------------------
    function makeCommand(name, commandMethod) {
        context.subscriptions.push(vscode.commands.registerCommand(`artisan-terminal.${name}`, commandMethod));
    }

    // php artisan |
    makeCommand('artisan', () => {
        terminal.show();
        terminal.sendText('php artisan', false);
    });

    // php artisan migrate:fresh --seed
    makeCommand('artisan-migrate-fresh-seed', () => {
        terminal.show(true);
        terminal.sendText('php artisan migrate:fresh --seed');
    });

    // php artisan db:seed
    makeCommand('artisan-db-seed', () => {
        terminal.show(true);
        terminal.sendText('php artisan db:seed');
    });

    // php artisan make:controller
    makeCommand('artisan-make-controller', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter Controller Name' }).then((input) => {
            if (!input) {
                vscode.window.showErrorMessage('You must provide a controller name!');
                return;
            }
            
            terminal.show(true);
            terminal.sendText(`php artisan make:controller ${input}`);
        });
    });

    // php artisan make:test
    makeCommand('artisan-make-test', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter Test Name' }).then((input) => {
            if (!input) {
                vscode.window.showErrorMessage('You must provide a test name!');
                return;
            }
            
            terminal.show(true);
            terminal.sendText(`php artisan make:test ${input}`);
        });
    });

    // php artisan make:test --unit
    makeCommand('artisan-make-unit-test', () => {
        vscode.window.showInputBox({ placeHolder: 'Enter Test Name' }).then((input) => {
            if (!input) {
                vscode.window.showErrorMessage('You must provide a test name!');
                return;
            }
            
            terminal.show(true);
            terminal.sendText(`php artisan make:test ${input} --unit`);
        });
    });
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;