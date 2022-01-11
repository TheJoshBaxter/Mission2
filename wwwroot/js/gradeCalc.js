function calcGrade() {
    //stores the form inputs to js variables
    fAssignment = $('#assignments').val()
    fGroupProjects = $('#groupProjects').val()
    fQuizzes = $('#quizzes').val()
    fExams = $('#exams').val()
    fIntex = $('#intex').val()

    fFinalGrade = (fAssignment * .55) + (fGroupProjects * .05) + (fQuizzes * .1) + (fExams * .2) + (fIntex * .1)
    fFinalGrade = fFinalGrade * 100 //make decimal into percentage
    fFinalGrade = Math.round(fFinalGrade)
    alert("Your final grade was " + fFinalGrade + "%") //output
}