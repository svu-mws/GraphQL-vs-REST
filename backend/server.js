const app = require('./app');
const config = require("./config");
const port = config.port || 9000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});

export {
    port
}
