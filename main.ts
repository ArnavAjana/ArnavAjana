scene.setBackgroundColor(1)
effects.starField.startScreenEffect()

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (projectile, enemy) {
    enemy.destroy(effects.disintegrate, 100)
    projectile.destroy()
    info.changeScoreBy(1)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    const dart = sprites.createProjectileFromSprite(img`
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
    dart.setFlag(SpriteFlag.AutoDestroy, true)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, enemy) {
    enemy.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 200)
})

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
space_plane.setFlag(SpriteFlag.AutoDestroy, true)
info.setLife(3)
info.setScore(0)
controller.moveSprite(space_plane, 200, 200)

game.onUpdateInterval(500, function () {
    const bogie = sprites.create(img`
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
    bogie.setFlag(SpriteFlag.AutoDestroy, true)
})
