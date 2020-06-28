sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogie.destroy()
    dart.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 3 5 5 5 . . . . . . . .
        . . . 3 3 5 5 5 2 2 2 . . . . .
        . . . . 3 5 5 5 . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    bogie.destroy()
    info.changeLifeBy(-1)
})
let dart: Sprite = null
let bogie: Sprite = null
let space_plane: Sprite = null
space_plane = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . 2 2 2 2 2 9 9 . . . . .
    . . . 2 2 2 2 2 2 9 9 9 . . . .
    . . 2 2 2 2 2 2 2 9 9 9 . . . .
    . . . 2 2 2 2 2 2 9 9 9 . . . .
    . . . . 2 2 2 2 2 9 9 . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
space_plane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(space_plane, 200, 200)
game.onUpdateInterval(500, function () {
    bogie = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 3 . . . . . . .
        . . . . . . . . 3 . . . . . . .
        . . . . . . . . 3 . . . . . . .
        . . . . . 2 2 2 3 . 3 . . . . .
        . . . . . 2 2 2 3 3 3 3 . . . .
        . . . . . 2 2 2 3 . 3 . . . . .
        . . . . . . . . 3 . . . . . . .
        . . . . . . . . 3 . . . . . . .
        . . . . . . . . 3 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogie.setVelocity(-100, 0)
    bogie.setPosition(160, Math.randomRange(0, 120))
})
