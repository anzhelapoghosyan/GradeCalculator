function calculateGrade() {
	var particip_percent = parseInt(document.getElementById("participationGrade").innerHTML)
	var quiz_percent = parseInt(document.getElementById("quizzesGrade").innerHTML)
	var pm1_percent = parseInt(document.getElementById("PM1Grade").innerHTML)
	var pm2_percent = parseInt(document.getElementById("PM2Grade").innerHTML)
	var fin_proj_percent = parseInt(document.getElementById("finalProjGrade").innerHTML)


	var particip_grade = parseFloat(document.getElementById("currParticipation").value)
	var quiz_grade = parseFloat(document.getElementById("currQuizzes").value)
	var pm1_grade = parseFloat(document.getElementById("currProjMilestone1").value)
	var pm2_grade = parseFloat(document.getElementById("currProjMilestone2").value)
	var fin_proj_grade = parseFloat(document.getElementById("currFinProj").value)

	var participation = particip_percent * particip_grade / 100
	var quiz = quiz_percent * quiz_grade / 100
	var pm1 = pm1_percent * pm1_grade / 100
	var pm2 = pm2_percent * pm2_grade / 100
	var fin_proj = fin_proj_percent * fin_proj_grade / 100

	var currGrade = participation + quiz + pm1 + pm2 + fin_proj
	console.log(currGrade)
}