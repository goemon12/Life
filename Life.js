let MAP_H = 10;
let MAP_W = 20;

function dispM() {
    let td = document.getElementsByTagName("td");

    for (let i = 0; i < MAP_H; i++) {
        for (let j = 0; j < MAP_W; j++) {
            td[i * MAP_W + j].innerText = map1[i][j];
        }
    }
}


window.onload = function() {
    let table = document.getElementsByTagName("table");

    map1 = new Array(MAP_H);
    map2 = new Array(MAP_H);

    for (let i = 0; i < MAP_H; i++) {

        let tr = document.createElement("tr");
        table[0].appendChild(tr);

        map1[i] = new Array(MAP_W);
        map2[i] = new Array(MAP_W);

        for (let j = 0; j < MAP_W; j++) {

            let td = document.createElement("td");
            tr.appendChild(td);

            map1[i][j] = 0;
            map2[i][j] = 0;
        }
    }

    map1[5][10] = 1;

    dispM();
}
