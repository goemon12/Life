let MAP_H = 10;
let MAP_W = 20;
let MAP;

function disp() {
    let color = [
        "#ff0000",
        "#00ff00"
    ]

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    for (let i = 0; i < MAP_H; i++) {
        for (let j = 0; j < MAP_W; j++) {
            context.fillStyle = color[MAP[i][j]];
            context.beginPath();
            context.arc(j * 10 + 5, i * 10 + 5, 2, 0, Math.PI * 2, true);
            context.fill();
        }
    }
}

window.onload = function() {
    MAP = new Array(MAP_H);
    for (let i = 0; i < MAP_H; i++) {
        MAP[i] = new Array(MAP_W);
        for (let j = 0; j < MAP_W; j++) {
            MAP[i][j] = 0;
        }
    }

    let y1 = Math.floor(Math.random() * MAP_H);
    let x1 = Math.floor(Math.random() * MAP_W);
    MAP[y1][x1] = 1;

    disp();
}
