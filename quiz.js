const quizArea = document.querySelector('.quizArea');
const correctAnswers = document.querySelector('.correctAnswers');
const totalPoints = document.querySelector('.totalPoints');

let index = 0;
let correctAnswerCounter = 0;
let totalPointsCounter = 0;

correctAnswers.innerHTML = correctAnswerCounter;
totalPoints.innerHTML = totalPointsCounter;

const quiz = [
    {
        pokeData: {
            pokemonURL: 'img/pokemon1.png',
            pokeDataAnswers: [
                'Diglett',
                'Bulbasaur',
                'Persian',
                'Golduck'
            ],
            correctAnswer: 'Bulbasaur'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon2.webp',
            pokeDataAnswers: [
                'Charmander',
                'Machop',
                'Tentacool',
                'Weepinbell'
            ],
            correctAnswer: 'Charmander'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon3.png',
            pokeDataAnswers: [
                'Poliwrath',
                'Bellsprout',
                'Charmeleon',
                'Zubat'
            ],
            correctAnswer: 'Charmeleon'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon4.png',
            pokeDataAnswers: [
                'Rattata',
                'Pidgeotto',
                'Squirtle',
                'Nidoran'
            ],
            correctAnswer: 'Squirtle'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon5.png',
            pokeDataAnswers: [
                'Blastoise',
                'Weedle',
                'Wartortle',
                'Metapod'
            ],
            correctAnswer: 'Blastoise'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon6.png',
            pokeDataAnswers: [
                'Pidgeotto',
                'Caterpie',
                'Poliwrath',
                'Metapod'
            ],
            correctAnswer: 'Caterpie'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon7.png',
            pokeDataAnswers: [
                'Venonat',
                'Beedrill',
                'Nidorina',
                'Sandslash'
            ],
            correctAnswer: 'Beedrill'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon8.png',
            pokeDataAnswers: [
                'Parasect',
                'Golbat',
                'Vileplume',
                'Pidgey'
            ],
            correctAnswer: 'Pidgey'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon9.png',
            pokeDataAnswers: [
                'Arbok',
                'Raichu',
                'Ninetales',
                'Vulpix'
            ],
            correctAnswer: 'Arbok'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon10.png',
            pokeDataAnswers: [
                'Raichu',
                'Pikachu',
                'Pinsir',
                'Magikarp'
            ],
            correctAnswer: 'Pikachu'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon11.png',
            pokeDataAnswers: [
                'Victreebel',
                'Sandshrew',
                'Slowpoke',
                'Geodude'
            ],
            correctAnswer: 'Sandshrew'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon12.png',
            pokeDataAnswers: [
                'Gloom',
                'Vileplume',
                'Dugtrio',
                'Nidoqueen'
            ],
            correctAnswer: 'Nidoqueen'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon13.png',
            pokeDataAnswers: [
                'Clefairy',
                'Wigglytuff',
                'Clefable',
                'Paras'
            ],
            correctAnswer: 'Clefairy'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon14.png',
            pokeDataAnswers: [
                'Butterfree',
                'Ninetales',
                'Vulpix',
                'Caterpie'
            ],
            correctAnswer: 'Ninetales'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon15.png',
            pokeDataAnswers: [
                'Poliwrath',
                'Arcanine',
                'Zubat',
                'Diglett'
            ],
            correctAnswer: 'Zubat'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon16.png',
            pokeDataAnswers: [
                'Diglett',
                'Meowth',
                'Primeape',
                'Mankey'
            ],
            correctAnswer: 'Diglett'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon17.png',
            pokeDataAnswers: [
                'Psyduck',
                'Golduck',
                'Metapod',
                'Blastoise'
            ],
            correctAnswer: 'Psyduck'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon18.png',
            pokeDataAnswers: [
                'Machamp',
                'Poliwhirl',
                'Machop',
                'Abra'
            ],
            correctAnswer: 'Machop'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon19.png',
            pokeDataAnswers: [
                'Grimer',
                'Magnemite',
                'Dewgong',
                'Doduo'
            ],
            correctAnswer: 'Magnemite'
        }
    },
    {
        pokeData: {
            pokemonURL: 'img/pokemon20.png',
            pokeDataAnswers: [
                'Voltorb',
                'Slowpoke',
                'Golem',
                'Electrode'
            ],
            correctAnswer: 'Voltorb'
        }
    }
];

nextPokeData(index);

function nextPokeData(index) {
    const quizIndex = quiz[index];
    const pokeData = quizIndex.pokeData;
    const answers = pokeData.pokeDataAnswers;
    const pokemonImage = pokeData.pokemonURL;
    quizArea.innerHTML = `
    <div class="quizHeading">
        <div class="quizImage"><img src="${pokemonImage}"></div>
    </div>
    <div class="quizAnswersContainer">
        <div class="quizAnswer">
        ${answers[0]}
        </div>
        <div class="quizAnswer">
        ${answers[1]}
        </div>
        <div class="quizAnswer">
        ${answers[2]}
        </div>
        <div class="quizAnswer">
        ${answers[3]}
        </div>
    </div>`;
};

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('newGame')) {
        index = 0;
        correctAnswerCounter = 0;
        correctAnswers.innerHTML = correctAnswerCounter;
        totalPointsCounter = 0;
        totalPoints.innerHTML = totalPointsCounter;
        nextPokeData(index);
    }
    if (e.target.classList.contains('quizAnswer')) {
        if (e.target.innerText === quiz[index].pokeData.correctAnswer) {
            correctAnswerCounter++;
            correctAnswers.innerHTML = correctAnswerCounter;
            totalPointsCounter += 5;
            totalPoints.innerHTML = totalPointsCounter;
            if (index >= 19) {
                quizArea.innerHTML = `
                <div class="results">
                <h2>Your final results</h2>
                <p class="allCorrectAnswers">${correctAnswerCounter} correct answers</p>
                <p class="allPoints">${totalPointsCounter} points</p>
                <button class="newGame">Start Over</button>
                </div>`;
            } else {
                index++;
                nextPokeData(index);
            }
        } else {
            if (index >= 19) {
                quizArea.innerHTML = `
                <div class="results">
                <h2>Your final results</h2>
                <p class="allCorrectAnswers">${correctAnswerCounter} correct answers</p>
                <p class="allPoints">${totalPointsCounter} points</p>
                <button class="newGame">Start Over</button>
                </div>`;
            } else {
                index++;
                nextPokeData(index);
            }
        }
    }
});
