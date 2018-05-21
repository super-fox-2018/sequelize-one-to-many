function subjectNull(datateachers) {


  if (datateachers.Subject === null) {

    return "-- UnAssign --"
  } else {
    return `${datateachers.Subject.subject_name}`
  }
}

module.exports = subjectNull
