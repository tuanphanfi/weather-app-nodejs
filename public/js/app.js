console.log('Client side JavaScript file is loaded!')




const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.innerHTML = 'Loading.......'
    messageTwo.innerHTML = 'Loading.......'

    fetch('/weather?address='+location).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                messageOne.innerHTML = data.error
            } else {
                messageOne.innerHTML = data.location
                messageTwo.innerHTML = data.forecast
                messageOne.style.color = 'gray'
                messageOne.style.fontWeight = '900'
                document.querySelector('#messageTwo').style.color = 'white'
            }
        })
    })

    console.log(location)
})