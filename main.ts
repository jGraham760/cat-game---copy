let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e b f b . 
    f d d f d d f d d f f d f . 
    f b d d b b d d 2 b f d f . 
    . f 2 2 2 2 2 2 d b d b f . 
    . f d d d d d d d f f f . . 
    . f d b d f f f d f . . . . 
    . . f f f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
    music.playMelody("D E F D E F D E ", 120)
    music.playMelody("F G F E D E F G ", 120)
})
