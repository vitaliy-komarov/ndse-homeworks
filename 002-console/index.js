#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {getCurrentDate, addToCurrentDate, subToCurrentDate} from './utils/index.js'


yargs(hideBin(process.argv))
  .command(
    'current',
    'get current <time>',
    function (yargs) {
      return yargs.option('y', {
        alias: 'year',
        describe: 'get current year'
      })
      .option('m', {
        alias: 'month',
        describe: 'get current month'
    })
      .option('d', {
          alias: 'day',
          describe: 'get current day'
      })
    },
    function (argv) {
        console.log(getCurrentDate(argv));
    }
  )
  .command(
    'add',
    'get some feature time',
    function (yargs) {
      return yargs.option('y', {
        alias: 'year',
        describe: 'add year'
      })
      .option('m', {
        alias: 'month',
        describe: 'add month'
    })
      .option('d', {
          alias: 'day',
          describe: 'add day'
      })
    },
    function (argv) {
        console.log(addToCurrentDate(argv));
    }
  )
  .command(
    'sub',
    'get some past time',
    function (yargs) {
      return yargs.option('y', {
        alias: 'year',
        describe: 'sub year'
      })
      .option('m', {
        alias: 'month',
        describe: 'sub month'
    })
      .option('d', {
          alias: 'day',
          describe: 'sub day'
      })
    },
    function (argv) {
        console.log(subToCurrentDate(argv));
    }
  )
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv
