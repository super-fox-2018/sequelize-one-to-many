const model = require('./models');
const teacher = model.Teacher
const subject = model.Subject

class Controller {
  static cariIdTeachers(id) {
    return teacher.findById(id)
  }

  static cariIdSubjects(id) {
    return subject.findById(id)
  }

  static updateTeachers(obj) {
    return teacher.findOne({
      where: {
        id: obj.id
      }
    }).then(teacher => {

      teacher.firstName = obj.firstName
      teacher.lastName = obj.lastName
      teacher.email = obj.email
      return teacher.save()

    })

  }



  static deleteTeachers(id) {
    return teacher.findById(id)
      .then(function (teacher) {
        return teacher.destroy()
      })

      .catch(err => {
        console.log(err.message);
      });
  }







  // -----------  Subject
  static showSubject() {
    return subject.findAll()
  }

  static addSubjects(obj) {
    let subjectku = subject.build({
      subject_name: obj.subject_name,

    })
    return subjectku.save();
  }



  static deleteSubjects(id) {
    return subject.findById(id)
      .then(function (subject) {
        return subject.destroy()
      })

      .catch(err => {
        console.log(err.message);
      });
  }

  static updateSubjects(obj) {
    return subject.findOne({
      where: {
        id: obj.id
      }
    }).then(subject => {
      subject.subject_name = obj.subject_name
      return subject.save()

    })

  }


}


module.exports = Controller
