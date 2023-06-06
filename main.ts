let Ball: game.LedSprite = null
let BallFlugPause = 700
let PunkteImLevel = 10
game.setScore(10)
game.setLife(10)
let Spieler = game.createSprite(3, 4)
basic.forever(function () {
    Ball = game.createSprite(0, randint(1, 4))
    for (let index = 0; index < 4; index++) {
        basic.pause(BallFlugPause)
        Ball.change(LedSpriteProperty.X, 1)
    }
    if (Spieler.isTouching(Ball)) {
        game.removeLife(1)
    } else {
        game.addScore(1)
    }
    Ball.delete()
    if (game.score() == 0 && game.score() % PunkteImLevel == 0) {
        BallFlugPause = BallFlugPause - 50
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Spieler.change(LedSpriteProperty.Y, -1)
    } else {
        if (Spieler.get(LedSpriteProperty.Y) < 4) {
            Spieler.change(LedSpriteProperty.Y, 1)
        }
    }
    basic.pause(100)
})
