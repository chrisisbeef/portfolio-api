module.exports = {
    method: 'POST',
    path: '/api/contact',

    handler: function(request, reply) {
        try {
            var db = request.server.plugins['hapi-mongodb'].db;
            var contact = JSON.parse(request.payload);

            db.collection('posts').insert({name: contact.name, email: contact.email, message: contact.message}, {w:1}, function(err, result) {
                if (!err) {
                    reply({"status": "success"});
                } else {
                    reply({"status": "error", "message": err});
                }
            });
        } catch(error) {
            reply({"status": "error", "message": error});
        }
    }
}

