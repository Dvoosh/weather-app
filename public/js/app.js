const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messegeOne =document.querySelector('#messege-1')
const messegeTwo =document.querySelector('#messege-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const loction = search.value

    messegeOne.textContent = 'Searching...'
    messegeTwo.textContent = ''
    fetch('/weather?address=' + loction).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messegeOne.textContent = data.error
        } else {
            messegeOne.textContent = data.location
            messegeTwo.textContent = data.forecast
        }
    })
})

})