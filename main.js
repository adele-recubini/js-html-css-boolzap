
var app = new Vue({
    el: '#root',
    data: {
    contattoCliccato: 0,
    utenteMsg:'',
    rispostaPc:'ok',
    cerca:'',


contacts: [
	{
		name: 'Michele',
		avatar: '_1',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: '_2',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: '_3',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: '_4',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],

	},
 ]
 },
 methods:{

  cambiaContatto:function(index) {
    this.contattoCliccato = index;
    console.log(this.contattoCliccato);
  },

  addMsg:function(){
    this.contacts[this.contattoCliccato].messages.push({date:'10/01/2020 15:30:55', text:this.utenteMsg, status:'sent'});
    // dopo ogni volta che scrivo qualcosa resetto
    this.utenteMsg='';

  // dopo un secondo qualcuno risponde(il pc ) sempre nella stessa funzione
  // NOTA IMPORTANTE se non avessi l arrow fun non avrebbe funzionato perche non leggeva l oggetto a casua degli scope . se avessi gestito con i let gli oggetti quindi inserire tutte le informazioni nei let avrei potuto gestire il set timeout senza l arrow fun
    setTimeout(()=>{
    this.contacts[this.contattoCliccato].messages.push({date:'10/01/2020 15:30:55', text:this.rispostaPc, status:'received'});

  },1000)


 },

 // quando clicco sull imput cerca utente deve mostrarmi sono l utentecercato, e dove li cerca ? ovviamente nei contact.name e come li vede tutti ? li ciclo con un foreach

 inputSearch:function(){
  this.contacts.forEach((element) => {
    // assegno delle varibaili senno è troppo lungo il codice
    let utente = element.name.toLowerCase();
    let utenteCercato = this.cerca.toLowerCase();
    // se l utente che cerco nel l imput inizia con una lettera dell utente che ho in contacts me lo renderà visibile
    if (utenteCercato.startsWith(utente)) {
       element.visible = true;
       // altrimenti no
    }else {
      element.visible = false;
    }
  });


 }

}
});
