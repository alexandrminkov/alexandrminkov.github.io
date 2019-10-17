document.body.onkeydown = function (e) {
    var keys = { //Клавиши
     65: 'left',
     68: 'right', //Стрелки влево и вправо
     83: 'down',
     83: 'down', //Вниз - пробелом или стрелкой вниз
     81: 'rotate', //Вращение- стрелкой вверх
     32: 'escape' //Пауза по клавише Esc
    };
    if (typeof(keys[e.keyCode])!='undefined') { //Если код клавиши допустимый,
     keyPress (keys[e.keyCode]); //Передать его обработчику
     render(); //и перерисовать стакан
    }
   };