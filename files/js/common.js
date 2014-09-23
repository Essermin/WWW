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

    templateUrl: 'templates/index.html',

    render: function () {
        $.get(this.templateUrl, function (data) {
            $("#container").html(data);
        }, 'html');
    }
});

var About = Backbone.View.extend({
    el: $("#container"),

    templateUrl: 'templates/about.html',

    render: function () {
        $.get(this.templateUrl, function (data) {
            $("#container").html(data);
        }, 'html');
    }
});

var Experience = Backbone.View.extend({
    el: $("#container"),

    templateUrl: 'templates/experience.html',

    render: function () {
        $.get(this.templateUrl, function (data) {
            $("#container").html(data);
        }, 'html');
    }
});

var Abilities = Backbone.View.extend({
    el: $("#container"),

    templateUrl: 'templates/abilities.html',

    render: function () {
        $.get(this.templateUrl, function (data) {
            $("#container").html(data);
        }, 'html');
    }
});

var Contacts = Backbone.View.extend({
    el: $("#container"),

    templateUrl: 'templates/contacts.html',

    render: function () {
        $.get(this.templateUrl, function (data) {
            $("#container").html(data);
        }, 'html');
    }
});

var Navigation = Backbone.View.extend({
    el: $('nav_wrapper'),

    templateUrl: 'templates/blocks/navigation.html',

    render: function () {
        $.get(this.templateUrl, function (data) {
            $('.nav_wrapper').html(data);
        }, 'html');
    }
});

Views = {
    index: new Index(),
    about: new About(),
    abilities: new Abilities(),
    experience: new Experience(),
    contacts: new Contacts(),
    navigation: new Navigation()
};

Views.navigation.render();

var controller = new Controller();

Backbone.history.start();
