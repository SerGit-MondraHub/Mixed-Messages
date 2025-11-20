//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const palabras =
    {
        sujetos:['Tú ', 'Tu pareja ', 'Tu familia ', 'Tu mascota ', 'Tu amig@ ','Tu jefe'],
        verbos:['comprará', 'perderá', 'robará', 'olvidará', 'venderá','cambiará','encontrará'],
        objetos:[' empleo', ' un carro', ' un diente', ' un gato', ' una casa', ' dinero', ' un(a) amante',],
    }

let frase=[]//ARRAY QUE CONTENDRA LAS 3 PALABRAS

//Funcion randomizadora...
function random (array)
    {
        let word;
        word= (array[Math.floor(Math.random()*array.length)]);
        frase.push(word);
    }

//Funcion de iteracion...
function iteration()   
    {
        let galleta;
        for(let elem in palabras)
            {
                //console.log(palabras[elem]);
                random(palabras[elem]);
            }
        if(frase[0]==='Tú ')//CONJUGACION DE VERBOS PARA "Tú"
            {
                frase.splice(2,0,'s');
                galleta= frase.join("");//FRASE FINAL CON "Tú"
            }    
        else    
            {galleta= frase.join("");}//FRASE FINAL SIN CONJUGACION
        console.log(`Tu galleta de la suerte dice: "${galleta}"`);//MENSAJE COMPUESTO
    }

iteration();


