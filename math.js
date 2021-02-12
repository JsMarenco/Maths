// ---- ---- ---- ---- ---- ---- Razón ---- ---- ---- ---- ---- ---- //

// es la comparación de cantidades que se expresa en forma de cociente

// let a = 8 // antecedente
// let b = 4 // consecuente

// ---- ---- ---- ---- ---- ---- Proporciones ---- ---- ---- ---- ---- ---- //

// es la igualdad de dos razones

// let a = 8 // extremo
// let b = 2 // medios
// let c = 4 // medios
// let d = 8 // extremos

// ---- ---- ---- ---- ---- ---- Encontrar el valor de un extremo ---- ---- ---- ---- ---- ---- //

// El valor de un extremo equivale al producto de los medios, divido entre el extremo restante

// let a = 4
// let b = 7
// let c = 8
// let d = null

// let result = (b * c) / a

// primero se multiplican los medios en este caso son 'b' y 'c'
// el resultado de esa operación será dividido entre el extremo restante que es 'a'

// ---- ---- ---- ---- ---- ---- Encontrar el valor de un medio ---- ---- ---- ---- ---- ---- //

// El valor de un medio es el producto de los extremo, dividio entre el medio restante

// let a = 5
// let b = 8
// let c = null
// let d = 2

// let result = (a * d) / b

// primero se multiplican los extremos en este caso son 'a' y 'd'
// el resultado de esa operación será dividido entre el medio restante que es 'b'

// ---- ---- ---- ---- ---- ---- ALGORITMO ---- ---- ---- ---- ---- ---- //

const medios_extremos = () => {
  let result
  let x

  let a
  let b
  let c
  let d

  let value = prompt('Ingresa en este orden a, b, c, d \n ¿Cúal valor que deseas encontrar?').trim().toLowerCase()

  if (value.length > 1 || value == undefined) {
    alert('Error, solo puedes ingresar a, b, c ,d')
    medios_extremos()
  }

  switch (value) {
    case 'a':
      b = parseInt(prompt('Ingresa el valor de b'))
      c = parseInt(prompt('Ingresa el valor de c'))
      d = parseInt(prompt('Ingresa el valor de d'))

      a = (b * c) / d

      result = Math.floor(a)
      breaks
    case 'b':
      a = parseInt(prompt('Ingresa el valor de a'))
      c = parseInt(prompt('Ingresa el valor de c'))
      d = parseInt(prompt('Ingresa el valor de d'))

      b = (a * d) / c

      result = Math.floor(b)
      break
    case 'c':
      a = parseInt(prompt('Ingresa el valor de a'))
      b = parseInt(prompt('Ingresa el valor de b'))
      d = parseInt(prompt('Ingresa el valor de d'))

      c = (a * d) / b

      result = Math.floor(c)
      break
    default:
      a = parseInt(prompt('Ingresa el valor de a'))
      b = parseInt(prompt('Ingresa el valor de b'))
      c = parseInt(prompt('Ingresa el valor de c'))

      d = (b * c) / a

      result = Math.floor(d)
      break
  }

  if (value == 'a' || value == 'd') {
    x = 'extremo'
  } else {
    x = 'medio'
  }

  console.log(`El valor del ${x} restante es de ${result}`)
}

medios_extremos()