import fs from 'fs';

export default (filename) => () => {
    return new Promise((resolve, reject) => {
        const readerStream = fs.createReadStream(filename);
        readerStream.setEncoding('UTF8');
        let data = '';
        readerStream.on('data', (chunk) => {
            data += chunk
        });
        readerStream.on('end', () => {
            resolve(data)
            readerStream.close()
        });
        readerStream.on('error', (e) =>{
            reject(e.message)
        })
    })

}
