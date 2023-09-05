function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "../assets/img/Logo-dark.png")
    img.setAttribute("alt", "Logo - MinhaSaúde Light")
  } else {
    img.setAttribute("src", "../assets/img/Logo-light.png")
    img.setAttribute("alt", "Logo - MinhaSaúde Dark")
  }
}

/* background squares */
const ulSquares = document.querySelector("ul.squares")

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li")

  const random = (min, max) => Math.random() * (max - min) + min

  const size = Math.floor(random(10, 120))
  const position = random(1, 99)
  const delay = random(5, 0.1)
  const duration = random(24, 12)

  li.style.width = `${size}px`
  li.style.height = `${size}px`
  li.style.bottom = `-${size}px`

  li.style.left = `${position}%`

  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

  ulSquares.appendChild(li)
}
