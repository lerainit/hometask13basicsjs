const Images = document.querySelectorAll('.image-to-show')

const imagesArray = Array.from(Images)

console.log(imagesArray)

let currentImg = 0

imagesArray[currentImg].classList.add('active')

let timer = window.setInterval(() => {
  if (currentImg < imagesArray.length - 1) {

    currentImg++
    Images.forEach(item => item.classList.remove('active'))

    imagesArray[currentImg].classList.add('active')
  }

  else if (currentImg >= imagesArray.length - 1) {
    currentImg = -1
    currentImg++;

    Images.forEach(item => item.classList.remove('active'))

    imagesArray[currentImg].classList.add('active')
  }
}, 3000)

const button = document.querySelector('button')
const button2 = document.querySelector('.continue')


button.addEventListener('click', () => window.clearInterval(timer))

button2.addEventListener('click', () => timer = window.setInterval(() => {

  if (currentImg < imagesArray.length - 1) {

    currentImg++

    Images.forEach(item => item.classList.remove('active'))

    imagesArray[currentImg].classList.add('active')



  }
  else if (currentImg >= imagesArray.length - 1) {



    currentImg = -1
    currentImg++;

    Images.forEach(item => item.classList.remove('active'))

    imagesArray[currentImg].classList.add('active')
  }

}, 3000))

