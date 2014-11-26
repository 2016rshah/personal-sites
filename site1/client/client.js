if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault("counter", 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get("counter");
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set("counter", Session.get("counter") + 1);
        }
    });
    // Template.blockquote.rendered = function () {
    //     animate("blockquote", "bounce")
    // };
    // Template.blockquote.events({
    //     'click blockquote': function () {
    //         animate("blockquote", "hinge")
    //     }
    // });
    Template.projects.rendered = function () {
        animate("#hacks", "flipInX")
        animate("#classes", "flipInX")
    };
    // Template.projects.events({
    //     'click #hacks': function () {
    //         animate("#hacks", "flipInX")
    //     }, 
    //     'click #classes':function(){
    //         animate("#classes", "flipInX")
    //     }
    // });
    Template.navigation.rendered = function () {
        $(function(){
            $(".element").typed({
                strings: ["System.out.print('Hello World!');", "print('Hello World!')", "console.log('Hello World!')", "Hello World!"],
                typeSpeed: .25
            });
        });
    };
    Template.references.rendered = function () {
        animate("#references", "fadeInUp")
    };
    function animate(selector, anim) {
        $(selector).removeClass().addClass(anim + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            if(anim == "hinge")
                $(this).hide()
            $(this).removeClass();
        });
    };
}