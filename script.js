let data = {
	timeCreated: new Date(),
	secret: 'Very secret message'
}
localStorage.setItem('3rd-party-item', JSON.stringify(data))
localStorage.setItem('outsider-message', 'I was here')
