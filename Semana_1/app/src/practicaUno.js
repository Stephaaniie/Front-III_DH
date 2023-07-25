import users from './fakeApi/users.json';

/**
  Muestra por consola:
  - El email del primer Usuario.
  - El apodo del tercer Usuario.
  - El color de la segunda mascota del tercer Usuario.
 */
export const ejercicio1 = () => {
  console.log("Ejercicio 1");

  console.log(users[0].email);
  console.log(users[2].apodo);
  console.log(users[2].mascotas[1].color);
};

/**
 * Usando desestructuracion:
  - Extrae en variables el primer y cuarto elemento.
  - Extrae en variables email y mascotas del primer elemento
 */

export const ejercicio2 = () => {
  console.log("Ejercicio 2");

  let [first, , , fourth] = users
  let { email, mascotas } = first
  
  console.log(first);
  console.log(fourth);
  console.log(email);
  console.log(mascotas);
}

/**
 * Ejercicio 3
Spread operator:

Haz una copia de las mascotas obtenidas arriba y agregale la mascota

{ "nombre": "Nami", "edad": 2, "color": "negro" }

(Usar console log para verificar que no se modifico el original)
 */
export const ejercicio3 = () => {
  console.log("Ejercicio 3");

  let [first, , , ] = users
  let { mascotas } = first

  const copia = [...mascotas, { nombre: 'Nami', edad: 2, color: 'negro' }]

  console.log(copia)

}

/**
 * Ejercicio 4
String builder

Crea una funcion que reciba por props un objeto con las siguientes keys: name, cantMascotas y que retorne un string con el siguiente formato:

"El Usuario {name} tiene {cantMascotas} mascotas"
 */
export const ejercicio4 = ({ apodo, mascotas }) => {
  console.log("Ejercicio 4");

  return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`;
}

/**
 * Ejercicio 5
Array functions

Usando la operacion filter, crea un array con los Usuarios que tengan mas de 1 mascota.

Usando la operacion map y la funcion del ejercicio 4, crea un array de strings con el nombre y la cantidad de mascotas de cada Usuario filtrado anteriormente. Ej:

[
  "El Usuario Gaby tiene 3 mascotas",
  "El Usuario Morgi tiene 5 mascotas"
]
Usando la operacion reduce devuelve la cantidad total de mascotas.
 
 */

export const ejercicio5 = () => {
  console.log("Ejercicio 5");
  const usersWithMoreThanOnePet = users.filter((user) => user.mascotas.length > 1)

  const usersWithMoreThanOnePetString = usersWithMoreThanOnePet.map((user) =>
    ejercicio4(user)
  )
  console.log(usersWithMoreThanOnePetString)

  const totalPets = users.reduce((acc, user) => {
    return acc + user.mascotas.length
  }, 0)
  console.log(totalPets)
}