document.getElementById("crearTarea").addEventListener("click", nuevaTarea);
document.getElementById("vaciar").addEventListener("click", estasSeguro);
document.getElementById("aceptar").addEventListener("click", vaciarLista);
document.getElementById("rechazar").addEventListener("click", rechazo);
document.getElementById("filtro1").addEventListener("click", filtro1);
document.getElementById("mostrarTodo").addEventListener("click", mostrarTareas);

export class Task{
    
    name;
    description;
    status;
    priority;

    constructor(name, description, status, priority) {
        this.name= name;
        this.description= description;
        this.status= status;
        this.priority= priority;
    }
}

const tasks:Task[] = [
    new Task("TODO Task 1", "Example task", "todo", 0),
    new Task("TODO Task 2", "Example task", "todo", 0),
    new Task("TODO Task 3", "Example task", "todo", 0),
    new Task("TODO Task 4", "Example task 2", "done", 1)
];

for(let i = 0; i < tasks.length; i++) {

    const nombre = tasks[i].name;
    const prioridad = tasks[i].priority;
    const estado = tasks[i].status;

    const tareaClonar = document.getElementById("clonar");
    let template = (tareaClonar.cloneNode(true) as HTMLElement);
    template.removeAttribute("id");

    let lista:HTMLElement;
    if(estado==="todo"){
        lista = document.getElementById("listToDo");
    }else if(estado==="doing"){
        lista = document.getElementById("listDoing");
    }else{
        lista = document.getElementById("listDone");
    }
    
    template.getElementsByClassName("uno")[0].innerHTML = nombre;
    template.getElementsByClassName("dos")[0].innerHTML = prioridad;

    lista.appendChild(template);
}

function nuevaTarea(event){
    event.preventDefault();

    const nombre = (document.getElementById("nombre")as HTMLInputElement).value;
    const descripcion = (document.getElementById("descripcion")as HTMLInputElement).value;
    const prioridad = (document.getElementById("prioridad")as HTMLSelectElement).value;
    const estado = (document.getElementById("estado")as HTMLSelectElement).value;
    
    const tareaClonar = document.getElementById("clonar");
    let template = (tareaClonar.cloneNode(true) as HTMLElement);
    template.removeAttribute("id");

    let lista:HTMLElement;
    if(estado==="1"){
        lista = document.getElementById("listToDo");
    }else if(estado==="2"){
        lista = document.getElementById("listDoing");
    }else{
        lista = document.getElementById("listDone");
    }

    
    template.getElementsByClassName("uno")[0].innerHTML = nombre;
    template.getElementsByClassName("dos")[0].innerHTML = prioridad;

    lista.appendChild(template);

}
function vaciarLista(event){

    event.preventDefault();
    const estado = (document.getElementById("comboBorrar")as HTMLSelectElement).value;
    const listaBorrado = document.getElementById("listDeleted");
    let lista:HTMLElement;
    if(estado==="1"){
        lista = document.getElementById("listToDo");
    }else if(estado==="2"){
        lista = document.getElementById("listDoing");
    }else if(estado=="3"){
        lista = document.getElementById("listDone");
    }else{
        lista = document.getElementById("listToDo");
        let lista2 = document.getElementById("listDoing");
        let lista3 = document.getElementById("listDone");

        let child = lista.lastElementChild;

        while(child){
    
            lista.removeChild(child);
            (child as HTMLElement).style.backgroundColor = "rgb(228, 115, 115)";
            listaBorrado.appendChild(child);
            child = lista.lastElementChild;
    
        }
        child = lista2.lastElementChild;
        while(child){
    
            lista2.removeChild(child);
            (child as HTMLElement).style.backgroundColor = "rgb(228, 115, 115)";
            listaBorrado.appendChild(child);
            child = lista2.lastElementChild;
        }
        child = lista3.lastElementChild;
        while(child){
    
            lista3.removeChild(child);
            (child as HTMLElement).style.backgroundColor = "rgb(228, 115, 115)";
            listaBorrado.appendChild(child);
            child = lista3.lastElementChild;
        }

        
    }
    let child = lista.lastElementChild;

    while(child){

        lista.removeChild(child);
        (child as HTMLElement).style.backgroundColor = "rgb(228, 115, 115)";
        listaBorrado.appendChild(child);
        child = lista.lastElementChild;

    }
    event.preventDefault();
    document.getElementById("vaciar").style.visibility = "visible";
    document.getElementById("comboBorrar").style.visibility = "visible";
    (document.getElementsByClassName("oculto")[0] as HTMLButtonElement).style.visibility = "hidden";
    (document.getElementsByClassName("oculto")[1] as HTMLButtonElement).style.visibility = "hidden";
    (document.getElementsByClassName("oculto")[2] as HTMLButtonElement).style.visibility = "hidden";

}

function estasSeguro(event){
    event.preventDefault();
    document.getElementById("vaciar").style.visibility = "hidden";
    document.getElementById("comboBorrar").style.visibility = "hidden";
    (document.getElementsByClassName("oculto")[0] as HTMLButtonElement).style.visibility = "visible";
    (document.getElementsByClassName("oculto")[1] as HTMLButtonElement).style.visibility = "visible";
    (document.getElementsByClassName("oculto")[2] as HTMLButtonElement).style.visibility = "visible";

}

function rechazo(event){

    event.preventDefault();
    document.getElementById("vaciar").style.visibility = "visible";
    document.getElementById("comboBorrar").style.visibility = "visible";
    (document.getElementsByClassName("oculto")[0] as HTMLButtonElement).style.visibility = "hidden";
    (document.getElementsByClassName("oculto")[1] as HTMLButtonElement).style.visibility = "hidden";
    (document.getElementsByClassName("oculto")[2] as HTMLButtonElement).style.visibility = "hidden";

}

function filtro1(event){
    event.preventDefault();

    let lista = document.getElementById("listToDo");
    let lista2 = Array.from(lista.children).sort(function(a,b) {return (parseInt((a as HTMLElement).innerText) > parseInt((b as HTMLElement).innerText)) ? 1 : ((parseInt((b as HTMLElement).innerText) > parseInt((a as HTMLElement).innerText)) ? -1 : 0);} );
    for(let i=0;i<lista.children.length;i++){
       console.log(lista2[i]);
       let child = [...lista2];
        lista.children[i].getElementsByClassName("uno")[0].innerHTML=child[i].getElementsByClassName("uno")[0].innerHTML;
        lista.children[i].getElementsByClassName("dos")[0].innerHTML =child[i].getElementsByClassName("dos")[0].innerHTML;
    }

    
}

function mostrarTareas(event){
    event.preventDefault();
    
    let lista: any = document.getElementsByClassName("tarea");
    let lugar:HTMLElement = document.getElementById("contenedorVaciar");
    console.log(lugar.children);
    lugar.appendChild(lista.children);
    console.log(lugar.children);
}

