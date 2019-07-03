var checkbox = document.querySelector('input[name=theme]'); 

checkbox.addEventListener('change',function () {
    if(this.checked){

        document.documentElement.setAttribute('data-theme','dark');
        document.getElementById("titulo").innerHTML = "Modo oscuro";
    }else{

        document.documentElement.setAttribute('data-theme','light'); 
        document.getElementById("titulo").innerHTML = "Modo normal";
    }
});
let transi =()=>{
    document.documentElement.classList.add('transition');
    window.setTimeout(()=>{
    document.documentElement.classList.remove('tranisition');
    });
}