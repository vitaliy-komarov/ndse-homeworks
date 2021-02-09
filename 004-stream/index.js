#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import game from './game.js'
import analyze from "./analyze.js";

yargs(hideBin(process.argv))
    .usage('$0 [output .csv file]')
    .check((argv) => {
        const fileName = argv._[0];
        const isValidFile = /\w+\.csv/.test(fileName);
        if (!isValidFile) {
            throw new Error("Only 1 csv file may be passed.")
        } else if (argv.analyze){
            analyze(fileName);
            return true;
        } else {
            game(fileName);
            return true;
        }
    })
    .argv;
