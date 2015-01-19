// circleball
{
	var targets = document.getElementsByClassName('circleball');

	for(var i=0; i<targets.length; ++i) {
		for(var j=0; j<5; ++j) {
			var element = document.createElement('div');
			targets[i].appendChild(element);

			var leaf = document.createElement('div');
			leaf.className = 'leaf';
			element.appendChild(leaf);
		}
	}
}