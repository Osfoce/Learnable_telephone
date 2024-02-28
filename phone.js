class telePhone {
	constructor (){
		this.observers = []
	}


	AddPhoneNumber(number) {
		this.observers.push(number)
	}

	RemovePhoneNumber(number) {
		this.observers = this.observers.filter((f) => {
			return f !== number;
		})
	}


	dailNumber (number){
		console.log(this.notify(number));

	}

	notify (val) {
		this.observers.forEach((observe) => {
		 	observe.update(val)
			})
		
	}

}


class observer {
	update(data) {
		console.log(data)
		console.log('Now dailing', data)
	}
}

const client = new telePhone
const Observer_1 = new observer
const Observer_2 = new observer

client.AddPhoneNumber(Observer_1)
client.AddPhoneNumber(Observer_2)

// client.RemovePhoneNumber(Observer_1)
// client.notify('client 1 removed')
client.dailNumber('08118923819')






















