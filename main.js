// onload = function(){
//     // Forma Antigua de Realizar Eventos JS After Load Page
//     // Se demora en cargar Milisegundos
//     document.body.innerHTML = "<h1>Deloriam System Solutions</h1>"
// }
// onload = ()=>{
//     // Forma Antigua de Realizar Eventos JS After Load Page
//     // Se demora en cargar Milisegundos
//     document.body.innerHTML = "<h1>Deloriam System Solutions</h1>"
// }


//// Forma Actual de JS Para realizar eventos de escucha JS
//// Forma Standart
// addEventListener("load", function(){
//     document.body.innerHTML = "<h1>Deloriam System Solutions :V</h1>"
// });
// // Funcion Flecha
// addEventListener("load", ()=>{
//     document.body.innerHTML = "<h1>Deloriam System Solutions :V</h1>"
// });

addEventListener("DOMContentLoaded", function(e){
    

    /***  1era Manera (Control Styles En Objetos RECOMENDADA)  ***/
        // let myStyle ={
        //     "background-color" : "red",
        //     "color" : "white"
        // }
    
        // Object.assign(document.body.style, myStyle);
    
      // Acualizacion de estilo por medio de objetos
    
        // var {color, ...myStyleUpdate} = myStyle; // Remueve un atributo o elemento de mi objeto
        // Object.assign(document.body.style, myStyleUpdate);

    /***  2 Manera (Style Extenso Aplicacion)  ***/

        // document.body.style.backgroundColor = "Red";
        // document.body.style.color = "white";

    /***  3 Manera (Add Style Formato de texto (CSS))  ***/
    
        // document.body.style.cssText = `
        //     background-color : red;
        //     color : white;`

    /***  4 Manera (Add Style for Atributes to Selector of etiqueta | Maneja especifidad (CSS))  ***/

        // let id = document.querySelector('body');
        // id.setAttribute("style", "background-color: orange; color: white;");

    /***  5 Manera (Add Style Incrustando un elemtno del DOM )  ***/

        let background_color = 'red';
        let color_text = 'white';

        let myTag = document.createElement('STYLE'); // en Mayuscula preferiblemente para crear la etiqueta mas rapida
        let MyStyle = document.createTextNode(`
            body{
                background-color: ${background_color};
                color: ${color_text};
            }
        `);
        
        myTag.appendChild(MyStyle);         
        // document.head.append(myTag);

        console.log(myTag)
        console.log(MyStyle)
});
    // Funcion Flecha
// addEventListener("DOMContentLoaded", (e)=>{
//     document.body.innerHTML = "<h1>Deloriam System Solutions :L</h1>"
// });


