var exec = require('cordova/exec');

exports.showAlertWithTitle = function (arg0, success, error) {
    exec(success, error, 'Myplugin', 'showAlertWithTitle', [arg0]);
};
