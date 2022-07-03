//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const palabras =
    {
        sujetos:['Tu', 'tu pareja', 'tu familia', 'tu mascota', 'tu amig@'],
        verbos:['comprara', 'perdera', 'robara', 'quemara', 'vendera','cambiara'],
        objetos:['un empleo', 'un carro', 'un diente', 'sexo', 'una casa', 'dinero', 'un(a) amante'],
    }


//Funcion randomizadora...
function random (array)
    {console.log(array[Math.floor(Math.random()*array.length)])}

//Funcion de iteracion...
function iteration()   
    {
        for(let elem in palabras)
            {
                //console.log(palabras[elem]);
                random(palabras[elem]);
            }
    }

iteration();


