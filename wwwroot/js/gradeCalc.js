function calcGrade() {
    fAssignment = $('#assignments').val()
    fGroupProjects = $('#groupProjects').val()
    fQuizzes = $('#quizzes').val()
    fExams = $('#exams').val()
    fIntex = $('#intex').val()

    fFinalGrade = (fAssignment * .55) + (fGroupProjects * .05) + (fQuizzes * .1) + (fExams * .2) + (fIntex * .1)
    fFinalGrade = fFinalGrade * 100
    fFinalGrade = Math.round(fFinalGrade)
    alert("Your final grade was " + fFinalGrade + "%")
}