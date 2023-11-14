const calculadora = require("../../models/calculadora.js")

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2)
  expect(resultado).toBe(4)
})

test("somar 5 + 200 deveria retornar 205", () => {
  const resultado = calculadora.somar(5, 200)
  expect(resultado).toBe(205)
})

test("somar 'banana' + 200 deveria retornar 'error'", () => {
  const resultado = calculadora.somar('banana', 200)
  expect(resultado).toBe("error")
})
