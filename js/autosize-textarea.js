// FOR AUTORESIZING THE TEXTAREA
$('textarea').on('input', function () {
	this.style.height = 'auto';
	this.style.height =(this.scrollHeight) + 'px';
});
