const config = {
    mongoURL:
        process.env.MONGO_URL ||
        'mongodb://localhost/rest_graphql',
    port: 9000
};

module.exports = config;
