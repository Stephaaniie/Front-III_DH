const e = React.createElement;
// ¡Esto es un componente React!
const Button = () => e(
'button',
{ onClick: () => alert("Has hecho click!") },
'Haz Click!'
);
// Seleccionamos el div dentro de nuestro index.html
const domContainer = document.querySelector('#button_container');

// Aquí llamamos a un método de React que crea la base
// para poder utilizar la librería dentro de nuestro <div>.
const root = ReactDOM.createRoot(domContainer);
// Con el método render vamos a mostrar el componente Button
root.render(e(Button));