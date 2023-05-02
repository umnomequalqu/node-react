const User = require('../models/USUARIO')

module.exports = class AuthRegisterUserController{
  static async init(req,res){
    res.send({message: "Bem vindo a nossa api!"})
  }
}