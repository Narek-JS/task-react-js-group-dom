// ունենք <div id='timer'>0</div>; Ստեղծեք 3 հատ button՝ start, stop, reset. Start-ը պետք է մեծացնի div-ի մեջի
// թիվը 1-ով ամեն վարկյան, stop-ը կանգնեցնի, reset-ը զրոյացնի։ Մինչև stop չսեղմենք reset չենք կարող անել

const wrapperTimer = document.querySelector('.timer-wrapper');
const numbersTimer = +prompt('how mutch timer do you have'); 

const timers = [];

let template = ` 
    <div class="timer timer-/*timer-i*/">0</div>
    <button class="start" onclick="start(/*start-i*/)">start...</button>
    <button class="stop" onclick="stop(/*stop-i*/)">stop...</button>
    <button class="finish" onclick="finish(/*finish-i*/)">finish</button>
`;

class Section {
    constructor(i){
        this.index = i;
        this.count = 0;
        this.active = false;
    }

    start(){
        this.active = true
        const timer = document.querySelector(`.timer-${this.index}`);
        this.interval = setInterval(() => {
            this.count += 1;
            timer.innerHTML = this.count
        }, 1000);
    }
    stop(){
        clearInterval(this.interval)
        this.active = false;
    }
    finish(){
        if(!this.active){
            const timer = document.querySelector(`.timer-${this.index}`);
            this.count = 0;
            timer.innerHTML = this.count
        }
    }
};

for (let i = 0; i < numbersTimer ; i++) {
    let section = template
        .replace("/*timer-i*/", i)
        .replace("/*start-i*/", i)
        .replace("/*stop-i*/", i)
        .replace("/*finish-i*/", i)

    wrapperTimer.insertAdjacentHTML('beforeend', section);
    timers.push( new Section(i) );
};

const start = (i) => timers[i].start();
const stop = (i) => timers[i].stop();
const finish = (i) => timers[i].finish();
