import UserModel from '../models/User';
import bcrypt from 'bcrypt-nodejs'

class UserController {
  
  create(req, res) {
    const data = req.body;
    const {login, password, firstName, lastName} = data;

    UserModel.findOne({ login })
      .then(user => {
        if (!user) {
            bcrypt.hash(password, null, null, (err, hash) =>{
              UserModel.create({
                            login,
                            password: hash,
                            firstName,
                            lastName
                        })
                        .then(user => {
                            console.log(user);
                            res.json({
                                ok: true
                            });
                        })
                        .catch(err => {
                            console.log(err);
                            res.json({
                                ok: false,
                                error: 'Ошибка, попробуйте позже!'
                            });
                        });
                });
            } else {
              res.json({
                    ok: false,
                    error: 'Имя занято!',
                });
            }
        })
      }

   read (req, res) {
    const data = req.body;
    const {login, password} = data;

    UserModel.findOne({login})
      .then(user => {
        if (!user) {
          res.json({
              ok: false,
              error: 'Логин и пароль не верны',
          });
        } else {
          bcrypt.compare(password, user.password, function(err, result) {
            if (!result) {
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
      })
   }
 })
      .catch(err => {
        console.log(err);
        res.json({
            ok: false,
            error: 'Ошибка, попробуйте позже!'
        });
    });
 }     

  

  index(req, res) {
    UserModel.find()
    .then((err, users) => {
      if (err) {
        res.send(err);
      }
      res.json(users);
    })
    .catch(err => res.send(err))
  }
}

export default UserController;
