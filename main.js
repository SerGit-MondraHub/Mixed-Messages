//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const frase =
    {
        sujetos:['Tu', 'tu pareja', 'tu familia', 'tu mascota'],
        verbos:['conseguira', 'perdera', 'tendra','robara'],
        objetos:['un empleo', 'un carro', 'un diente', 'una casa'],
    }

//Funcion randomizadora...
function random (array)
    {
        console.log(array[Math.round(Math.random()*array.length)])
    }

random(frase.sujetos);