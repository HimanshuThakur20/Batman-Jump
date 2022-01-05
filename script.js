var score = 0
cross = true

play = new Audio('assets/run.mp3')
over = new Audio('assets/over.mp3')
jump = new Audio('assets/jump.mp3')
music = new Audio('assets/background.mp3')

document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('button').addEventListener('click', function start() {
        play.play()
        setTimeout(() => {
            play.pause()
            music.play()
        }, 1100)


        document.querySelector('.batman').style.visibility = 'visible'
        document.querySelector('.joker').style.visibility = 'visible'
        document.querySelector('.play').style.visibility = 'hidden'
        document.querySelector('.score').style.visibility = 'visible'
        document.querySelector('.info').style.visibility = 'visible'

        // document.querySelector('.GameOver').style.visibility = 'visible'
        setTimeout(() => {
            document.querySelector('#joke').classList.add('jokerani');
        }, 300)



    })





    document.addEventListener('keydown', function(e) {
        console.log("Key code is: ", e.keyCode)
        if (e.keyCode == 38) {
            bat = document.querySelector('#batman');

            bat.classList.add('batmanani');
            setTimeout(() => {
                bat.classList.remove('batmanani')
            }, 700);

            jump.play()
            setTimeout(() => {
                jump.pause()
            }, 1000)
        }
        if (e.keyCode == 39) {
            bat = document.querySelector('#batman');
            batX = parseInt(window.getComputedStyle(bat, null).getPropertyValue('left'));
            bat.style.left = batX + 112 + "px";

        }
        if (e.keyCode == 37) {
            bat = document.querySelector('#batman');
            batX = parseInt(window.getComputedStyle(bat, null).getPropertyValue('left'));
            bat.style.left = (batX - 112) + "px";

        }
        if (e.keyCode == 27) { //esc for pause
            console.log(document.querySelector('.pause').style.visibility)
            document.querySelector('.pause').style.visibility = 'visible';
            console.log(document.querySelector('.pause').style.visibility)
            music.pause();
            document.querySelector(".jokerani").style.animationPlayState = 'paused';
            document.querySelector(".batmanani").style.animationPlayState = 'paused';


        }
        if (e.keyCode == 13) { //enter for play
            setTimeout(() => {
                document.querySelector('.pause').style.visibility = 'hidden';
                music.play();
                document.querySelector(".jokerani").style.animationPlayState = 'running';
                document.querySelector(".batmanani").style.animationPlayState = 'running';
            }, 500)

        }
    })

    setInterval(() => {
        bat = document.querySelector('#batman');
        GameOver = document.querySelector('.GameOver');
        joker = document.querySelector('#joke');
        // const style1 = window.getComputedStyle(bat)
        // const style2 = window.getComputedStyle(joker)
        // console.log(style)
        // const bx = parseInt(style1.getPropertyValue('left'))
        // const by = parseInt(style1.getPropertyValue('top'))

        // const jx = parseInt(style2.getPropertyValue('left'))
        // const jy = parseInt(style3.getPropertyValue('top'))
        // console.log(bat)
        // parseInt(bx)
        // parseInt(by)

        // bx = bat.style.left
        // by = bat.style.top

        // jx = joker.style.left
        // jy = joker.style.top

        // console.log(bx, by)
        // parseInt(jx)
        // parseInt(jy)

        bx = parseInt(window.getComputedStyle(bat, null).getPropertyValue('left'));
        by = parseInt(window.getComputedStyle(bat, null).getPropertyValue('top'));

        jx = parseInt(window.getComputedStyle(joker, null).getPropertyValue('left'));
        jy = parseInt(window.getComputedStyle(joker, null).getPropertyValue('top'));

        // console.log(cross)

        // console(joker)
        // console.log(jx, jy, bx, by)
        const offsetX = Math.abs(bx - jx);
        const offsetY = Math.abs(by - jy);
        // console.log(offsetX, offsetY)
        if (offsetX < 55 && offsetY < 68) {
            // gameOver.innerHTML = "Game Over - Reload to Play Again"
            // GameOver.style.visibility = 'visible'


            document.querySelector('.GameOver').style.visibility = 'visible'
            bat.style.visibility = 'hidden'
            document.querySelector('#joke').classList.remove('jokerani')

            music.pause()
            over.play();
            setTimeout(() => {
                over.pause();
            }, 3000);

            setTimeout(() => {
                // document.querySelector('.GameOver').style.visibility = 'hidden'

                // playagain = document.querySelector('button')
                // playagain.innerHTML = 'Play Again'
                // playagain.style.visibility = 'visible'
                playagain = document.querySelector('#replay')
                playagain.style.visibility = 'visible'

                playagain.addEventListener('click', function() {

                    location.reload()

                })
            }, 1000)

        } else if (offsetX < 120 && cross) {

            score += 1;
            scored = document.querySelector('#score')
            scored.innerHTML = "Your Score: " + score




            // alert('crossed')
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);

            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(joker, null).getPropertyValue('animation-duration'));
                // console.log(aniDur)
                if (aniDur > 2.44) {
                    newDur = aniDur - 0.06;
                    console.log(newDur)
                } else(newDur = aniDur)

                joker.style.animationDuration = newDur + 's';
                // console.log('New animation duration: ', newDur)
            }, 300);

        }

    }, 10);

    // document.addEventListener('keydown', function(e) {
    //     if (e.keycode == 27) { //esc for pause
    //         music.pause();
    //         document.querySelector(".batmanani").style.animation - play - state = 'paused';
    //         document.querySelector(".jokerani").style.animation - play - state = 'paused';

    //     }
    //     if (e.keycode == 18) { //alt for play
    //         music.play();
    //         document.querySelector(".batmanani").style.animation - play - state = 'running';
    //         document.querySelector(".jokerani").style.animation - play - state = 'running';

    //     }
    // })

})