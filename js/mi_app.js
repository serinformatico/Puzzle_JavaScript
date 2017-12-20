
	$(document).ready(function(){
    crearFiltros();
    inicializarSlider();
		$("#btnMostrarTodos").click(function(){
			mostrarElementos();
		});
    $("#selectCiudad").change(function(){
      filtrarElementos($("#selectCiudad").val(), $("#selectTipo").val());
    });
    $("#selectTipo").change(function(){
      filtrarElementos($("#selectCiudad").val(), $("#selectTipo").val());
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

  function filtrarElementos(filtro1, filtro2){
    alert(filtro1+filtro2);
  
  }


  function mostrarElementos(filtro1, filtro2){
    $.ajax({url: "data-1.json", success: function(datos){
      $.each(datos, function(indice, elemento){
          var resultado = '';
          resultado += '<div id="elemento'+elemento.Id+'" class="tituloContenido card">';
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
      $("#selectCiudad").val(null);
      $("#selectTipo").val(null);
    }});    
  }

  function inicializarSlider(){
    $("#rangoPrecio").ionRangeSlider({
      type: "double",
      grid: false,
      min: 0,
      max: 100000,
      from: 200,
      to: 80000,
      prefix: "$"
    });
  }