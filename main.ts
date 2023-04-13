function randomProblemSolver (a: number, b: number, c: number) {
    discriminant = b * b - 4 * (a * c)
    if (discriminant < 0) {
        game.splash(":( negative")
    } else if (discriminant == n * n) {
        game.splash(discriminant)
    } else {
        game.splash(":(", discriminant)
    }
}
// Making this for now so it's clearer.
function startConditions () {
    scene.setBackgroundColor(10)
    numberList = [
    0,
    1,
    2,
    3,
    4
    ]
    n = numberList[randint(0, numberList.length - 1)]
    game.showLongText("This is a Quadratic Equation Solver. Pick a Difficulty Level, Solve, Then Input Your Answer and See if it Matches!", DialogLayout.Center)
    // If someone wants to see how to format an answer, they can click "A". If they already know, they can skip this step.
    answerFormat = game.ask("How to Input An Answer?")
    if (answerFormat == true) {
        // Could have them input it with the most negative first?
        game.showLongText("After Solving for the Roots of the Equation, Input 1 at a Time. If the Answer has No Real Roots, Input \"und\".", DialogLayout.Center)
    }
}
let answerFormat = false
let numberList: number[] = []
let n = 0
let discriminant = 0
let difficultyLevel = 0
startConditions()
let wantNewProblem = game.ask("Want a New Problem?")
if (wantNewProblem) {
    difficultyLevel = game.askForNumber("What Difficulty Level?", 1)
    if (difficultyLevel == 1) {
        wantNewProblem = true
        while (wantNewProblem) {
            randomProblemSolver(1, 1, 1)
            randomProblemSolver(1, 2, 1)
            randomProblemSolver(1, 4, 3)
            randomProblemSolver(1, 4, 2)
        }
    } else if (difficultyLevel == 2) {
        wantNewProblem = true
    } else if (difficultyLevel == 3) {
        wantNewProblem = true
    } else {
        wantNewProblem = false
    }
} else if (!(wantNewProblem)) {
    game.gameOver(true)
}
