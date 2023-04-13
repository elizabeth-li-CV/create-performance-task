/**
 * Will change the "splash discriminant" blocks later; right now they help show if a problem works or not, though they would be out of context in the finished program.
 */
// Verifies if a problem is valid to be used.
function discriminantVerification (a: number, b: number, c: number) {
    discriminant = b * b - 4 * (a * c)
    // In order to see if the discriminant is a square, the program compares the discriminant to a square of each value in the array using "for element value".
    for (let value of numberList) {
        if (discriminant == value * value) {
            game.splash(discriminant)
            // Returning true on this to indicate that this is a valid problem for the simulator.
            return true
        }
    }
    // If the "for element value" doesn't work, the discriminant cannot be a square and must be one of two options.
    // 
    // 1) a negative number (can NEVER be a square) and WILL ALWAYS result in nonreal roots.
    // 2) a positive number that is not a square will always cause the roots to have square roots.
    if (discriminant < 0) {
        game.splash(":( negative")
        // Returning false indicates this isn't a valid problem (though this could potentially be added later, like in Level 3 right now it's unnecessarily complicated).
        return false
    } else {
        game.splash(":(", discriminant)
        // Returning false indicates this isn't a valid problem (will likely not be added later because it is too hard to input square root symbols on MakeCode.
        return false
    }
}
// Making this for now so it's clearer.
function startConditions () {
    scene.setBackgroundColor(10)
    // List of numbers; need to figure out how to tackle problems with length.
    numberList = [
    0,
    1,
    2,
    3,
    4
    ]
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
let discriminant = 0
let difficultyLevel = 0
startConditions()
let wantNewProblem = game.ask("Want a New Problem?")
if (wantNewProblem) {
    difficultyLevel = game.askForNumber("What Difficulty Level?", 1)
    if (difficultyLevel == 1) {
        wantNewProblem = true
        while (wantNewProblem) {
            discriminantVerification(1, 1, 1)
            discriminantVerification(1, 2, 1)
            discriminantVerification(1, 4, 3)
            discriminantVerification(1, 4, 2)
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
// WILL ADD IN LATER -- JUST STICKING IT HERE FOR NOW SINCE I DON'T HAVE TIME TO PROGRAM THIS PART.
wantNewProblem = game.ask("\"A\" = Yes / Same Level", "\"B\" = No / Different Level")
