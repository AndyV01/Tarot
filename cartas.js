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
        this.predicciones = [
            {
                prediccion:"En tu futuro cercano, se vislumbra un cambio significativo que alterará el curso de tu vida. Prepárate para abrazar esta transformación con valentía y una mente abierta, ya que te llevará a nuevas y emocionantes oportunidades de crecimiento personal y desarrollo espiritual."
            },
            {
                prediccion:"Una situación inesperada está por surgir en tu camino, trayendo consigo una nueva perspectiva y una mayor comprensión de tu propósito en la vida. Mantén tus sentidos alerta y confía en tu intuición para navegar por estos cambios con gracia y sabiduría."
            },
            {
                prediccion:"Las decisiones que tomes en este momento tendrán un impacto duradero en tu futuro. Te encuentras en un punto crucial en tu viaje, donde tus elecciones determinarán el rumbo que tomarás. Tómate el tiempo necesario para reflexionar y sintonizarte con tus verdaderos deseos y valores."
            },
            {
                prediccion:"Aunque puedas enfrentar desafíos en el camino, recuerda que tienes dentro de ti la fuerza y la determinación necesarias para superar cualquier obstáculo. Confía en tus habilidades y mantén una actitud positiva mientras te enfrentas a los desafíos que se presenten."
            },
            {
                prediccion:"Se avecinan momentos de alegría y realización para ti. Despierta cada día con gratitud en tu corazón y confianza en tus capacidades. Recuerda que eres digno/a de amor, éxito y felicidad, y que mereces todas las bendiciones que el universo tiene reservadas para ti."
            },
            {
                prediccion:"Presta atención a las señales que te envía el universo en forma de sincronicidades y coincidencias. Estas señales pueden servir como guía en tu camino y proporcionarte claridad sobre los pasos que debes tomar hacia tus metas y sueños más profundos."
            },
            {
                prediccion:"Cultiva relaciones significativas y auténticas que nutran tu alma y te brinden apoyo en los momentos difíciles. El amor y la conexión son aspectos fundamentales de la experiencia humana, y al rodearte de personas que te aman y te aceptan tal como eres, encontrarás mayor satisfacción y plenitud en tu vida."
            },
            {
                prediccion:"Recuerda que cada experiencia, ya sea positiva o negativa, tiene el potencial de enseñarte lecciones valiosas y ayudarte a crecer como persona. Aprovecha cada oportunidad de aprendizaje y mira hacia adelante con esperanza y optimismo, sabiendo que cada desafío te acerca más a tu verdadero yo."
            },
            {
                prediccion:"Confía en el proceso de la vida y en el poder del universo para guiarte en la dirección correcta. Aunque puedas sentirte perdido/a en momentos de incertidumbre, confía en que todo está sucediendo según el plan divino y que estás siendo conducido/a hacia tu mayor bienestar y felicidad."
            },
            {
                prediccion:"Enfrenta cada día con coraje y determinación, sabiendo que tienes dentro de ti la fuerza necesaria para superar cualquier adversidad que se presente en tu camino. Mantén la fe en ti mismo/a y en tus habilidades para crear la vida que deseas, y no permitas que el miedo o la duda te detengan en tu búsqueda de la realización personal y espiritual."
            },
        ]
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
            this.showPrediction()
        }
     }
    } 
    showPrediction() {
        clearInterval(this.countDown)
        this.audioController.victory()
        // Elegir una predicción aleatoria
        const randomIndex = Math.floor(Math.random() * this.predicciones.length);
        const randomPrediction = this.predicciones[randomIndex].prediccion;
        setTimeout(()=> {
            const predictionParagraph = document.getElementById("prediction-text");
        predictionParagraph.textContent = randomPrediction;
        const predictionElement = document.getElementById("victory-text");
        predictionElement.classList.add("visible"); 
    }, 300)
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

const volverButton = document.querySelector('.start');
volverButton.addEventListener('click', () => {
    location.reload();
});

