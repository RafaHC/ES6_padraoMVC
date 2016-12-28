class DateHelper{
	// serve para dar new na classe
	constructor(){
		throw new Error('Esta classe não pode ser instanciada')
	}

	static dataParaTexto(data){
		//return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

	}

	// static - consegue invocar o metodo sem intanciar a classe
	static textoParaData(texto){

		//let arr = texto.split('-');
		//let dataMinha = new Date(arr[0], (arr[1] - 1), arr[2]); 
		if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
			throw new Error('Deve estar no formato aaaa/mm/dd');	
		} 
		return new Date(...texto.split('-')
            		.map((item, indice) => item - indice % 2));
	}

}