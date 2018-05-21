function validasiSubject(listTeachers){
  if (listTeachers.subject==null) {
    return "unassign";
  }
  else {
    return `${listTeachers.subject.name}`
  }
}

module.exports = validasiSubject;
