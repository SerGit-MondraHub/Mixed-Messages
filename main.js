//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const palabras =
    {
        sujetos:['Tu', 'tu pareja', 'tu familia', 'tu mascota'],
        verbos:['conseguira', 'perdera', 'tendra','robara'],
        objetos:['un empleo', 'un carro', 'un diente', 'una casa'],
    }

function iteration()   
    {
        for(let elem in palabras)
            {
                console.log(palabras[elem]);
            }
    }

iteration();


/*Funcion randomizadora...
function random (array)
    {
        console.log(palabras.array[Math.round(Math.random()*palabras.array.length)])
    }

let elementos;
*/