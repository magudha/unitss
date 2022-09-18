var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;

inputType.value=resultType.value;
function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "meter" && option_to==="kilometer"){
		//this is meter to kilometer formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "meter" && option_to==="feet"){

		//this is meter to feet formula 
		result.value = Number(input.value) * 3.28084;

	}else if(option_from === "meter" && option_to==="inches"){
		//this is meter to inches formula 
		result.value = Number(input.value) * 39.3701;
		//this is metres to metres
	}else if(option_from === "metres" && option_to==="metres"){
		result.value = input.value
	}



	if(option_from === "kilometer" && option_to==="meter"){
		//this is kilometer to meter formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "kilometer" && option_to==="inches"){
		//this is kilometer to inches formula 
		result.value = Number(input.value) * 39270.07874;
	}else if(option_from === "kilometer" && option_to==="feet"){
		//this is kilometer to feet formula 
		result.value = (input.value)*3280.839895
	}else if(option_from === "kilometer" && option_to==="kilometer"){
		//this is kilometer to kilometer formula 
		result.value = input.value
	
	}

	if(option_from === "inches" && option_to==="kilometer"){
		//this is inches to kilometer formula 
		result.value = Number(input.value) * 2.54*10^-5;
	}else if(option_from === "inches" && option_to==="meter"){
		//this is inches to meter formula 
		result.value = Number(input.value) * 0.0254;
	}else if(option_from === "inches" && option_to==="feet"){
		//this is inches to feet formula 
		result.value = (input.value)/12
	}else if(option_from === "inches" && option_to==="inches"){
		//this is inches to inches formula 
		result.value = input.value
	}

	if(option_from === "feet" && option_to==="kilometer"){
		//this is feet to kilometer formula 
		result.value = Number(input.value) * 0.000305;
	}else if(option_from === "feet" && option_to==="meter"){
		//this is feet to meter formula 
		result.value = Number(input.value) * 0.3048;
	}else if(option_from === "feet" && option_to==="inches"){
		//this is feet to inches formula 
		result.value = (input.value)*12
	}else if(option_from === "feet" && option_to==="feet"){
		//this is feet to feet formula 
		result.value = input.value
	}
	
	if(option_from === "celcius" && option_to==="fahrenheit"){
		//this is Celcius to fahrenheit formula 
		result.value = Number(input.value) * 1.8 + 32;
	}else if(option_from === "Celcius" && option_to==="Celcius"){
		//this is Celcius to celcius formula 
		result.value = input.value
	}
	
	if(option_from === "Fahrenheit" && option_to==="celcius"){
		//this is fahrenheit to celcius formula 
		result.value = Number(input.value - 32)*5/9;
	}else if(option_from === "Fahrenheit" && option_to==="Fahrenheit"){
		//this is fahrenheit to fahrenheit formula 
		result.value = input.value
	}
	
	if(option_from === "metresPerSecond" && option_to==="kilometerPerHour"){
		//this is meterPerSecond to kilometerPerHour formula 
		result.value = Number(input.value) * 3.6;
	}else if(option_from === "metresPerSecond" && option_to==="milesPerHour"){
		//this is meterPerSecond to milesPerHour formula 
		result.value = Number(input.value) * 2.237;
	}else if(option_from === "metresPerSecond" && option_to==="metresPerSecond"){
		//this is metresPerSecond to metresPerSecond formula 
		result.value = input.value
	}
	
	if(option_from === "kilometerPerHour" && option_to==="milesPerHour"){
		//this is kilometresperhour to milesperhour formula 
		result.value = Number(input.value) * 0.621371;
	}else if(option_from === "klometerPerHour" && option_to==="metresPerSecond"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 5/18;
	}else if(option_from === "kilometerPerHour" && option_to==="kilometerPerHour"){
		//this is kilometerPerHour to kilometerPerHourr formula 
		result.value = input.value
	}
	
	if(option_from === "milesPerHour" && option_to==="kilometerPerHour"){
		//this is milesperhour to kilometerperhour formula 
		result.value = Number(input.value) * 1.609;
	}else if(option_from === "milesPerHour" && option_to==="meterPerSecond"){
		//this is milesperhour to metrespersecond formula 
		result.value = Number(input.value) * 0.44704;
	}else if(option_from === "milesPerHourer" && option_to==="milesPerHourr"){
		//this is milesperhour to formula  milesperhour
		result.value = input.value
	}
	
	





}
