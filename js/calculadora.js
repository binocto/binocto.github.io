class Calculator {
	sumar(num1, num2) {
		return num1 + num2;
	}
	restar(num1, num2) {
		return num1 - num2;

	}
	multi(num1, num2) {
		return num1 * num2;
	}
	dividir(num1, num2) {
		return num1 / num2;
	}
	restar_binarios(b1,b2){
		if(b1 != b2){
			var numerob1 = b1.toString();
			var numerob2 = b2.toString();
			var principal = (numerob1.length>numerob2.length || numerob1.length==numerob2.length) ? b1 : b2;
			var secundario = (numerob1.length<numerob2.length) ? b1 : b2;
			var minuendo = principal.toString();
			var sustraendo = secundario.toString();
			var sustraendo_inicial = '1';
			var invertir_minuendo = [];
			var minuendo_suma_final = [];
			var invertir_minuendo_suma_final = [];
			var minuendo_final = '';
			for(var i = 0; i < minuendo.length; i++){
				invertir_minuendo[i] = (minuendo[i] == 0) ? 1 : 0;
			}
			var primera_suma = this.sumar_binarios(invertir_minuendo.join(""),sustraendo_inicial);
			var seg_suma_binarios = this.sumar_binarios(primera_suma,sustraendo);
			minuendo_suma_final = seg_suma_binarios.split("");
			for(var j = 0; j < minuendo_suma_final.length; j++){
				invertir_minuendo_suma_final[j] = (minuendo_suma_final[j] == 0) ? 1 : 0;
			}
			var resta_final = this.sumar_binarios(invertir_minuendo_suma_final.join(""),sustraendo_inicial);
			$(".restadec").val(this.convertir_binario(resta_final));
			return resta_final;
		} else {
			$(".restadec").val(0);
			return 0;
		}

	}

	sumar_binarios(b1,b2){

		var numerob1 = b1.toString();
		var numerob2 = b2.toString();
		var principal = (numerob1.length>numerob2.length || numerob1.length==numerob2.length) ? b1 : b2;
		var secundario = (numerob1.length<numerob2.length) ? b1 : b2;
		var minuendo = principal.toString();
		var sustraendo = secundario.toString();
		var lleva = 0;
		var resultado_arreglo = [];
		var array_sus = [];
		var pos;

		for (var i = 0; i < minuendo.length; i++) {
			array_sus.push(sustraendo[i]);
			if(array_sus[i] === undefined){
				array_sus.unshift('');
				array_sus.pop();
			}
		}
		
		var array = [...minuendo];
		for (var i = minuendo.length - 1; i >= 0; i--) {
			if(minuendo[i] == lleva){
				array[i] = 0;
			} else {
				array[i] = 1;
				lleva = 0;
			}
			if(array[i] != array_sus[i]){
				resultado_arreglo[i] = 1;
			} else if(array[i] == array_sus[i] && array[i] != 1 && array_sus[i] != 1){
				resultado_arreglo[i] = 0;
			} else if(array[i] == array_sus[i] && array[i] == 1 && array_sus[i] == 1){
				lleva = 1;
				resultado_arreglo[i] = 0;
			}
			if(i == 0 && lleva == 1){
				resultado_arreglo.unshift(1);
			}
		};

		var resultado_suma_binario = '';
		for(var a = 0; a < resultado_arreglo.length; a++){
			resultado_suma_binario+=resultado_arreglo[a];
		}
		$(".ressumadec").val(this.convertir_binario(resultado_suma_binario));
		return resultado_suma_binario;
	}
	convertir_binario(valor){
		var array = [];
		var numeros = valor.split("");
		var entero = 0;
		var contador = 0;
		for(var i = numeros.length-1; i>=0;i--){
			if(numeros[i] == 0){
				array[i] = 0;
			}
			else{
				array[i] = Math.pow(2,contador);
			}
			contador++;
		}
		for(var a = 0; a < array.length; a++){
			entero += array[a];
		}
		return entero;
	}

}
