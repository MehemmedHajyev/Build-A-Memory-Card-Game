const cards = document.querySelectorAll('.card')

let cardOne, cardtwo;


function flipCard(e) {
    let clickCard = e.target;
    if (clickCard !== cardOne) {
        clickCard.classList.add('flip');
        if (!cardOne) {
            return cardOne = clickCard;

        }
        cardtwo = clickCard;
        disableDesck = true
        let cardOneImg = cardOne.querySelector('img').src;
        let cardTwoImg = cardtwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg)

    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        cardOne.removeEventListener('click', flipCard)
        cardtwo.removeEventListener('click', flipCard)
        cardOne = cardtwo = ''
        return;

    }
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardtwo.classList.add('shake');
    }, 200);



    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardtwo.classList.remove('shake', 'flip');

        cardOne = cardtwo = ''
    }, 1200);
}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
})