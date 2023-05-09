const User = require('../models/USUARIO')

module.exports = class AuthRegisterUserController{
  static async init(req,res){
    res.send({message: "Bem vindo a nossa api!"})
  }
  static async registeruser(req,res){
    const {
      name,
      email,
      age,
      password,
      confirmPassword
    }= req.body

    let image = ""
    if(req.file){
      image = req.file.filename
    }
    if (!name){
      return res.status(422).json({message: "o nome é obrigatório"})
    }
    if (!email){
      return res.status(422).json({message: "o email é obrigatório"})
    }
    if (!age){
      return res.status(422).json({message: "a idade é obrigatória"})
    }
    if (!password){
      return res.status(422).json({message: "a senha é obrigatória"})
    }
    if(confirmPassword != password){
      return res.status(422).json({message: "a senha ou o email está errado"})
    }
  }
}