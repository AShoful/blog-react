import UserModel from '../models/User';
// import upash from 'upash'
// import argon2 from '@phc/argon2'

// upash.install('argon2', argon2);


class UserController {
  
  async create(req, res) {
    const {login, password, firstName} = req.body;

  try {  
  const user = await UserModel.findOne({ login })
    if (!user) {
      // const hash = await upash.hash(password)
      const newUser = await UserModel.create({
                  login,
                  password, 
                  firstName,
            })
      res.json({ ok: true });
    } else { res.json({
        ok: false,
        error: 'Имя занято!',
      });
    }
 } catch (err){
  console.log(err)
  res.json({
        ok: false,
        error: 'Ошибка, попробуйте позже!',
      });
  }
 }

   async read (req, res) {
    const {login, password} = req.body;

    try {
     const user = await UserModel.findOne({login})
      if (!user) {
        res.json({
            ok: false,
            error: 'Логин и пароль не верны',
          });
      } else {
        // const match = await upash.verify(user.password, password) 
        //   if (!match) {
          if(!user.password === password){
            res.json({
                ok: false,
                error: 'Логин и пароль не верны',
               });
          } else { 
            res.json({
                user,
                ok: true
              });
          }
      }
   } catch (err) {
        console.log(err);
        res.json({
            ok: false,
            error: 'Ошибка, попробуйте позже!'
        });
    }
 }     

  

  async index(req, res) {
    try{
      const users = await UserModel.find()
      res.json(users);
    } catch (err) {
      err => res.send(err)
    }
  }

  async delete(req, res) {
    try{
    const deleteUser = await UserModel.remove({
      _id: req.params.id,
    })
    if (deleteUser) {
        res.json({ status: 'deleted' });
      } else {
        res.json({ status: 'error' });
      }
    } catch (err){
      console.log(err)

    }
  }
}

export default UserController;
