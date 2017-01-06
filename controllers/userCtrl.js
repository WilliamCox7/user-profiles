var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Preston McNeil', 'Lindsey Mayer']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
  login: function(req, res, next) {
    var found = false;
    users.forEach(function(e) {
      if (e.name === req.body.name && e.password === req.body.password) {
        found = true;
        req.session.currentUser = e;
        res.send({ userFound: true });
      }
    });
    if (!found) { res.send({ userFound: false }); }
    found = false;
  },
  updateName: function(req, res, next) {
    users.forEach(function(e, i) {
      if (req.session.currentUser.name === e.name) {
        console.log(req.body.name);
        users[i].name = req.body.name;
      }
    });
    console.log(users);
    res.send({ userName: req.body.name });
  },
  updatePass: function(req, res, next) {
    users.forEach(function(e, i) {
      if (req.session.currentUser.password === e.password) {
        users[i].password = req.body.pass;
      }
    });
    res.send({ password: req.body.pass });
  }
}
