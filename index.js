document.addEventListener('DOMContentLoaded', function () {
    let daysCount = document.querySelector('.days_count');
    let hoursCount = document.querySelector('.hours_count');
    let minutesCount = document.querySelector('.minutes_count');
    let secondsCount = document.querySelector('.seconds_count');

    const deadline = new Date(2023, 05, 31);
    
    function countTimer () {
        const differents = deadline - new Date();

        if(differents <= 0) {
            clearInterval(null);
        }

        const days = differents > 0 ? Math.floor(differents / 1000 / 60 / 60 / 24) : 0;
        const hours = differents > 0 ? Math.floor(differents / 1000 / 60 / 60) % 24 : 0;
        const minutes = differents > 0 ? Math.floor(differents / 1000 / 60) % 60 : 0;
        const seconds = differents > 0 ? Math.floor(differents / 1000) % 60 : 0;

        daysCount.textContent = days < 10 ? '0' + days : days;
        hoursCount.textContent = hours < 10 ? '0' + hours : hours;
        minutesCount.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsCount.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    countTimer();
    setInterval(countTimer, 1000);


    // validation
    !(function(){
        const form = document.querySelector('#form');
        const email = document.querySelector('.email');

        const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        function onInput () {
            if(isEmailVaild(email.value)){
                email.style.borderColor = 'green';
                form.addEventListener('submit', ()=> {
                    let popUp = document.querySelector('.pop_up');
                    popUp.classList.add('flex');
                    email.value = '';
                } )
            } else {
                email.style.borderColor = 'red';
            }
        }

        function isEmailVaild (value) {
            return regExp.test(value);
        }

        email.addEventListener('input', onInput);
    })();

    !(function(){
        let closeIcon = document.querySelector('.close_pop_up');
        let popUpBtn = document.querySelector('.pop_up_btn');
        let popUp = document.querySelector('.pop_up');

        closeIcon.addEventListener('click',()=>{popUp.classList.remove('flex')});
        popUpBtn.addEventListener('click',()=>{popUp.classList.remove('flex')});
    })();

});