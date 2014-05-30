module.exports = {
    method: 'POST',
    path: '/api/contact',

    handler: function(request, reply) {
        try {
            var db = request.server.plugins['hapi-mongodb'].db;
            var contact = request.payload;

            if (!contact.name || !contact.email || !contact.message) {
                throw new Error("Missing data.");
            }

            db.collection('posts').insert({name: contact.name, email: contact.email, message: contact.message}, {w:1}, function(err, result) {
                if (!err) {
                    reply({"status": "success"});
                } else {
                    reply({"status": "error", "message": err}).code(500);
                }
            });
        } catch(error) {
            reply({"status": "error", "message": error}).code(500);
        }
    }
}

