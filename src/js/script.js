function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "../src/assets/img/Logo-dark.png")
    img.setAttribute("alt", "Logo - MinhaSaúde Light")
  } else {
    img.setAttribute("src", "../src/assets/img/Logo-light.png")
    img.setAttribute("alt", "Logo - MinhaSaúde Dark")
  }
}

// login - feito
const btnLogin = document.querySelector(".btn-login")
const form = document.querySelector("form")

var login = document.getElementById("login-usuario").value
var senha = document.getElementById("login-password").value

btnLogin.addEventListener("click", (event) => {
  event.preventDefault()

  const fields = [...document.querySelectorAll(".input-block input")]

  fields.forEach((field) => {
    if (field.value === "") form.classList.add("validate-error")
  })

  const formError = document.querySelector(".validate-error")
  if (formError) {
    formError.addEventListener("animationend", (event) => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error")
      }
    })
  } else {
    form.classList.add("form-hide")
    window.location.href = "../src/html/principal.html"
  }
})

form.addEventListener("animationstart", (event) => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden"
  }
})

form.addEventListener("animationend", (event) => {
  if (event.animationName === "down") {
    form.style.display = "none"
    document.querySelector("body").style.overflow = "none"
  }
})

// Mostrar e ocutar senha
function mostrarSenha() {
  var inputPass = document.getElementById("login-password")
  var btnShowPass = document.getElementById('btn-senha')

  if (inputPass.type === 'password') {
    inputPass.setAttribute("type", "text")
    btnShowPass.classList.replace("eye-off-outline", "eye-outline")
  } else {
    inputPass.setAttribute('type', 'password')
    btnShowPass.classList.replace("eye-outline", "eye-off-outline")
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
