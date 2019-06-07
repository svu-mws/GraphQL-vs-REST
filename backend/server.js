const app = require('./app');
const port = process.env.PORT || 9000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});

export {
    port
}