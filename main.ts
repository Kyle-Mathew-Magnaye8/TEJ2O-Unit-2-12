/*
* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Kyle Matthew
* Created on: Apr 2026
* This program uses the distance sensor and saves the current distance in cm to a variable.
*/

// variables
let distance = 0

// setup
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distance < 10) {
        strip.showColor(NeoPixelColors.Red)
    } else {
        strip.showColor(NeoPixelColors.Green)
    }
})
