var ftpClient = require('./lib/client.js'),
    config = {
        host: '',
        port: 21,
        user: '',
        password: ''
    },
    options = {
        logging: 'basic'
    },
    client = new ftpClient(config, options);

client.connect(function () {

    // client.upload(['test/**'], '/public_html/test', {
    //     baseDir: 'test',
    //     overwrite: 'older'
    // }, function (result) {
    //     console.log(result);
    // });

    client.download('./', 'D:/', {
        overwrite: 'older'
    }, function (result) {
        console.log(result);
    });

});