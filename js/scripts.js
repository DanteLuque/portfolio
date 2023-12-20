//MODOS CLARO Y OSCURO
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");

toggleTheme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark"); //metodo toggle (toggle) que funciona como interruptor: si no tiene la clase, se la pone, si la tiene, se la quita
    if(toggleIcon.src.includes("moon.svg")){ //si tiene incluido el icono de la luna, se la cambiamos por el sol
        toggleIcon.src="assets/icons/sun.svg";

    }else{
        toggleIcon.src="assets/icons/moon.svg";
    }
});

/////////////////////
//ASIGNACION DE COLORES
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style; //obteniendo todas las variables de nuestro archivo css

toggleColors.addEventListener("click", (e)=>{
   // console.log(e.target.dataset); comprobando si se está obteniendo los data-colors
   rootStyles.setProperty("--primary-color", e.target.dataset.color); //establecemos que la propiedad "--primary-color" en nuestros estilos, tendrá como valor el dato obtenido por medio del "data-color" cuyo nombre se usa al momento de declarart "e.target.dataset.color"
});


