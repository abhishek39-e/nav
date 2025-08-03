klkfkffkkffgflet num = document.querySelectorAll('li')
num.forEach((e) => {
  e.addEventListener('click', () => {
    num.forEach((li) => li.classList.remove('active'))
    console.log(e.innerText)
    e.classList.add('active')
    let getClass = e.innerText.toLowerCase()
    console.log(getClass)
    document
      .querySelector(`.${getClass}`)
      .scrollIntoView({ behavior: 'smooth' })
  })
})
