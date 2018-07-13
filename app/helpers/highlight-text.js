import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function highlightText(params/*, hash*/) {
	let name = params[0];
	let search = params[1];

	let regex = new RegExp(search, 'ig');
	
	if (search)
		return htmlSafe(name.replace(regex, function(string) {
			return '<mark>' + string + '</mark>';
		}));
	else
		return name;

}

export default helper(highlightText);

//LOLviktigcodelol
