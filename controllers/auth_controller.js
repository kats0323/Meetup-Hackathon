const login = (req, res) => {
    res.redirect('/dashboard');
};

const verify = (req, res) => {
    if(req.user){
      console.log(req.user);
    }else {
      console.log('not Auth');
    }
  };

  const logout = (req, res) => {
    req.logout();
    res.redirect('/');
  };

  const usersData = 

  module.exports = {
      login,
      verify,
      logout
  }