document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'Batman',
            img: 'img/Batman.png'
        },
        {
            name: 'Batman',
            img: 'img/Batman.png'
        },
        {
            name: 'Minion',
            img: 'img/Minion.png'
        },
        {
            name: 'Minion',
            img: 'img/Minion.png'
        },
        {
            name: 'Cool girl',
            img: 'img/Cool girl.png'
        },
        {
            name: 'Cool girl',
            img: 'img/Cool girl.png'
        },
        {
            name: 'Guy',
            img: 'img/Guy.png'
        },
        {
            name: 'Guy',
            img: 'img/Guy.png'
        },
        {
            name: 'Happy',
            img: 'img/Happy.png'
        },
        {
            name: 'Happy',
            img: 'img/Happy.png'
        },
        {
            name: 'Turtle',
            img: 'img/turtle.png'
        },
        {
            name: 'Turtle',
            img: 'img/turtle.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardChosenId = []
    var cardsWon = []

    //CREATE BOARD
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/background.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    } 
    createBoard();


    //CHECK FOR MATCHES
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/background.png')
            cards[optionTwoId].setAttribute('src', 'img/background.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //FLIPCARD
    function flipcard(){
        var cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardChosenId.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


})