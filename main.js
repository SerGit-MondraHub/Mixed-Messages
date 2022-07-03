//BIENVENIDO A LAS GALLETAS DE LA FORTUNA DE SERGIO:

//Objeto que contiene palabras para armar la frase...
const palabras =
    {
        sujetos:['Tú ', 'tu pareja ', 'tu familia ', 'tu mascota ', 'tu amig@ '],
        verbos:['comprara', 'perdera', 'robara', 'quemara', 'vendera','cambiara'],
        objetos:[' empleo', ' un carro', ' un diente', ' sexo', ' una casa', ' dinero', ' un(a) amante'],
    }

let frase=[]//ARRAY QUE CONTENDRA LAS 3 PALABRAS

//Funcion randomizadora...
function random (array)
    {
        let word;
        word= (array[Math.floor(Math.random()*array.length)]);
        /*if(word===Tú)
            {frase.push(word)}
        else
            {frase.push(word)}*/
        frase.push(word);
    }

//Funcion de iteracion...
function iteration()   
    {
        for(let elem in palabras)
            {
                //console.log(palabras[elem]);
                random(palabras[elem]);
            }
        if(frase[0]==='Tú ')//CONJUGACION DE VERBOS PARA "Tú"
            {
                frase.splice(2,0,'s');
                console.log(frase.join(""));//MENSAJE FINAL CON "Tú"
            }    
        else    
            {console.log(frase.join(""));}//MENSAJE FINAL SIN CONJUGACION
    }

iteration();


