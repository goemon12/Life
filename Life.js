let MAP_H = 10;
let MAP_W = 20;
var MAP;

function cal2(x, y) {
    if (0 <= x && x < MAP_W) {
        if (0 <= y && y < MAP_H) {
            if (MAP[y][x] > 0) {
                if (Math.floor(Math.random() * 10) == 0) {
                    return true;
                }
            }
        }
    }
    return false;
}

function calc() {
    let TMP;

    TMP = new Array(MAP_H);
    for (let i = 0; i < MAP_H; i++) {
        TMP[i] = new Array(MAP_W);
        for (let j = 0; j < MAP_W; j++) {
            if (MAP[i][j] == 0) {
                if (cal2(j - 1, i - 1)
                ||  cal2(j    , i - 1)
                ||  cal2(j + 1, i - 1)
                ||  cal2(j - 1, i    )
                ||  cal2(j + 1, i    )
                ||  cal2(j - 1, i + 1)
                ||  cal2(j    , i + 1)
                ||  cal2(j + 1, i + 1)) {
                    TMP[i][j] = 1;
                }
                else {
                    TMP[i][j] = 0;
                }
            }
            else if (MAP[i][j] > 0) {
                if (Math.floor(Math.random() * 10) == 0) {
                    TMP[i][j] = -MAP[i][j];
                }
                else {
                    TMP[i][j] = MAP[i][j] + 1;
                }
            }
            else {
                TMP[i][j] = MAP[i][j];
            }
        }
    }

    for (let i = 0; i < MAP_H; i++) {
        for (let j = 0; j < MAP_W; j++) {
            MAP[i][j] = TMP[i][j];
        }
    }
}

function disp() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    for (let i = 0; i < MAP_H; i++) {
        for (let j = 0; j < MAP_W; j++) {
            if (MAP[i][j] == 0) {
                context.fillStyle = "#000000"
            }
            else if (MAP[i][j] > 0) {
                context.fillStyle = "#ff0000";
            }
            else {
                context.fillStyle = "#888888";
            }
            context.beginPath();
            context.arc(j * 10 + 5, i * 10 + 5, 2, 0, Math.PI * 2, true);
            context.fill();
        }
    }
    for (let i = 0; i < MAP_H; i++) {
        for (let j = 0; j < MAP_W; j++) {
            document.getElementsByTagName("td")[i * MAP_W + j].innerText = MAP[i][j];
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

    let table = document.getElementById("table");
    for (let i = 0; i < MAP_H; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < MAP_W; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
    }

    disp();
}
