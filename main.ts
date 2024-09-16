input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Prozent += -10
    basic.showNumber(Prozent)
    motors.motorPower(Prozent)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Prozent += 10
    basic.showNumber(Prozent)
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
Prozent = 0
