(function () {
    var WAS_ITERSECTED_1 = false;
    var WAS_ITERSECTED_2 = false;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            var p = entry.target;

            if (WAS_ITERSECTED_1) {
                return;
            }

            if (entry.isIntersecting) {
                p.classList.add('animatetop');
                WAS_ITERSECTED_1 = true;
                return;
            }

            p.classList.remove('animatetop');
        });
    });

    observer.observe(document.querySelector('#about p'));

    var observer2 = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            var p = entry.target;

            if (WAS_ITERSECTED_2) {
                return;
            }

            if (entry.isIntersecting) {
                p.classList.add('animatetop');
                WAS_ITERSECTED_2 = true;
                return;
            }

            p.classList.remove('animatetop');
        });
    });

    observer2.observe(document.querySelector('#about p.py-2'));

    var cards = document.querySelectorAll('.flip-card')
    cards.forEach(function (card) {

        card.addEventListener('mouseenter', function () {
            card.classList.add('flip-card-active')
        })

        card.addEventListener('mouseleave', function () {
            card.classList.remove('flip-card-active')
        })
    })
})();

function adjustFlipCards() {
    var img = document.querySelector('#crew-img');
    var flipCards = document.querySelectorAll('.flip-card');

    console.log(img.offsetHeight)

    flipCards.forEach(function (card) {
        card.style.height = img.offsetHeight + 'px'
    })
}

(function () {
    adjustFlipCards();
    addEventListener("resize", adjustFlipCards);
})();