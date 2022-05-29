const displayAnterior = document.getElementById('val-anterior');
const displayActual = document.getElementById('val-actual');
const number_buttons = document.querySelectorAll('.numero');
const operator_buttons =  document.querySelectorAll('.operador');
const display = new Display(displayAnterior, displayActual);
const b_switch = document.querySelector('#switch'); 
var binary = false;
number_buttons.forEach(buton =>{
	buton.addEventListener('click', ()=>{
		if(binary){
			if(buton.innerHTML == "1" || buton.innerHTML == "0"){
				display.addNumber(buton.innerHTML);
			}	
		} else {
			display.addNumber(buton.innerHTML);
		}
		
	})
})

b_switch.addEventListener('click', ()=>{
		b_switch.classList.toggle('active');
		number_buttons.forEach(buton =>{
			if(!(buton.innerHTML == "1" ||buton.innerHTML == "0")){
				buton.classList.toggle('off');
				binary =!binary;
				display.removeAll();
			} 
		
		})
		operator_buttons.forEach(buton =>{
			if(buton.innerHTML == "x" || buton.innerHTML == "÷"){
				buton.classList.toggle('off');
			}
			
		})

})

operator_buttons.forEach(buton =>{
	buton.addEventListener('click', ()=>{
		display.computar(buton.value);
	})
	
})
