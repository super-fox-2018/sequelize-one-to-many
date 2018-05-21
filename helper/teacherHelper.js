function subjectTeachers(params){
  if (params.Subject === null) {
    return 'unassigned';
  }
  else {
    return params.Subject.subject_name;
  }


}


module.exports = {
  addUnassigned :subjectTeachers
}
