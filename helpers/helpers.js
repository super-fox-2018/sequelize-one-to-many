function subjectName (dataTeacher) {
	// body... 
	if (dataTeacher.Subject==null) {
		return "unassigned"
	}
	else{
		return dataTeacher.Subject.subjectName
	}
}

module.exports = subjectName