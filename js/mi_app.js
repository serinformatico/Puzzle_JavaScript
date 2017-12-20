
	$(document).ready(function(){
    crearFiltros();
    inicializarSlider();
		$("#btnMostrarTodos").click(function(){
			mostrarElementosTodos();
		});
    $("#submitButton").click(function(){
      filtrarElementos();
    });
	});



  function crearFiltros(){
    $.ajax({url: "data-1.json", success: function(datos){
      var seleccion1 = "";
      var seleccion2 = "";
        $.each(datos, function(indice, elemento){
            if (seleccion1.length <= 0 || seleccion1.indexOf(elemento.Ciudad) == -1) {
              seleccion1 += elemento.Ciudad;
              var resultado1 = '<option value="'+elemento.Ciudad+'">'+elemento.Ciudad+'</option>';
              $("#selectCiudad").append(resultado1);
            }
            if (seleccion2.length <= 0 || seleccion2.indexOf(elemento.Tipo) == -1) {
              seleccion2 += elemento.Tipo;
              var resultado2 = '<option value="'+elemento.Tipo+'">'+elemento.Tipo+'</option>';
              $("#selectTipo").append(resultado2);
            }
      });
    }});    
  }


  function filtrarElementos(){
    var filtroCiudad = $("#selectCiudad").val();
    var filtroTipo = $("#selectTipo").val();
    var filtroPrecioMin = $("#rangoPrecio").val().substring(0, $("#rangoPrecio").val().indexOf(';'));
    var filtroPrecioMax = $("#rangoPrecio").val().substring($("#rangoPrecio").val().indexOf(';')+1, $("#rangoPrecio").val().length);

    $("#elementosEncontrados").empty();
    $.ajax({url: "data-1.json", success: function(datos){
      $.each(datos, function(indice, elemento){

          var precioFloat = parseFloat(elemento.Precio.substring(1, elemento.Precio.length).replace(",", "."));
          if(elemento.Ciudad == filtroCiudad && elemento.Tipo == filtroTipo){
            if(precioFloat>=filtroPrecioMin && precioFloat<=filtroPrecioMax){
              var resultado = '';
              resultado += '<div id="elemento'+elemento.Id+'" class="itemContenido card">';
              resultado +=  '<div class="col s4">';
              resultado +=    '<img src="img/home.jpg" class="col s12">';
              resultado +=  '</div>';
              resultado +=  '<div class="col s8">';
              resultado +=    '<sapn class="card-content"><b>Direccion:</b> '+elemento.Direccion+'</span><br>';
              resultado +=    '<sapn class="card-content"><b>Ciudad:</b> '+elemento.Ciudad+'</span><br>';
              resultado +=    '<sapn class="card-content"><b>Telefono:</b> '+elemento.Telefono+'</span><br>';
              resultado +=    '<sapn class="card-content"><b>Codigo Postal:</b> '+elemento.Codigo_Postal+'</span><br>';
              resultado +=    '<sapn class="card-content"><b>Tipo:</b> '+elemento.Tipo+'</span><br>';
              resultado +=    '<sapn class="card-content"><b>Precio:</b> '+elemento.Precio+'</span><br>';
              resultado +=  '</div>';
              resultado += '</div>';
              $("#elementosEncontrados").append(resultado);  
            }
          }
      });
    }});  
  }



  function mostrarElementosTodos(){
    $("#elementosEncontrados").empty();
    $.ajax({url: "data-1.json", success: function(datos){
      $.each(datos, function(indice, elemento){
          var resultado = '';
          resultado += '<div id="elemento'+elemento.Id+'" class="itemContenido card">';
          resultado +=  '<div class="col s4">';
          resultado +=    '<img src="img/home.jpg" class="col s12">';
          resultado +=  '</div>';
          resultado +=  '<div class="col s8">';
          resultado +=    '<sapn class="card-content"><b>Direccion:</b> '+elemento.Direccion+'</span><br>';
          resultado +=    '<sapn class="card-content"><b>Ciudad:</b> '+elemento.Ciudad+'</span><br>';
          resultado +=    '<sapn class="card-content"><b>Telefono:</b> '+elemento.Telefono+'</span><br>';
          resultado +=    '<sapn class="card-content"><b>Codigo Postal:</b> '+elemento.Codigo_Postal+'</span><br>';
          resultado +=    '<sapn class="card-content"><b>Tipo:</b> '+elemento.Tipo+'</span><br>';
          resultado +=    '<sapn class="card-content"><b>Precio:</b> '+elemento.Precio+'</span><br>';
          resultado +=  '</div>';
          resultado += '</div>';
          $("#elementosEncontrados").append(resultado);
      });
      //Reseteo Cajas Select
      $("#selectCiudad").val(null);
      $("#selectTipo").val(null);
    }});    
  }


  //En esta función realice una modificación debido a que el rango de valores era demasiado alto en realación
  //  preciolaoss de las propiedades(casas) especificados en el archivo data-1.json
  function inicializarSlider(){
    $("#rangoPrecio").ionRangeSlider({
      type: "float",
      grid: false,
      min: 0,
      max: 100,
      from: 20,
      to: 80,
      prefix: "$"
    });
  }