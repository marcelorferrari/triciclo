def on_logo_pressed():
    global estadoMotor
    if estadoMotor == 0:
        estadoMotor = 1
    else:
        estadoMotor = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    global Sentido
    robotbit.motor_run(robotbit.Motors.M1A, 255)
    Sentido = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Sentido
    robotbit.motor_run(robotbit.Motors.M1A, -255)
    Sentido = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

Sentido = 0
estadoMotor = 0
estadoMotor = 0
Sentido = 0

def on_forever():
    if estadoMotor == 0:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
    else:
        basic.show_leds("""
            . . # . .
                        . # . # .
                        # . . . #
                        . # . # .
                        . . # . .
        """)
    if Sentido == 0:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . # # . .
                        # . . # .
                        # # # # #
                        # # # # #
                        . # . # .
        """)
        basic.show_leds("""
            # . . . #
                        # # . # #
                        # # # # #
                        . # # # .
                        . . # . .
        """)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . # # . .
                        # . . # .
                        # # # # #
                        # # # # #
                        . # . # .
        """)
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # # # # #
                        # # . # #
                        # . . . #
        """)
basic.forever(on_forever)
