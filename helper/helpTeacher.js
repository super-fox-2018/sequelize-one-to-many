function subjectName(dataTeachers){
    
    if(dataTeachers.teacherSubject == null){
      return 'unsigned'
    }else{
    return dataTeachers.teacherSubject.subject_name
    }
}

module.exports =subjectName