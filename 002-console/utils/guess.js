import readline from 'readline';

export default () => {
    const randomNumber = Math.round(Math.random() * 100);

    const guesser = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        });

    console.log('Загадано число в диапазоне от 0 до 100\n');

    guesser.prompt();
    guesser.on('line', (answer) => {
        const answerNum = parseInt(answer);

        if (answerNum > randomNumber) {
            console.log('Меньше');
        } else if (answerNum < randomNumber) {
            console.log('Больше');
        } else if (answerNum === randomNumber) {
            console.log(`Отгадано число ${randomNumber}`);
            process.exit(0);
        } else {
            console.log('Допускаются только числа от 1 до 100');
        }


        guesser.prompt();
    });

    guesser.on('close', function () {
        process.exit(1);
    });
}
