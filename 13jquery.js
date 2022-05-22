
let currentImg = 3;

let images = document.querySelectorAll('.image-to-show')

let imgContainer = document.querySelector('.images-wrapper')


$(`#${4 - currentImg}`).fadeIn(500, "linear")


function setAnimation() {


  if (currentImg > 0) {

    currentImg--

    $(`#${4 - currentImg}`).fadeIn(500, "linear")

  } else {
    currentImg = currentImg + 3
    $(`#${4 - currentImg}`).fadeIn(500, "linear")

  }


}

let timerRemove = window.setInterval(() => {

  let elem = $(`#${4 - currentImg}`)
  $(`#${4 - currentImg}`).fadeOut(500, "linear")

  imgContainer.insertAdjacentHTML('afterbegin', `<img id="1" src="./img/1.jpg" alt="image of game" class="image-to-show" />
      <img id="2" src="./img/2.jpg" alt="image of game" class="image-to-show" />
      <img id="3" src="./img/3.JPG" alt="image of game" class="image-to-show" />
      <img id="4" src="./img/4.png" alt="image of game" class="image-to-show" />`)

}, 2500)
let timerSet = window.setInterval(() => { setAnimation() }, 3000)



const timerContainer = document.querySelector('.timer')

timerContainer.insertAdjacentHTML('afterbegin', '<p>Осталось cекунд</p>')

let mySpan = document.querySelector('p')
let secs = 3

mySpan.insertAdjacentHTML('afterend', `<span> ${secs} </span>`);
let span = document.querySelector('span');
setInterval(() => span.remove(), 1000)

let timerId = setInterval(() => {

  mySpan.insertAdjacentHTML('afterend', `<span> ${--secs} </span>`);
  let span = document.querySelector('span');
  setInterval(() => span.remove(), 1000)

}, 1000)

setTimeout(() => clearInterval(timerId), 3000);


let timerSpan = window.setInterval(() => {

  mySpan.remove()

}, 3000)


let myTimer = window.setInterval(() => {

  timerContainer.insertAdjacentHTML('afterbegin', '<p>Осталось cекунд</p>')

  mySpan = document.querySelector('p')

  let secs = 3

  let timerSecond = setInterval(() => {

    mySpan.insertAdjacentHTML('afterend', `<span> ${--secs} </span>`);
    let span = document.querySelector('span');
    setInterval(() => span.remove(), 1000)

  }, 1000)

  setTimeout(() => clearInterval(timerSecond), 3000);



}, 3000)

const button = document.querySelector('button')
const button2 = document.querySelector('.continue')


button.addEventListener('click', () => {

  window.clearInterval(timerRemove)
  window.clearInterval(timerSet)

  window.clearInterval(timerSpan)
  window.clearInterval(myTimer)

})

button2.addEventListener('click', () => {

  timerRemove = window.setInterval(() => {

    let elem = $(`#${4 - currentImg}`)
    $(`#${4 - currentImg}`).fadeOut(500, "linear")

    imgContainer.insertAdjacentHTML('afterbegin', `<img id="1" src="./img/1.jpg" alt="image of game" class="image-to-show" />
      <img id="2" src="./img/2.jpg" alt="image of game" class="image-to-show" />
      <img id="3" src="./img/3.JPG" alt="image of game" class="image-to-show" />
      <img id="4" src="./img/4.png" alt="image of game" class="image-to-show" />`)

  }, 2500)
  timerSet = window.setInterval(() => { setAnimation() }, 3000)

})

