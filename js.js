function importe(url){
	  var script = document.createElement('script');
	  var parentScript = document.getElementById('myscript');
	  parentScript = parentScript.src;
	  parentScript = parentScript.split('/');
	  parentScript.pop();
	  parentScript = parentScript.join();
	  parentScript = parentScript.replace(/,/gi, '/');
	  script.src = parentScript+url;
	  var body = document.body;
	  body.appendChild(script);
}

importe('/numero.js');

function Export2Doc(){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title><style> p{ font-size: 16px, align='justify'}</style></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById("exportContent").innerHTML+postHtml;

    var blob = new Blob(['ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
	var filename = document.getElementById("propietario").value+ "-"+ document.getElementById("inquilino").value
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}

function verificador(id)
{
	var canPrint = 0;
    var formulariop = document.getElementById(id);
    for (var i=0;i<formulariop.elements.length;i++)
    {
        if (formulariop.elements[i].name=="requerido")
        {
			if(Isempty(formulariop.elements[i].value))
			{
				console.log(formulariop.elements[i].id +" no puede estar vacio")
				return;
			}
			canPrint ++;
        }
    }  
	
	if(canPrint=>10){
		Export2Doc()
	}
	
	
}

function Isempty(str)
{
    if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
    {
        return true;
    }
    else
    {
        return false;
    }
}

function imprimir(){
	event.preventDefault(); //Evita que se recargue la pagina
	 
	llenarDatos();
	var ficha = document.getElementById("exportContent");
	var ventimp = window.open(' ', 'popimpr');
	ventimp.document.write( ficha.innerHTML );
	ventimp.document.close();
	ventimp.print( );
	ventimp.close();

}

function imprimirE(){
	//event.preventDefault(); //Evita que se recargue la pagina
	 
	llenarDatos();
	var propietarioCheck = document.getElementById("propietarioCheck").checked;
	var propietario = document.getElementById("propietario").value;
	var propietarioCedula = document.getElementById("propietarioCedula").value;
	var propietarioDireccion = document.getElementById("propietarioDireccion").value;
	
	var inquilino = document.getElementById("inquilino").value;
	var inquilinoCedula = document.getElementById("inquilinoCedula").value;
	var inquilinoDireccion = document.getElementById("inquilinoDireccion").value;
	
	var garante = document.getElementById("garante").value;
	var garanteCedula = document.getElementById("garanteCedula").value;
	
	var direccion = document.getElementById("direccion").value;
	var mensualidad = document.getElementById("mensualidad").value;
	var deposito = document.getElementById("deposito").value;
	var fecha = document.getElementById("fecha").valueAsDate;
	
	var garanteCheck = document.getElementById("garanteCheck").checked;
	 var contenido= document.getElementById("exportContent").innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     window.print();

     document.body.innerHTML = contenidoOriginal;
	 
	document.getElementById("propietarioCheck").checked = propietarioCheck;
	document.getElementById("propietario").value = propietario;
	document.getElementById("propietarioCedula").value = propietarioCedula;
	document.getElementById("propietarioDireccion").value = propietarioDireccion;
	
	document.getElementById("inquilino").value = inquilino;
	document.getElementById("inquilinoCedula").value = inquilinoCedula;
	document.getElementById("inquilinoDireccion").value = inquilinoDireccion;
	
	document.getElementById("garante").value = garante;
	document.getElementById("garanteCedula").value = garanteCedula;
	
	document.getElementById("direccion").value = direccion;
	document.getElementById("mensualidad").value = mensualidad;
	document.getElementById("deposito").value = deposito;
	document.getElementById("fecha").valueAsDate = fecha;
	
	document.getElementById("garanteCheck").checked = garanteCheck; 



}
function llenarDatos(){
	const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })
	var propietarioCheck = document.getElementById("propietarioCheck").checked;
	var propietario = document.getElementById("propietario").value;
	var propietarioCedula = document.getElementById("propietarioCedula").value;
	var propietarioDireccion = document.getElementById("propietarioDireccion").value;
	
	//var inquilinoCheck = document.getElementById("inquilinoCheck").checked;
	var inquilino = document.getElementById("inquilino").value;
	var inquilinoCedula = document.getElementById("inquilinoCedula").value;
	var inquilinoDireccion = document.getElementById("inquilinoDireccion").value;
	
	var garante = document.getElementById("garante").value;
	var garanteCedula = document.getElementById("garanteCedula").value;
	
	var direccion = document.getElementById("direccion").value;
	var mensualidad = document.getElementById("mensualidad").value;
	var deposito = document.getElementById("deposito").value;
	var fecha = document.getElementById("fecha").valueAsDate;
	
	var garanteCheck = document.getElementById("garanteCheck").checked;
	
	if(propietarioCheck==true){	
	document.getElementById("p_entre").innerHTML = "Entre los que suscriben la señora <strong>"+propietario+"</strong>, mayor de edad, dominicana, cedula de identidad y electoral <strong> No. "+propietarioCedula+
	"</strong>, domiciliada y residente en "+propietarioDireccion +", quien para los fines del presente "+
	"contrato se llamara <strong>LA PROPIETARIA</strong>, y de la otra parte,<strong> "+inquilino+"</strong>, dominicano/a, mayor de edad, "+
	"cédula de identidad y electoral <strong>No."+inquilinoCedula+"</strong>, residente en "+inquilinoDireccion+
	", quien en lo adelante se denominará <strong>EL/LA INQUILINO/A.</strong>";
	}
	else{
    document.getElementById("p_entre").innerHTML = "Entre los que suscriben el señor <strong>"+propietario+"</strong>, mayor de edad, dominicano, cedula de identidad y electoral <strong>No. "+propietarioCedula+
	"</strong>, domiciliado y residente en "+propietarioDireccion +", quien para los fines del presente "+
	"contrato se llamara <strong>EL PROPIETARIO</strong>, y de la otra parte, "+inquilino+", dominicano/a, mayor de edad, "+
	"cédula de identidad y electoral <strong>No."+inquilinoCedula+"</strong>, residente en "+inquilinoDireccion+
	", quien en lo adelante se denominará<strong> EL/LA INQUILINO/A.</strong>";
	}
	
	document.getElementById("p_primero").innerHTML = "<strong>PRIMERO: EL PROPIETARIO</strong> por el presente acto da en alquiler a <strong> EL/LA INQUILINA/O</strong> ,"+ 
	"quien acepta conforme la casa ubicado en "+direccion+", que está en perfecto estado, que ha sido vista examinado y encontrado a su entera satisfacción"+ 
	"por <strong> EL/LA INQUILINA/O</strong> , quien lo usará única y exclusivamente para fines de negocio, no pudiendo dedicarlo a otros usos, ni cederlo, ni sub-alquilarlo "+
	"ni en toda ni en parte, sin el consentimiento escrito de <strong> EL/LA PROPIETARIO/A.</strong> ";
			
	document.getElementById("p_sexto").innerHTML ="<strong>SEXTO: LA/EL INQUILINA/O</strong> se obliga a pagar por concepto de alquiler  mensual la suma de <strong>" +
	numeroALetras(mensualidad)+ " PESOS DOMINICANOS ("+formatter.format(mensualidad)
	+")</strong>, se obliga a pagar una vez al mes, a partir de la fecha  de este contrato en el domicilio de <strong>LA/EL PROPIETARIA/O.</strong>";

	document.getElementById("p_septimo").innerHTML ="<strong>SEPTIMO: LA/EL INQUILINA/O </strong>entrega a <strong>LA/EL PROPIETARIA/O</strong> la suma de <strong>"+ 
	numeroALetras((mensualidad*deposito))+" PESOS DOMINICANOS ("+formatter.format(mensualidad*deposito)+")</strong> moneda de curso legal. Por concepto de ("+deposito
	+") depósitos. Dicho depósito no podrá ser computarizado por ningún concepto de mensualidad.";
		
	if(garanteCheck==true){
		document.getElementById("garante_div").style.display = 'block';
		document.getElementById("firmasGarante").style.display = 'block';
		document.getElementById("p_noveno").innerHTML ="<strong>NOVENO: EL/LA INQUILINA/O </strong> no podrá pretender en ningún momento mientras ocupe la "
		+"casa, aplicar el depósito al pago de los alquileres vencidos. Tiene como Garante al Señor/a "+garante+" con cédula de identidad y electoral No."+garanteCedula+"."
	}
	else{
		document.getElementById("garante_div").style.display = 'none';
		document.getElementById("firmasGarante").style.display = 'none';
		document.getElementById("p_noveno").innerHTML ="<strong>NOVENO: EL/LA INQUILINA/O </strong> no podrá pretender en ningún momento mientras ocupe la "
		+"casa, aplicar el depósito al pago de los alquileres vencidos."
	}
	
	document.getElementById("propietarioFirma").innerHTML = propietario
	document.getElementById("inquilinoFirma").innerHTML = inquilino
	document.getElementById("garanteFirma").innerHTML = garante
	
	try{
		document.getElementById("p_hecho").innerHTML ="<strong>HECHO, REDACTADO Y FIRMADO,</strong> de Buena Fe, en dos originales de un mismo tenor y efecto, uno para cada "+
		"una de las partes contratantes, en la ciudad de Santo Domingo Norte, República Dominicana, a los " + numeroALetras(fecha.getDate()+1)+" ("+(fecha.getDate()+1)+") dias del mes de "+
		numerosAMeses(fecha.getMonth()+1) + " del año " + numeroALetras(fecha.getFullYear()) +" ("+fecha.getFullYear()+")."
		
		document.getElementById("p_notario").innerHTML ="Yo, Dra. MILAGROS JIMENEZ A., abogada Notaria Publica de los del número del DISTRITO NACIONAL, matricula: 2649, " +
		"CERTIFICO Y DOY FE: que las firmas que parecen en el presente contrato fueron puestas en mi presencia, libre y voluntariamente por los señores"+
		" descritos anteriormente, de generales que constan, y quienes me han declaro bajo juramento que estas son las mismas me acostumbran a "+
		"usar en todos sus actos públicos y privados, dado en la ciudad de Santo Domingo Este, "+
		"capital de la República Dominicana, a los " + numeroALetras(fecha.getDate()+1)+" ("+(fecha.getDate()+1)+") dias del mes de "+
		numerosAMeses(fecha.getMonth()+1) + " del año " + numeroALetras(fecha.getFullYear()) +" ("+fecha.getFullYear()+")."
	}catch{
		console.log("Error de la fecha")
	}
	
}


$(document).ready(function(){
	document.getElementById("garante_div").style.display = 'none';
	$('html, body').animate({scrollTop:0}, 'slow');
	$("#formulario :input").change(function(){
    		llenarDatos();
	});
	

 
});