App = Ember.Application.create();

$(function() {
    FastClick.attach(document.body);
});

//uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});
//uses body because jquery on events are called off of the element they are
//added to, so bubbling would not work if we used document instead.
$('body').on('touchstart','.scrollable',function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
//prevents preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove','.scrollable',function(e) {
  e.stopPropagation();
});

App.Router.map(function() {
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return garfs;
    }
});

App.IndexController = Ember.ArrayController.extend({
    itemController: "Garf",
});

App.GarfController = Ember.ObjectController.extend({
    isNew: function() {
        
        if(this.get('status') === 'new') {
            return true;
        }
        
        return false;
        
    }.property('status'),
    
    isSolved: function() {
        
        if(this.get('status') === 'solved') {
            return true;
        }
        
        return false;
        
    }.property('status')
});

Ember.Handlebars.helper('format-date', function(date) {
	return moment(date).fromNow();
});


/* ––––––––––––––––––––––––––––––––––––––––––––––––––– */


var garfs = [{
	id: 'b026324c6904b2a9',
	title: "My new front door",
	author: { name: "Matthieu" },
	date: new Date('2013-10-30T00:13:30.789'),
	status: 'new',
	hidden_message: "hidden1"
}, {
	id: '26ab0db90d72e28a',
	title: "Best pizza in town",
	author: { name: "Harry" },
	date: new Date('2013-10-29T16:19:30.789'),
	status: '',
	hidden_message: "hidden2"
}, {
	id: '6d7fce9fee471194',
	title: "Skateboard dreamland",
	author: { name: "Matthieu" },
	date: new Date('2013-10-28T12:19:30.789'),
	status: 'solved',
	hidden_message: "hidden3"
}, {
	id: '48a24b70a0b37653',
	title: "my house looks like a pumpkin",
	author: { name: "Harry" },
	date: new Date('2013-10-07T12:19:30.789'),
	status: '',
	hidden_message: "hidden4"
}, {
	id: '1dcca23355272056',
	title: "Quoth the Raven",
	author: { name: "Edgar" },
	date: new Date('2013-05-28T12:19:30.789'),
	status: '',
	hidden_message: "Nevermore"
}, {
	id: '9ae0ea9e3c9c6e1b',
	title: "guess what8",
	author: { name: "Jim8" },
	date: new Date('2012-10-28T12:19:30.789'),
	status: '',
	hidden_message: "the message is8"
}];