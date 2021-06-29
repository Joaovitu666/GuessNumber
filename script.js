'use strict';


function showPicture() {
    var sourceOfPicture = "EDNALDO PEREIRA.png";
    var img = document.getElementById('bigpic')
    img.src = sourceOfPicture.replace('90x90', '150x150');
    img.style.position = "right bottom"
    img.style.display = "block";


}
function disapearPicture() {
    var sourceOfPicture = "EDNALDO PEREIRA.png";
    var img = document.getElementById('bigpic')
    img.src = sourceOfPicture.replace('90x90', '150x150');
    img.style.display = "none";

}
//console.log(document.querySelector('.guess').value)
let highscore = 0
document.querySelector('.again').addEventListener
    ('click', function () {

        console.log(document.querySelector('.message').textContent);

        document.querySelector('.message').textContent = 'tenta a sorte';

        disapearPicture();

        const max = 20;
        const min = 1;
        document.querySelector('.number').textContent = '?';
        const segredo = Math.floor(Math.random() * ((max + 1) - min)) + min;
        console.log(segredo)
        let score = 20;
        document.querySelector('.score').textContent = score;

        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('body').style.backgroundColor = 'black'
        let vencedor = 0




        document.querySelector('.check').addEventListener
            ('click', function () {


                let c = Number(document.querySelector('.guess').value);
                console.log(c);
                if (score > 0 && vencedor == 0) {
                    if (c > segredo) {
                        document.querySelector('.message').textContent = 'alto de mais meu patrão';
                        score -= 1;
                    }
                    if (c < segredo) {
                        document.querySelector('.message').textContent = 'baixo de mais meu patrão';
                        score -= 1;
                    }
                    if (c == segredo) {
                        document.querySelector('.message').textContent = 'GANHO PORRAAAA!!!';
                        document.querySelector('body').style.backgroundColor = '#60b347'
                        if (score > highscore) {
                            highscore = score;
                            document.querySelector('.highscore').textContent = highscore;
                        }
                        document.querySelector('.number').textContent = segredo
                        vencedor = 1;
                        showPicture()


                    }
                    document.querySelector('.score').textContent = score;
                    if (score == 0) {
                        vencedor = 1;
                        document.querySelector('.number').textContent = segredo
                        document.querySelector('.message').textContent = 'perdeu porra';
                        document.querySelector('body').style.backgroundColor = 'red';
                    }

                }
            })
    })