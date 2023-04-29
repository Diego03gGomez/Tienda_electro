let array_productos =[
{nombre: "Audifonos", precio:"$9.00", imagen:"/imagenes/audifonos.webp", categoria:"celulares"   },
{nombre: "Auriculares", precio: "$15.00", imagen:"/imagenes/auriculares.webp" , categoria:"pc"   },
{nombre: "Cargador", precio: "$5.00", imagen:"/imagenes/cargador.webp", categoria: "celulares"},
{nombre: "DroSafe Charger", precio: "$55.00", imagen:"/imagenes/celular_tapa.webp", categoria:"celulares"},
{nombre: "Ipad Pro", precio: "$499.00", imagen:"/imagenes/ipad.webp", categoria:"tablets"},
{nombre: "¡Phone 7", precio: "$200.00", imagen:"/imagenes/iphone.webp", categoria:"celulares"},
{nombre: "Laptod", precio: "$800.00", imagen:"/imagenes/laptod.webp", categoria: "pc"},
{nombre: "Pc Gamer", precio: "$1.200.00", imagen:"/imagenes/pc_gamer.webp", categoria:"pc"},
{nombre: "Smarphone", precio: "155.00", imagen:"/imagenes/smarphone.webp", categoria:"celulares"},
{nombre: "U Pad Pro", precio: "305.00", imagen:"/imagenes/tablet_grande.webp", categoria:"tablets"},
]



let celulares=$.grep(array_productos, function (value) { 
     return value.categoria == "celulares"
});



let computadoras=$.grep(array_productos, function (value) { 
    return value.categoria == "pc" 
});



$(document).ready(function () {
    

     $(".contenedor_carrito").hide();

/* MOSTRANNDO LOS ELEMENTOS DE LOS OBJETOS*/


$.each(celulares, function (i, c) { 
    let $card = $(`
    <div class="card">
    <div class= "img_producto">
    <img src=${c.imagen}>
    <div  class="texto"> 
<a href="">  <i class="fa-solid fa-bag-shopping carrito"></i> </a>   
<a href=""><i class="fa-regular fa-heart"></i></a>
</div>
    </div>
    <h3>${c.nombre}</h3>
    <h3  class="rojo"  > ${c.precio}</h3>
    </div>
    `) ;


$(".contenedor_celulares").append($card);

});




$.each(computadoras, function (i, pc) { 
    let $card = $(`
    <div class="card">
    <div class= "img_producto">
    <img src=${pc.imagen}>
    <div  class="texto"> 
<a >  <i class="fa-solid fa-bag-shopping carrito"></i> </a>   
<a href="#"><i class="fa-regular fa-heart"></i></a>
</div>
    </div>
    <h3>${pc.nombre}</h3>
    <h3  class="rojo"  > ${pc.precio}</h3>
    </div>
    `) ;

    $(".contenedor_pc").append($card);







});


$.each(array_productos, function (i,E) { 
     
let $card = $(`
<div class="card">
<div class= "img_producto">
<img src=${E.imagen}>
<div  class="texto"> 
<a href="">  <i class="fa-solid fa-bag-shopping carrito"></i> </a>   
<a href=""><i class="fa-regular fa-heart"></i></a>
</div>
</div>
<h3>${E.nombre}</h3>
<h3  class="rojo"  > ${E.precio}</h3>
</div>
`) ;


$(".contenedor_products").append($card);



});

$(".carrito").click(function (e) { 
    e.preventDefault();
let $nombre_producto = $(this).parent().parent().parent().parent().find("h3").eq(0).text();
let $precio_producto = $(this).parent().parent().parent().parent().find(".rojo").text();
let $imagen_producto = $(this).parent().parent().parent().parent().find("img").attr("src");

$(".contenedor_carrito").append($(`
<div class="p_comprado">
<div class="img_p_comprado">
    <img src=${$imagen_producto} alt="">
</div>
<div class="precio_p">
    <h4>${$nombre_producto}</h4>
    <h3>${$precio_producto}</h3>
    <a class="eliminar_p"   href="#">Eliminar</a>
</div>
    </div>


`));

$(".eliminar_p").click(function (e) { 
    e.preventDefault();
    
$(this).parent().parent().hide();


});





});










$(".texto").hide();


$(".img_producto").hover(function () {
        // over
        $(this).find(".texto").fadeIn(500);

    }, function () {
        // out
        $(this).find(".texto").fadeOut(500);

    }
);
/* MOSTRANNDO LOS ELEMENTOS DE LOS OBJETOS*/






























/* CODIGO JS PARA LOS FILTROS*/

$(".contenedor_pc").hide();
$(".contenedor_celulares").hide();

$("#boton_celulares").click(function (e) { 
    e.preventDefault();


$(".filtros").find("a").find("h4").removeClass("rojo");
$(this).find("h4").addClass("rojo");


    $(".contenedor_products").fadeOut(100);
    $(".contenedor_pc").fadeOut(100);
$(".contenedor_celulares").fadeIn(100);   





});


$("#boton_productos").click(function (e) { 
    e.preventDefault();

    $(".filtros").find("a").find("h4").removeClass("rojo");
    $(this).find("h4").addClass("rojo");
    

    $(".contenedor_celulares").fadeOut(100);
    $(".contenedor_pc").fadeOut(100);
$(".contenedor_products").fadeIn(100);   
});


$("#boton_pc").click(function (e) { 
    e.preventDefault();
    $(".filtros").find("a").find("h4").removeClass("rojo");
    $(this).find("h4").addClass("rojo");
    


    $(".contenedor_celulares").fadeOut(100);
    $(".contenedor_products").fadeOut(100);
$(".contenedor_pc").fadeIn(100);   
});
/* CODIGO JS PARA LOS FILTROS*/















/* CODIGO JS PARA OCULTAR O MOSTRAR EL MENU RESPONSIVO*/


$(".icono_menu").click(function (e) { 
    e.preventDefault();
$(".contenedor_oculto").fadeIn(400);
});


$(".equis").click(function (e) { 
    e.preventDefault();

    $(".contenedor_oculto").fadeOut(400);
    
});








/* CODIGO JS PARA EL EFECTO SLIDE DEL CARRITO DE COMPRAS*/


$(".iconos").find("a").eq(2).click(function (e) { 
    e.preventDefault();


    $(".contenedor_carrito").fadeIn();
    
});



$(".equis2").click(function (e) { 
    e.preventDefault();
$(".contenedor_carrito").fadeOut();


    
});













});