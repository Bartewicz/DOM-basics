(function() {

    var confirmed = confirm('Cześć, co powiesz na zagadkę?')

    if (confirmed) {
        String.prototype.toLowerCase(prompt('"Trzydzieści białych koni na łące czerwonej, najpierw klapią, potem człapią, w końcu stoją nieruchome." - Użyj małych liter podając odpowiedź')) === String.prototype.toLowerCase('zęby') ? document.write('Brawo, jesteś geniuszem! :)') : document.write('Nieee, `my precious`, odśwież stronę i spróbuj raz jeszcze ;)')
    } else document.write('Jaka szkoda... Jak się zdecydujesz to odśwież stronę ;)')

})()
