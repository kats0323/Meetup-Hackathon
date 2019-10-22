const login = (req, res) => {
    res.redirect('/profiles');
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

  

  module.exports = {
      login,
      verify,
      logout
  }