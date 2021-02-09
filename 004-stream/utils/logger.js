import fs from "fs";

export default (output) => {
    const writeStream = fs.createWriteStream(output, {flags: 'a+'});
    return (current, estimated, result) => {
        const time = new Date().toISOString();
        writeStream.on('error', (err) => {
            console.log(err.stack);
        });

        writeStream.write(`${time},${current},${estimated},${result}\n`);
        writeStream.end();
    }
}
