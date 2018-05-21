function subjectCondition (dataTeachers) {
	if(dataTeachers.Subject == null) {
		return "unassigned"
	}else{
		return `${dataTeachers.Subject.subject_name}`
	}
}

module.exports = subjectCondition