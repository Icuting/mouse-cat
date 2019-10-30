// let remove = document.querySelector('.start');
// remove.onclick = start;

// function start(){
//     let count = 0;
//     window.scrollTo(0,0); // прокрутка страницы вверх
//     remove.parentNode.removeChild(remove); // удаляем кнопку со страницы
//     play(1,100);
//     function play(min, max){
//         let random = Math.floor(Math.random() * (max - min)) + min; // рандомим число
//         console.log(random)
//         let box = document.querySelectorAll('.box'); // выделяем и перебираем ячейки
//         for (let i = 0; i < box.length; i++) {
//             box[i].addEventListener('click', score); // вешаем событие на ячейки 
//            if(random == i){
//                let img = document.createElement('img');// create of img
//                img.setAttribute("src", "https://icon-icons.com/icons2/365/PNG/64/mouse-icon_36973.png");
//                box[i].appendChild(img);
//            }
//             function score(e){ // callback от события ячейки( набираем очки )
//                 if(e.target.tagName == 'IMG'){
//                     this.style.background = '#008000';
//                     let attribute = this.getAttribute(score);
//                     this.innerHTML = 'score: +1'
//                     count++;
//                     setTimeout(()=>{
//                         this.innerHTML = '';
//                         this.style.background = '#fff';
//                     }, 1000);
//                     play(1,100);
//                 }else{
//                     this.style.background = '#8B0000';
//                     this.innerHTML = 'score: -1'
//                     count--;
//                     setTimeout(()=>{
//                         this.innerHTML = '';
//                         this.style.background = '#fff';
//                     }, 1000);
//                     play(1,100);
//                 }
//             }
//         }
//     }
    
// }



let outTime = document.querySelector('.out-time');
let outScore = document.querySelector('.out-score');
let reset = document.querySelector('.start');
reset.onclick = start;
let img = document.createElement('img');// create of img
img.setAttribute("src", "img/mouse-icon_36973.png");

function start(){
    count = 0;
    minute = 60;
    out.style.display = 'none';
    time = setInterval(minuteDown, 1000);
    table.style.display = 'grid';
    window.scrollTo(0,0); // прокрутка страницы вверх
    reset.style.display = 'none'; // удаляем кнопку со страницы
    play(0,69);
    function play(min, max){
        let random = Math.floor(Math.random() * (max - min)) + min; // рандомим число
        let box = document.querySelectorAll('.box'); // выделяем и перебираем ячейки
        for (let i = 0; i < box.length; i++) {
            box[i].addEventListener('click', score); // вешаем событие на ячейки
           if(random === i){
               console.log(random)
               box[i].appendChild(img);// добавляем в рандомную ячейку картинку
           }
            
        }
        
    }
    function score(e){ // callback от события ячейки( набираем очки )
        if(e.target.tagName == 'IMG'){
            this.style.background = '#008000'; 
            this.innerHTML = 'score: +1'
            count++;
            outScore.innerHTML = 'Счет :' + count;//выводим счет на страницу
            setTimeout(()=>{
                this.innerHTML = '';
                this.style.background = '#fff';//убираем надпись и картинку через 1 сек
            }, 600);
            play(0,69);// рекурсим функцию
        }else{
            this.style.background = '#8B0000';
            this.innerHTML = 'score: -1'// нажимаем не на картинку очки -1
            count--;
            outScore.innerHTML = 'Счет:' + count;//выводим счет на страницу
            setTimeout(()=>{
                this.innerHTML = '';
                this.style.background = '#fff';// убираем надпись 
            }, 1000);
        }
    }
}
let table = document.querySelector('.table')
let out = document.querySelector('.out')
function minuteDown(){
    if(minute == 0 ){
        clearInterval(time);// время 1 минута
       table.style.display = 'none';
       out.style.display = 'block';
       reset.style.display = 'block';
       out.innerHTML = 'Время вышло' + '<br/>' + 'Ваш счет:' + count;

    }else{
        minute--;
        outTime.innerHTML = 'Время:' + minute;
    }
}

let mouse = document.querySelector('.mouse');
let run = 0;
   let timeMouse = setInterval(runMouse, 60);
function runMouse(){
    mouse.style.marginLeft = run +'px';
    run += 10;
    if(run > 4000){
        run = 0;
    }

}
mouse.onclick = die;
function die(){
    clearInterval(timeMouse);
    mouse.style.transition = '1s';
    mouse.style.transform = 'rotateX(180deg)';
    setTimeout(clearMouse, 2000);
    function clearMouse(){
        mouse.style.display = 'none';
    }
}