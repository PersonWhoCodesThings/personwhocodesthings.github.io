var blcks = {
    lc : 0, // left count
    rc : 0, // right count
    lh : 0, // left blocks height
    rh : 0 // right blocks height
}

function start(level) {
    // reset block counts
    lc = 0
    rc = 0
    // set correct heights for each level
    if (level == 1) {
        blocks.lh = 1
        blocks.rh = 1
    }
    if (level == 2) {
        blocks.lh = 2
        blocks.rh = 1
    }
    if (level == 3) {
        blocks.lh = 3
        blocks.rh = 2
    }
    if (level == 4) {
        blocks.lh = 2
        blocks.rh = 4
    }
    if (level == 5) {
        blocks.lh = 4
        blocks.rh = 3
    }
    if (level == 6) {
        blocks.lh = 4
        blocks.rh = 1
    }
    // create button objects and canvas
    const lb = document.createElement() // left button
    lb.className = "input"
    lb.type = "button"
    lb.width = "40px"
    lb.height = "30px"
    lb.class = "left-bttn"
    const rb = document.createElement() // right button
    rb.className = "input"
    rb.type = "button"
    rb.width = "40px"
    rb.height = "30px"
    rb.class = "right-bttn"
    const c = document.createElement("c")
    c.type = "canvas"
    c.width = "400px"
    c.height = "300px"
    const ctx = c.getContext("2d")
}