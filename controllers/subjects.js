const { Teacher } = require('./../models');
const { Subject } = require('./../models');

exports.getSubjects = (req, res) => {
  Subject.findAll({
    include: [{
      model: Teacher,
      as : 'teachers'
    }]
  })
  .then(subjects => {
    res.render('subjects/index',{ 
      title : 'Subjects Data',
      records: subjects
    })
  })
}