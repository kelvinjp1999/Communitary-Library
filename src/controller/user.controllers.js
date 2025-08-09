import userService from '../service/user.services.js'

async function creatUserController(req,res) {
    const newUser = req.body

    try {
        const user =await  userService.createUserService(newUser)
        res.status(201).send({user})
    }catch(err){
        return res.status(400).send(err.message)
    }
}

export default {
    creatUserController
}