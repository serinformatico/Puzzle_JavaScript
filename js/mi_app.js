
	$(document).ready(function(){
		$("#btnMostrarTodos").click(function(){
			mostrarElementos();
		});
	});

	//Funciones:
	function mostrarElementos(){
		$.ajax({url: "data-1.json", success: function(datos){
			$.each(datos, function(indice, elemento){
		        var resultado = '';
		        resultado += '<div id="elemento'+elemento.Id+'" class="tituloContenido card">';
		        resultado += 	'<div class="col s4">';
		        resultado += 		'<img src="img/home.jpg" class="col s12">';
		        resultado += 	'</div>';
		        resultado += 	'<div class="col s8">';
		        resultado += 		'<sapn class="card-content"><b>Direccion:</b> '+elemento.Direccion+'</span><br>';
		        resultado += 		'<sapn class="card-content"><b>Ciudad:</b> '+elemento.Ciudad+'</span><br>';
		        resultado += 		'<sapn class="card-content"><b>Telefono:</b> '+elemento.Telefono+'</span><br>';
		        resultado += 		'<sapn class="card-content"><b>Codigo Postal:</b> '+elemento.Codigo_Postal+'</span><br>';
		        resultado += 		'<sapn class="card-content"><b>Tipo:</b> '+elemento.Tipo+'</span><br>';
		        resultado += 		'<sapn class="card-content"><b>Precio:</b> '+elemento.Precio+'</span><br>';
		        resultado += 	'</div>';
		        resultado += '</div>';
        		$("#elementosEncontrados").append(resultado);
			});
		}});		
	}