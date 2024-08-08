
function letterCounter (str) {
	let vowels = [ 'й', 'у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'ю', 'ё']
		str = str.toLowerCase ();
		let cnt = 0;
		for ( let i=0; i<str.length; i++ ) {
			let ltr=str[i];
			if (vowels.indexOf(ltr) !==-1) 
				 cnt++;
			} return cnt;
}
	let userInput = prompt('Введите слово для подсчета гласных букв в слове (русский язык)');
	let showUser = letterCounter(userInput);

	alert(showUser);