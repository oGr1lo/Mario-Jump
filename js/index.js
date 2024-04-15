const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    // Apos a animação terminar, remove a class "jump"
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    // Ao colocar um + na frente de um comando que retorna uma string de numero, ele transforma em number

    if (pipePosition <= 101 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "mario-jump-images/game-over.png";
        mario.style.width = '65px';
        mario.style.left = '40px';

        clearInterval(loop);

        document.addEventListener('click', () => {
            // Reinicia o jogo (por exemplo, recarregando a página)
            window.location.reload();
        });
    }

}, 10)

document.addEventListener('keydown', (event) => {
    // Verifica se a tecla pressionada é a tecla espaço (código 32)
    if (event.keyCode === 32) {

        // Chama a função para pular
        jump();

    }
})

// Adiciona um evento de clique ao documento inteiro
document.addEventListener('click', jump);

