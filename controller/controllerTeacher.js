const model = require('../models')
let teacher = model.teacher


class Controller{
    constructor(){

    }
    static list(){
        return teacher.findAll();
    }
    static add(obj){
        let data = teacher.build({
            first_name : obj.first_name,
            last_name : obj.last_name,
            email : obj.email,
            subject : obj.subject
        })
        return data.save()
    }

    static deleteTeachers(id){
        return teacher.findById(id)
            .then(function(teacher){
                return teacher.destroy()
            })
            .catch(err=>{
                console.log(err.message)
            })

    }

    static update(id,first_name,last_name,email){
        return teacher.findById(id)
        .then(function(teacher){
            return teacher.update({
                first_name : first_name,
                last_name : last_name,
                email : email
            })
        })
        .catch(err =>{
            console.log(err.message)
        })
    }




}

module.exports = Controller     