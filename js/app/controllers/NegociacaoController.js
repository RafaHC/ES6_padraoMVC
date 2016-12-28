class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._inputData = $('#data');
		this._listaNegociaoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagem'));
		this._mensagemView.update(this._mensagem);
		this._negociacoesView.update(this._listaNegociaoes);

	}

	adiciona(event){
		event.preventDefault();
			
			this._listaNegociaoes.adiciona(this._criaNegociacao());
			this._negociacoesView.update(this._listaNegociaoes);
			this._mensagem.texto = 'Negociacao adicionada com sucesso';
			this._mensagemView.update(this._mensagem);
			this._limpaFormulario();
			console.log(this._listaNegociaoes.negociacoes);
		}


		_criaNegociacao(){
			return new Negociacao(DateHelper.textoParaData(this._inputData.value),
																	this._inputQuantidade.value,this._inputValor.value);
		}

		_limpaFormulario(){
			this._inputQuantidade.value = 1;
			this._inputValor.value = 0.0;
			this._inputData.value = '';

			this._inputData.focus();
			
		}
	}