var Controller = Backbone.Router.extend({
    routes: {
        '' : 'index',
        '/' : 'index',
        'about' : 'about',
        'experience' : 'experience',
        'abilities' : 'abilities',
        'contacts' : 'contacts'
    },

    index: function() {
        Views.index.render();
    },

    about: function () {
            Views.about.render();
    },

    experience: function () {
        if (Views.experience != null) {
            Views.experience.render();
        }
    },

    abilities: function () {
        if (Views.abilities != null) {
            Views.abilities.render();
        }
    },

    contacts : function () {
        Views.contacts.render();
    }
});

var Views = {};

var Index = Backbone.View.extend({
    el: $("#container"),

    render: function () {
        $.get('templates/index.html', function(data){
            console.log('2')
            console.log(data);
            var domElem = data.activeElement;
            $("#container").html(domElem.outerHTML);
        });
    }
});

var About = Backbone.View.extend({
    el: $("#container"),

            render: function () {
            $.get('templates/about.html', function(data){
                var domElem = data.activeElement;
                $("#container").html(domElem.outerHTML);
            });
    }
});

var Experience = Backbone.View.extend({
    el: $("#container"),

    render: function () {
        $.get('templates/experience.html', function(data){
            var domElem = data.activeElement;
            $("#container").html(domElem.outerHTML);
        });
    }
});

var Abilities = Backbone.View.extend({
    el: $("#container"),

    render: function () {
        $.get('templates/abilities.html', function(data){
            var domElem = data.activeElement;
            $("#container").html(domElem.outerHTML);
        });
    }
});

var Contacts = Backbone.View.extend({
    el: $("#container"),

    render: function () {
        $.get('templates/contacts.html', function(data){
            var domElem = data.activeElement;
            $("#container").html(domElem.outerHTML);
        });
    }
});

Views = {
    index: new Index(),
    about: new About(),
    abilities: new Abilities(),
    experience: new Experience(),
    contacts: new Contacts()
};

var controller = new Controller();

Backbone.history.start();
