if (Meteor.isClient) {
    Template.blockquote.helpers({
        quote: function () {
            quotes = [
                "Let's think the <a href = '#'>unthinkable</a>, let's do the <a href = 'a'>undoable</a>. Let us prepare to grapple with the <a href = '#'>ineffable</a> itself, and see if we may not <a href = '#'>eff</a> it after all.",
                "Sherlock Holmes observed that once you have eliminated the <a href = 'a'>impossible</a> then whatever remains, however improbable, must be the <a href = 'a'>answer</a>. I, however, do not like to eliminate the <a href = '#'>impossible</a>.", 
                "What I mean is that if you really want to understand something, the best way is to try and explain it to someone else. That forces you to sort it out in your own mind. And the more slow and dim-witted your pupil, the more you have to break things down into more and more simple ideas. And that’s really <a href = '#'>the essence of programming</a>. By the time you’ve sorted out a complicated idea into little steps that even a stupid machine can deal with, you’ve certainly learned something about it yourself. The teacher usually learns more than the pupil. Isn’t that true?"
            ]
            return quotes[Math.floor(Math.random()*quotes.length)];
        }
    });
    Template.hackathons.rendered = function () {
        animate("#hacks", "fadeInUp")
        //animate("#classes", "flipInX")
    };
    Template.classes.rendered = function () {
        animate("#classes", "fadeInUp")
        //animate("#classes", "flipInX")
    };
    Template.me.rendered = function () {
        animate("#me", "fadeInUp")
    };
    Template.home.rendered = function () {
        animate("blockquote", "fadeIn")
        animate("#buttons", "flipInX")
    };
    Template.navigation.rendered = function () {
        $(function(){
            $(".element").typed({
                strings: ["System.out.print('Hello World! My name is Rushi Shah.');", "print('Hello World! My name is Rushi Shah.')", "console.log('Hello World! My name is Rushi Shah.')", "Hello World! My name is Rushi Shah."],
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