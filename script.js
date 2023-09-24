(function () {
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const p = entry.target;

            if (entry.isIntersecting) {
                p.classList.add('animatetop');
                return;
            }

            p.classList.remove('animatetop');
        });
    });

    observer.observe(document.querySelector('#about p'));

    var observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const p = entry.target;

            if (entry.isIntersecting) {
                p.classList.add('animatetop');
                return;
            }

            p.classList.remove('animatetop');
        });
    });

    observer2.observe(document.querySelector('#about p.py-2'));

    var cards = document.querySelectorAll('.flip-card')
    cards.forEach(card => {

        card.addEventListener('mouseenter', function () {
            card.classList.add('flip-card-active')
        })

        card.addEventListener('mouseleave', function () {
            card.classList.remove('flip-card-active')
        })
    })
})();