function getUserDetails(id, cb) {
    db.User.findById(id, function(err, user) {
        if (err) { return cb(err); }

        db.Group.findById(user.group, function(err, group) {
            if (err) { return cb(err); }

            doGroupAuth(group, user, function(err, authorized) {
                if (err) { return cb(err); }

                cb(null, user);
            });
        });
    });
}