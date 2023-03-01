import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytac obrazki

loadSprite("kartka","kartka.png")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("kartka"),
    pos(0,0)
])
loadSprite("gwiazdka","gwiazdka.png")

const gwiazdka = add([
     sprite("gwiazdka"),
    pos(0,0)
])

onUpdate(()=>{
    if (gwiazdka.pos.x<160) gwiazdka.pos.x=gwiazdka.pos.x+1
    if (gwiazdka.pos.y<0.2) gwiazdka.pos.y=gwiazdka.pos.y+2
})
loadSound("muzyka","Jest_taki_dzień.mp3")

onKeyPress("space",()=>(
    play("muzyka")
))