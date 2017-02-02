window.addEventListener('load', init, false);

function init() {
    let canvas = document.createElement('canvas');
    //Tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    let context = canvas.getContext('2d');

    //Dibujar sobre el canvas
    //base
    context.beginPath();
    context.strokeStyle = '#407237';
    context.fillStyle = '#E7E7E7';
    context.lineWidth = 4;
    context.moveTo(5, 5);
    context.lineTo(400, 5);
    context.lineTo(400, 500);
    context.lineTo(5, 500);
    context.lineTo(5, 5);
    context.fill();
    context.stroke();
    context.closePath();

    //Mina
    context.beginPath();
    context.strokeStyle = '#407237';
    context.fillStyle = '#10B092';
    context.moveTo(20, 20);
    context.lineTo(135, 20);
    context.lineTo(135, 100);
    context.lineTo(20, 100);
    context.lineTo(20, 20);
    context.fill();
    context.stroke();
    context.closePath();

    //cara
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = '#FEC606';
    context.arc(205, 60, 35, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.closePath();

    //ojos
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(193, 48, 5, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = 'black';
    context.arc(218, 48, 5, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    //boca
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineCap = 'square';
    context.moveTo(185, 65);
    context.quadraticCurveTo(205, 95, 227, 65);
    context.stroke();
    context.closePath();

    //Tiempo
    context.beginPath();
    context.strokeStyle = '#407237';
    context.fillStyle = '#10B092';
    context.moveTo(380, 20); //Primera linea horizontal (x,y)
    context.lineTo(265, 20); //Primera linea horizontal (largo de la linea,y)
    context.lineTo(265, 100); //Primera linea vertical (x,largo de la linea)
    context.lineTo(380, 100); //segunda linea horizontal (x,y)
    context.lineTo(380, 20); //segunda linea vertical (x,y)
    context.fill();
    context.stroke();
    context.closePath();

    //lineas
    //horizontal
    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 125);
    context.lineTo(375, 125);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 160);
    context.lineTo(375, 160);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 195);
    context.lineTo(375, 195);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 230);
    context.lineTo(375, 230);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 265);
    context.lineTo(375, 265);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 300);
    context.lineTo(375, 300);
    context.stroke();
    context.closePath();

    context.beginPath()
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 336);
    context.lineTo(375, 336);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 370);
    context.lineTo(375, 370);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 405);
    context.lineTo(375, 405);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 440);
    context.lineTo(375, 440);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 475);
    context.lineTo(375, 475);
    context.stroke();
    context.closePath();

    //vertical
    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(25, 125);
    context.lineTo(25, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(60, 125);
    context.lineTo(60, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(95, 125);
    context.lineTo(95, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(130, 125);
    context.lineTo(130, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(165, 125);
    context.lineTo(165, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(200, 125);
    context.lineTo(200, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(235, 125);
    context.lineTo(235, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(270, 125);
    context.lineTo(270, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(305, 125);
    context.lineTo(305, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(340, 125);
    context.lineTo(340, 475);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = '#9EA7B3';
    context.moveTo(375, 125);
    context.lineTo(375, 475);
    context.stroke();
    context.closePath();

    //arregro de las imagenes
    let arrMap = ['img/map1.jpg', 'img/map4.jpg', 'img/map5.jpg', ];
    let img = new Image(4, 4)
        //para que sea random
    let num = Math.floor(Math.random() * 3);
    //obtener el imagen
    img.src = arrMap[num];

    img.onload = function() {
        context.drawImage(img, 7, 7);
        let imgData = context.getImageData(7, 7, 4, 4);

        for (let i = 0; i < imgData.data.length; i += 4) {
            //Imprimir en consola el valor de cada pixel.
            console.log('PIXEL: ' + i / 4 + ' r:' + imgData.data[i] + ' g:' + imgData.data[i + 1] + ' b:' + imgData.data[i + 2] + ' a:' + imgData.data[i + 3]);
        }
        //crear minas dependiendo el mapa
        if (num == 0) {
            context.beginPath();
            context.fillStyle = 'black';
            context.arc(183, 142, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(288, 142, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(113, 178, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(150, 178, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(43, 248, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(218, 248, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(358, 248, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(183, 282, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(288, 282, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(113, 320, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(218, 351, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(358, 351, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(150, 385, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(288, 385, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
        } else if (num == 1) {
            context.beginPath();
            context.fillStyle = 'black';
            context.arc(183, 178, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(43, 248, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(358, 248, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(183, 282, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(218, 352, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(358, 352, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
        } else if (num == 2) {
            context.beginPath();
            context.fillStyle = 'black';
            context.arc(183, 142, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(253, 142, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = 'black';
            context.arc(183, 458, 7, 0, Math.PI * 2, true);
            context.fill();
            context.closePath();
        }
    }
}

// hubicar la posicion de cada cuadro
window.onclick = function(e) {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, ",", y); //para saber en cual cuadro esta dando click

    let arr0 = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"];
    let arr1 = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"];
    let arr2 = ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"];
    let arr3 = ["D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"];
    let arr4 = ["E0", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9"];
    let arr5 = ["F0", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9"];
    let arr6 = ["G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9"];
    let arr7 = ["H0", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9"];
    let arr8 = ["I0", "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9"];
    let arr9 = ["J0", "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9"];

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let aO = arr0[0];
        console.log(aO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a1 = arr0[1];
        console.log(a1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a2 = arr0[2];
        console.log(a2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a3 = arr0[3];
        console.log(a3);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a4 = arr0[4];
        console.log(a4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a5 = arr0[5];
        console.log(a5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a6 = arr0[6];
        console.log(a6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a7 = arr0[7];
        console.log(a7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a8 = arr0[8];
        console.log(a8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 206 && Math.floor(y) < 235) {
        let a9 = arr0[9];
        console.log(a9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let bO = arr1[0];
        console.log(bO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b1 = arr1[1];
        console.log(b1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b2 = arr1[2];
        console.log(b2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b3 = arr1[3];
        console.log(b3);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b4 = arr1[4];
        console.log(b4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b5 = arr1[5];
        console.log(b5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b6 = arr1[6];
        console.log(b6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b7 = arr1[7];
        console.log(b7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b8 = arr1[8];
        console.log(b8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 241 && Math.floor(y) < 271) {
        let b9 = arr1[9];
        console.log(b9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let cO = arr2[0];
        console.log(cO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c1 = arr2[1];
        console.log(c1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c2 = arr2[2];
        console.log(c2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c3 = arr2[3];
        console.log(c3);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c4 = arr2[4];
        console.log(c4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c5 = arr2[5];
        console.log(c5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c6 = arr2[6];
        console.log(c6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c7 = arr2[7];
        console.log(c7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c8 = arr2[8];
        console.log(c8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 276 && Math.floor(y) < 304) {
        let c9 = arr2[9];
        console.log(c9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let dO = arr3[0];
        console.log(dO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d1 = arr3[1];
        console.log(d1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d2 = arr3[2];
        console.log(d2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d3 = arr3[3];
        console.log(d3);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d4 = arr3[4];
        console.log(d4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d5 = arr3[5];
        console.log(d5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d6 = arr3[6];
        console.log(d6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d7 = arr3[7];
        console.log(d7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d8 = arr3[8];
        console.log(d8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 311 && Math.floor(y) < 341) {
        let d9 = arr3[9];
        console.log(d9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let eO = arr4[0];
        console.log(eO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e1 = arr4[1];
        console.log(e1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e2 = arr4[2];
        console.log(e2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e3 = arr4[3];
        console.log(e3);
    } else {
        //console.log("Error");
    }
    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e4 = arr4[4];
        console.log(e4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e5 = arr4[5];
        console.log(e5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e6 = arr4[6];
        console.log(e6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e7 = arr4[7];
        console.log(e7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e8 = arr4[8];
        console.log(e8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 346 && Math.floor(y) < 375) {
        let e9 = arr4[9];
        console.log(e9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let fO = arr5[0];
        console.log(fO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f1 = arr5[1];
        console.log(f1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f2 = arr5[2];
        console.log(f2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f3 = arr5[3];
        console.log(f3);
    } else {
        //console.log("Error");
    }
    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f4 = arr5[4];
        console.log(f4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f5 = arr5[5];
        console.log(f5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f6 = arr5[6];
        console.log(f6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f7 = arr5[7];
        console.log(f7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f8 = arr5[8];
        console.log(f8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 382 && Math.floor(y) < 411) {
        let f9 = arr5[9];
        console.log(f9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let gO = arr6[0];
        console.log(gO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g1 = arr6[1];
        console.log(g1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g2 = arr6[2];
        console.log(g2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g3 = arr6[3];
        console.log(g3);
    } else {
        //console.log("Error");
    }
    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g4 = arr6[4];
        console.log(g4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g5 = arr6[5];
        console.log(g5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g6 = arr6[6];
        console.log(g6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g7 = arr6[7];
        console.log(g7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g8 = arr6[8];
        console.log(g8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 417 && Math.floor(y) < 445) {
        let g9 = arr6[9];
        console.log(g9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let hO = arr7[0];
        console.log(hO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h1 = arr7[1];
        console.log(h1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h2 = arr7[2];
        console.log(h2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h3 = arr7[3];
        console.log(h3);
    } else {
        //console.log("Error");
    }
    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h4 = arr7[4];
        console.log(h4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h5 = arr7[5];
        console.log(h5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h6 = arr7[6];
        console.log(h6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h7 = arr7[7];
        console.log(h7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h8 = arr7[8];
        console.log(h8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 451 && Math.floor(y) < 480) {
        let h9 = arr7[9];
        console.log(h9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let iO = arr8[0];
        console.log(iO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i1 = arr8[1];
        console.log(i1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i2 = arr8[2];
        console.log(i2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i3 = arr8[3];
        console.log(i3);
    } else {
        //console.log("Error");
    }
    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i4 = arr8[4];
        console.log(i4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i5 = arr8[5];
        console.log(i5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i6 = arr8[6];
        console.log(i6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i7 = arr8[7];
        console.log(i7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i8 = arr8[8];
        console.log(i8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 486 && Math.floor(y) < 514) {
        let i9 = arr8[9];
        console.log(i9);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 28 && Math.floor(x) < 58 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let jO = arr9[0];
        console.log(jO);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 63 && Math.floor(x) < 92 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j1 = arr9[1];
        console.log(j1);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 98 && Math.floor(x) < 128 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j2 = arr9[2];
        console.log(j2);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 133 && Math.floor(x) < 163 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j3 = arr9[3];
        console.log(j3);
    } else {
        //console.log("Error");
    }
    if (Math.floor(x) > 169 && Math.floor(x) < 197 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j4 = arr9[4];
        console.log(j4);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 204 && Math.floor(x) < 231 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j5 = arr9[5];
        console.log(j5);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 238 && Math.floor(x) < 267 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j6 = arr9[6];
        console.log(j6);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 274 && Math.floor(x) < 302 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j7 = arr9[7];
        console.log(j7);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 308 && Math.floor(x) < 338 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j8 = arr9[8];
        console.log(j8);
    } else {
        //console.log("Error");
    }

    if (Math.floor(x) > 343 && Math.floor(x) < 372 && Math.floor(y) > 521 && Math.floor(y) < 550) {
        let j9 = arr9[9];
        console.log(j9);
    } else {
        //console.log("Error");
    }
}
