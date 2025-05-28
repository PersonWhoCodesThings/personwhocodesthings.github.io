const c = document.getElementById('c');
const ctx = c.getContext('2d');
const stats = {
    speed : 10
};
var plyr = {
    xpos : 0,
    ypos : 0,
    xmve : 0,
    ymve : 0
};
var snk = {
    xpos : 100,
    ypos : 100,
    xmve : 0,
    ymve : 0
};
function tick() {
    // player movement
    player.xpos += player.xmve;
    player.ypos += player.ymve;
    // snake movement
    if (Math.random() <= 0.1) { // 10% chance for snake to change direction
        snk.xmve = 10(Math.random()-0.5);
        snk.ymve = 10(Math.random()-0.5);
    };
    snk.xpos += snk.xmve;
    snk.ypos += snk.ymve;
    // Draw
    ctx.fillStyle = "white"
    ctx.fillRect(300, 300, 500, 500)
    ctx.fillStyle = "red";
    ctx.fillRect(plyr.xpos, plyr.ypos, 20, 20);
    ctx.fillStyle = "green";
    ctx.fillRect(snk.xpos, snk.ypos, 20, 20);
};
// Input
document.addEventListener('keydown', function(event) {
    if (event.key === 'W') {
        player.ymve = -stats.speed;
    } else if (event.key === 'A') {
        player.xmve = -stats.speed;
    } else if (event.key === 'S') {
        player.ymve = stats.speed;
    } else if (event.key === 'D') {
        player.xmve = stats.speed;
    };
});

setInterval(tick, 33)