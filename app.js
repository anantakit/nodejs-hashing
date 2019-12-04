const crypto = require('crypto');
const yargs = require('yargs')
const { SHA3 } = require('sha3');

yargs.command({
    command: 'hash',
    describe: 'hash something',
    build: {
        name: {
            describe: 'name',
            demand: true,
            type: 'string'
        },
    },
    handler(argv) {
        const md5 = crypto.createHash('md5').update(argv.name, 'utf8').digest('hex')
        const sha1 = crypto.createHash('sha1').update(argv.name, 'utf8').digest('hex')
        const sha2_256 = crypto.createHash('sha256').update(argv.name, 'utf8').digest('hex')
        const sha2_512 = crypto.createHash('sha512').update(argv.name, 'utf8').digest('hex')
        const sha3_256 = (new SHA3(256)).update(argv.name).digest('hex')
        const sha3_512 = (new SHA3(512)).update(argv.name).digest('hex')
        const hmac = crypto.createHmac('sha256', crypto.createHash('md5').update(argv.name, 'utf8').digest()).update(argv.name).digest('hex');
        console.log('md5: ' + md5);
        console.log('sha1: ' + sha1);
        console.log('sha2-256: ' + sha2_256);
        console.log('sha2-512: ' + sha2_512);
        console.log('sha3-256: ' + sha3_256);
        console.log('sha3-512: ' + sha3_512);
        console.log('HMAC: ' + hmac)
    }
})
  
yargs.parse()