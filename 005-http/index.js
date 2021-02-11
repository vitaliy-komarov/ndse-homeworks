#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import dotenv from 'dotenv'

import {getWeather} from "./utils/index.js";

dotenv.config()

yargs(hideBin(process.argv))
    .usage('$0 [City]')
    .check((argv) => {
        const city = argv._[0];
        const isValidCity = city.length > 0;
        if (!isValidCity) {
            throw new Error("City name is required")
        }  else {
            getWeather(city);
            return true;
        }
    })
    .argv;
