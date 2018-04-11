(function() {

    var askUrl = prompt('Cześć, na jaką stronę chcesz się udać? Pamiętaj o wpisaniu protokołu http://')

    // User has to confirm that he wants to oleave the page
    if (confirm('Uwaga, przekieruję cię teraz na stronę ' + askUrl)) {
        window.location = askUrl
}

})()
