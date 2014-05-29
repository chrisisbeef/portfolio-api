module.exports = function(server, options) {
    server.pack.require('hapi-mongodb', options, function(err) {
        if (err) {
            console.error(err);
            throw err;
        }
    });
};

