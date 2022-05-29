class Display {
	constructor(displayAnterior, displayActual) {
		this.displayActual = displayActual;
		this.displayAnterior = displayAnterior;
		this.calculador = new Calculator();
		this.kindofOP = undefined;
		this.valorActual = '';
		this.valorAnterior = '';
		this.signos = {
			sumar: '+',
			restar: '-',
			dividir: '÷',
			multi: 'x',
			sumar_binarios: '+',
			restar_binarios: '-'
		}
	}
	addNumber(num){
		if(num === '.' && this.valorActual.includes('.')) return
		this.valorActual = this.valorActual.toString() + num.toString();
		this.printVal();
	}

	printVal(){
		console.log(this.valorAnterior);
		this.displayActual.textContent = this.valorActual;
		this.displayAnterior.textContent = `${this.valorAnterior} ${this.signos[this.kindofOP] || ''}`;
	}

	remove(){
		this.valorActual = this.valorActual.toString().slice(0,-1);
		this.printVal();
	}

	removeAll(){
		this.valorActual = '';
		this.valorAnterior = '';
		this.kindofOP = undefined;
		this.printVal();
	}

	calcular(){
		const valorAnterior = parseFloat(this.valorAnterior);
		const valorActual = parseFloat(this.valorActual);

		if(isNaN(valorActual) || isNaN(valorAnterior)) return	
		this.valorActual = this.calculador[this.kindofOP](valorAnterior, valorActual);
	}
	computar(type){
		this.kindofOP !== 'igual' && this.calcular();
		this.kindofOP = type;
		if(binary){
			if(type == "multi" || type == "dividir") return;
			if(this.kindofOP == "sumar") this.kindofOP = "sumar_binarios";
			if(this.kindofOP == "restar") this.kindofOP = "restar_binarios";
		}
		this.valorAnterior = this.valorActual.toString() || this.valorAnterior;
		this.valorActual = '';
		this.printVal();
	}

}
