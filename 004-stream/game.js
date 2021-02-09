import {logger} from "./utils/index.js";
import readline from "readline";

export default (output) => {
    const log = logger(output);
    const position = Math.round(Math.random() + 1);
    const coin = readline.createInterface(
        {
            input: process.stdin
        });


    console.log('Загадано число 1 или 2\n');

    coin.prompt();
    coin.on('line', (answer) => {
        const answerNum = parseInt(answer);

        if (answerNum === position){
            console.log('|>', 'Win');
            log(position, answer, 'Win')
        } else {
            console.log('|>', 'Lose');
            log(position, answer, 'Lose')
        }
        coin.close();
    });

    coin.on('close', function () {
        process.exit(1);
    });
}
