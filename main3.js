//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const palabras =
   [ {
        //test:'test1',
        ['Tu', 'tu pareja', 'tu familia', 'tu mascota'],
        ['conseguira', 'perdera', 'tendra','robara'],
        ['un empleo', 'un carro', 'un diente', 'una casa'],
        /*start()
            {
                for (let array in palabras)
                    {
                        console.log(palabras[1])
                        console.log(palabras.sujetos);
                        console.log(palabras.sujetos[0]);
                        //POR CADA ELEMENTO:
                        console.log(array);
                        console.log(palabras.array);
                        console.log(palabras.sujetos[0]);
                        //random(elemento);
                    }
            }*/
        /*random(array)
            {
                console.log(this.array[Math.round(Math.random()*this.array.length)])
            }*/
    }]


function start()
{
    for (let array of palabras)
        {
          console.log(palabras);
          console.log(array);
          console.log(palabras.array);
        }
}

//start();

console.log(palabras.forEach(array=> array));

//Funcion randomizadora...
/*function random (array)
    {
        //console.log(palabras.array[Math.round(Math.random()*palabras.array.length)])
    }

start ();
//random(palabras.sujetos);
//palabras.sujetos[0];


funcion frase (sujeto, verbo, objeto)
    {
        random(palabras.)
        console.log(sujeto+verbo+objeto)  
    }
*/