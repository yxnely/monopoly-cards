const url = "https://raw.githubusercontent.com/daviscodesbugs/gamepiece-json/master/games/monopoly/monopoly.json"

const cardVue = new Vue({
	el: '#app',
	data: {
		cards: [],
	},
	created: function () {
		this.getCards()
	},
	methods: {
		getCards() {
			const app = this;

			fetch(url)
				.then(function(res) {
					return res.json();
				})
				.then(function(res) {
					app.cards = res.pieces.properties[0].values;
				})
		}
	}
});