new Vue({

	el: '#demo',


	data: {

		name: 'Foobar'

	},

	ready: function(){

		var that = this;

		setInterval(function() {
			that.name = 'updated';
		}, 5000);

	}

});