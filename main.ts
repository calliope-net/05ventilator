input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Prozent += -10
    motors.motorPower(Prozent)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Prozent += Prozent
    motors.motorPower(Prozent)
})
let Prozent = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
