const form = document.querySelector("form")
const input = document.querySelector("input")
const result = document.querySelector("p");


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = input.value
  result.textContent = `Factorial of ${value} is: ${factorial(value)}`
  input.blur()
})

input.addEventListener("focus", () => {
  input.value = ""
})

const factorial = (number) => {
  let result = 1
  for (let i = 2; i <= number; i++) {
    result *= i
  }
  return result
}
