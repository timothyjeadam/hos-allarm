pins.setAudioPin(AnalogPin.P1)
basic.forever(function () {
    if (input.lightLevel() < 1) {
        music.playTone(1500, music.beat(BeatFraction.Half))
        music.playTone(2000, music.beat(BeatFraction.Half))
    }
})
