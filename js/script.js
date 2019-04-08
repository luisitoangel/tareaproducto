var pos = 1;
  


function enviar() {
    function Producto(nombre,precio,cantidad,total){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.total=total;
    }
    var nuevonombre = document.getElementById("nombre").value;
    //console.log(nuevonombre);
    var nuevoprecio = document.getElementById("precio").value;
    //console.log(nuevoprecio);
    var nuevacantidad = document.getElementById("cantidad").value;
    //console.log(nuevacantidad);
    var nuevototal = nuevoprecio * nuevacantidad;
    //console.log(nuevototal);
    nuevoProducto = new Producto(nuevonombre,nuevoprecio,nuevacantidad,nuevototal);
    console.log(nuevoProducto); 
    basedatos.push(nuevoProducto);
    agregar();
    borrar();
}
var basedatos= [];

function agregar() {
    var subtotall = 0;  
    var contenido = '';
    for (let i = 0; i < basedatos.length; i++) {
        const element = basedatos[i];
        subtotall += element.total;
        contenido += '<tr><td>' +(i+1)+ '</td><td>'+element.nombre+'</td><td>'+element.precio+'</td><td>'+element.cantidad+'</td><td>'+element.total+'</td><td>'+'<img src="../image/edit.png" width="30px" onclick="editar('+i+')">'+'<img src="../image/icons8-basura-50.png" width="30px" onclick="eliminar('+i+')">'+'</td></tr>';    

    }

    document.getElementsByTagName('tbody')[0].innerHTML = contenido;
    console.log(subtotall);
    document.getElementById("subtotal").value = subtotall;
    var igv = subtotall * 0.18 ;
    document.getElementById("totaligv").value = igv;
    var totaltotal = igv + subtotall;
    document.getElementById("total").value = totaltotal;
};

function editar(i) {
    console.log(i);
    document.getElementById("nombre").value = basedatos[i].nombre;
    document.getElementById("precio").value = basedatos[i].precio;
    document.getElementById("cantidad").value = basedatos[i].cantidad;
    document.getElementById('enviar').innerHTML = '<input type="submit" value="Modificar" class="formulario__submit btn_modificar" onclick="cambiar(' + i + ')">';
    
}
function cambiar(i) {
    function Producto(nombre,precio,cantidad,total){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.total=total;
    }
    var nuevonombre = document.getElementById("nombre").value;
    //console.log(nuevonombre);
    var nuevoprecio = document.getElementById("precio").value;
    //console.log(nuevoprecio);
    var nuevacantidad = document.getElementById("cantidad").value;
    //console.log(nuevacantidad);
    var nuevototal = nuevoprecio * nuevacantidad;
    //console.log(nuevototal);
    nuevoProducto = new Producto(nuevonombre,nuevoprecio,nuevacantidad,nuevototal);
    console.log(nuevoProducto); 
    basedatos[i]= nuevoProducto;
    agregar();
    borrar();
    document.getElementById('enviar').innerHTML = '<input type="submit" class="formulario" onclick="enviar()">';

}

function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
}
function eliminar(i) {
    if (confirm("DESEA ELIMINAR ESTOS DATOS...")) {
        basedatos.splice(i,1);
        agregar();
    }
}