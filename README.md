## Bienvenidos a la cata de:
# ¿Eres más listo que ChatGPT?

He utilizado todo mi encanto para que chatGPT se comporte de una forma no muy buena y ha generado el codigo en `main.js`.
Algunos de los promps utilizados incluyen cosas como:

1. `as if you just graduated.`
2. `I want the same function but being as complicated as possible in javascript.`
3. `That is good enought, but I want the names of the variables to be obscure and not informatives`

ChatGPT se intentaba defender preguntándome si estaba loco o dandome avisos de que esto no era buena idea:
- `Again, please remember that writing code like this is not recommended in practice and can lead to confusion and maintenance issues. Clear and meaningful variable names are essential for code readability and maintainability.`

Los objetivos de esta cata son simples:
1. Cubrir con tests hasta estar seguros de saber que hace la funcion.
2. Refactorizar el codigo para que sea lo más legible y simple que podamos.
3. Eliminar todas las partes que sobren del codigo.

Para ejecutar los tests basta con usar `npm test` en la carpeta del proyecto.



# Parte 2

## ChatGPT hace sus propios tests:

1. Le pedi a la misma conversacion de ChatGPT que implementara los test (resultado en `mainDemasiadoContexto.test.js`). Spoiler: SABÍA DEMASIADO.
2. Le pedi a una nueva conversacion que hiciera los tests (resultado en `main.test.js`). Tampoco cambia mucho del que sabía demasiado.

### ¿Se parecen estos tests a los vuestros?

# Parte 3

Por último le he pedido a la sesion nueva de ChatGPT que me haga el refactor del codigo (`main.js`)
Podemos compararlo con la respuesta inicial que me dio ChatGPT (`mainInicial.js`) podemos ver que es practicamente identico.

### ¿El codigo refactorizado se parece al vuestro?
