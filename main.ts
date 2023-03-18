input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (estadoMotor == "desligado") {
        estadoMotor = "ligado"
        velocidade = 255
    } else {
        estadoMotor = "desligado"
        velocidade = 0
    }
})
function carregarVariaveis () {
    estadoMotor = "desligado"
    sentido = "parado"
    velocidade = 0
    tempo = 0
}
input.onButtonPressed(Button.A, function () {
    sentido = "frente"
    velocidade = 255
})
input.onButtonPressed(Button.B, function () {
    sentido = "tras"
    velocidade = -255
})
function andar (v: number, t: number, s: string) {
    sentido = s
    if (estadoMotor == "ligado") {
        robotbit.MotorRun(robotbit.Motors.M1A, v)
    }
}
function mostrarLeds () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (estadoMotor == "desligado") {
        velocidade = 0
        robotbit.MotorRun(robotbit.Motors.M1A, velocidade)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (estadoMotor == "ligado") {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (sentido == "parado") {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (sentido == "frente") {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # . # #
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # . # #
            . # . # .
            . # # # .
            `)
    }
    if (sentido == "tras") {
        basic.showLeds(`
            . # # # .
            . # . # .
            # # . # #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            # # . # #
            . # . # .
            . . # . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        . . # . .
        # . # . #
        # # # # #
        # . # . #
        `)
}
let tempo = 0
let sentido = ""
let velocidade = 0
let estadoMotor = ""
carregarVariaveis()
basic.forever(function () {
    mostrarLeds()
})
