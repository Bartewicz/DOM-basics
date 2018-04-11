function addElement() {

    var bodySection = document.querySelector('body')

    var newDiv = document.createElement('div')
    var newText = document.createTextNode('Ala ma kota')

    newDiv.appendChild(newText)
    bodySection.appendChild(newDiv)

}