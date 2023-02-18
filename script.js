const word = document.querySelectorAll('.word');
const glitch = document.querySelector('.glitch');
const letters = 'abcdefghijklmnopqrstuvwxyz!#$&+1234567890'


const wordWarp = function() {
    const elem = this.dataset.id;
    let interations = 0;
    const interval = setInterval(() => {
        this.classList.add('after');
        this.textContent = elem.split("")
        .map((letter, index) => {
            if(index < interations) return elem[index];
            return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("")
        .toUpperCase();
        if(interations >= elem.length) {
            clearInterval(interval);
            this.classList.remove('after');
        }
        interations += 1 / 3;
    }, 30)
}

word.forEach(x => {
    x.setAttribute("data-id", `${x.textContent}`);
    x.addEventListener('mouseover', wordWarp)
});