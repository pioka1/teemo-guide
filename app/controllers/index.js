import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
	currentChampion: null,
	search: "",
	search_results: Ember.computed('model', 'search', function() {
		let champions = this.get('model');
		let search = this.get('search');

		if (search) {
			let regex = new RegExp(search, 'i');
      		champions = champions.filter(champion => regex.test(champion.name));
		}
		return champions;
	}),
	actions: {
		clickChamp(champion) {
			this.set('currentChampion', champion)
		}
	}
});
