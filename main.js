//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const palabras =
    {
        sujetos:['Tu', 'tu pareja', 'tu familia', 'tu mascota'],
        verbos:['comprara', 'perdera', 'robara'],
        objetos:['un empleo', 'un carro', 'un diente', 'una casa', 'dinero'],
    }

function iteration()   
    {
        for(let elem in palabras)
            {
                console.log(palabras[elem]);
                random(palabras[elem]);
            }
    }

iteration();


//Funcion randomizadora...
function random (array)
    {
        //console.log(array[Math.ceil(Math.random()*array.length)])
        console.log(array.length);
    }

