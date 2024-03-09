const cartas = [
    {
        nombre:"card1",
        img:"./img/card1.png",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card2",
        img:"./img/card2.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card3",
        img:"./img/card3.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card4",
        img:"./img/card4.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card5",
        img:"./img/card5.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card6",
        img:"./img/card6.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card7",
        img:"./img/card7.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card8",
        img:"./img/card8.webp",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card9",
        img:"./img/card9.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card10",
        img:"./img/card10.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card11",
        img:"./img/card11.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card12",
        img:"./img/card12.webp",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card13",
        img:"./img/card13.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card14",
        img:"./img/card14.webp",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card15",
        img:"./img/card15.webp",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card16",
        img:"./img/card16.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card17",
        img:"./img/card17.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card18",
        img:"./img/card18.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card19",
        img:"./img/card19.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card20",
        img:"./img/card20.webp",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card21",
        img:"./img/card21.webp",
        cartaBack:"./img/ladoB.jpg"
    },
    {
        nombre:"card22",
        img:"./img/card22.jpg",
        cartaBack:"./img/ladoB.jpg"
    },
]

class AudioController {
    constructor() {
        this.bgMusic = new Audio('./Audio/mistica.mp3')
        this.flipSound = new Audio('./Audio/carta.mp3')
        this.Victory = new Audio('./Audio/victory.mp3')
        this.bgMusic.volume = 0.3;
        this.bgMusic.loop = true
    }
    startMusic() {
        this.bgMusic.play()
    }
    stopMusic() {
        this.bgMusic.pause()
        this.bgMusic.currentTime = 0
    }
    flip() {
        this.flipSound.play()
    }
    victory() {
        this.Victory.play()
    }
}
const container = document.querySelector(".container"); // Selecciona el contenedor donde se agregarán las cartas

cartas.forEach((carta) => {
    const cartaElement = document.createElement("div");
    cartaElement.classList.add("card");

    const cartaFront = document.createElement("div");
    cartaFront.classList.add("card-front", "card-face");
    const imgFront = document.createElement("img");
    imgFront.src = carta.img;
    cartaFront.appendChild(imgFront);

    const cartaBack = document.createElement("div");
    cartaBack.classList.add("card-back", "card-face");
    const imgBack = document.createElement("img");
    imgBack.src = carta.cartaBack;
    cartaBack.appendChild(imgBack);

    cartaElement.appendChild(cartaFront);
    cartaElement.appendChild(cartaBack);

    container.appendChild(cartaElement);
});

class MixOrMatch {
    constructor(cards) {
        this.cardsArray = cards
        this.audioController = new AudioController()

    }
    startGame() {
        this.cardToCheck = null
        this.totalClicks = 0
        this.matchedCards = []
        this.bussy = true
        this.audioController.startMusic()
        this.shuffleCards()
        this.bussy = false
    }
    flipCard (card) {
     if(this.canFlipCard(card)) {
        this.audioController.flip()
        card.classList.add("visible")
        this.totalClicks++
        if (this.totalClicks == 3) {
            this.victory()
        }
     }
    } 
    victory() {
        clearInterval(this.countDown)
        this.audioController.victory()
        setTimeout(()=> {
        document.getElementById("victory-text"). classList.add("visible")
    }, 1000)
    let start = document.getElementsByClassName('startok')
        
    start.addEventListener('click', ()=> {
            this.startGame()
            
    })
}

    shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--){
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex
        }
    }
    canFlipCard(card) {
        return true
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"))
    let cards = Array.from(document.getElementsByClassName("card"))
   
   cards.sort(()=> Math.random() - 0.5)
    let game = new MixOrMatch(cards)

overlays.forEach(overlay => {
    overlay.addEventListener('click', ()=> {
        overlay.classList.remove("visible")
        game.startGame();
    })
})
cards.forEach(card => {
    card.addEventListener('click', ()=> {
        game.flipCard(card)
    }  )
} )
}

if(document.readyState === 'loading') {
    document.addEventListener( "DOMContentLoaded", ready())
} else {
    ready()
}
function shuffleCards() {
    for(let i = this.cardsArray.length - 1; i > 0; i--){
        let randIndex = Math.floor(Math.random() * (i+1))
        // Intercambiar las posiciones de las cartas en el array
        [this.cardsArray[i], this.cardsArray[randIndex]] = [this.cardsArray[randIndex], this.cardsArray[i]]
    }
    // Actualizar el orden en el DOM
    this.cardsArray.forEach((card, index) => {
        card.style.order = index;
    })
}

const volverButton = document.querySelector('.start');
volverButton.addEventListener('click', () => {
    
    location.reload();
});

