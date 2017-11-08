// JavaScript Document

// Navbaren blir fixed på toppen av siden selv om du scroller, så lenge vinduet er mindre enn 768px bredt.
// Med hjelp herfra: http://stackoverflow.com/questions/11047514/jquery-add-remove-class-when-window-width-changes

function resize() {
    if ($(window).width() < 768) {
     $('nav').addClass('navbar-fixed-top');
    }
    else {$('nav').removeClass('navbar-fixed-top');}
}

$(document).ready( function() {
    $(window).resize(resize);
    resize();
});

// Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-26423687-4', 'auto');
ga('send', 'pageview');

//**Dynamiske priser**

//Funksjoner som lagrer navn og basispris på hytte som vlir valgt
//sessionStorage bruker en nøkkel til å hente ut en verdi, hvor 'baseprice' som nøkkel gir prisen
//Disse verdiene blir da hentet på bestilling.html hvor de blir presentert og prosessert videre
function flakoia() {
	sessionStorage.setItem('key', 'Flåkoia');
	sessionStorage.setItem('basePrice', '799');
	sessionStorage.setItem('vask', '500');
	sessionStorage.setItem('tolvTimer', '599');
	window.location.href = "/blackjack/checkout";
}

function heinfjordstua() {
	sessionStorage.setItem('key', 'Heinfjordstua');
	sessionStorage.setItem('basePrice', '899');
	sessionStorage.setItem('vask',' 500');
	sessionStorage.setItem('tolvTimer', '699');
	window.location.href = "/blackjack/checkout";
}

function holmsakoia() {
	sessionStorage.setItem('key', 'Holmsåkoiaa');
	sessionStorage.setItem('basePrice', '999');
	sessionStorage.setItem('vask', '600');
	sessionStorage.setItem('tolvTimer', '799');
	window.location.href = "/blackjack/checkout";
}

function lyngli() {
	sessionStorage.setItem('key', 'Lyngli');
	sessionStorage.setItem('basePrice', '799');
	sessionStorage.setItem('vask', '500');
	sessionStorage.setItem('tolvTimer', '599');
	window.location.href = "/blackjack/checkout";
}

function stakkslettbua() {
	sessionStorage.setItem('key', 'Stakkslettbua');
	sessionStorage.setItem('basePrice', '899');
	sessionStorage.setItem('vask', '500');
	sessionStorage.setItem('tolvTimer', '699');
	window.location.href = "/blackjack/checkout";
}

function vekkvessetra() {
	sessionStorage.setItem('key', 'Vekvessætra');
	sessionStorage.setItem('basePrice', '699');
	sessionStorage.setItem('vask', '450');
	sessionStorage.setItem('tolvTimer', '549');
	window.location.href = "/blackjack/checkout";
}

function kamtjonnkoia() {
	sessionStorage.setItem('key', 'Kamtjønnkoia');
	sessionStorage.setItem('basePrice', '599');
	sessionStorage.setItem('vask', '400');
	sessionStorage.setItem('tolvTimer', '499');
	window.location.href = "/blackjack/checkout";
}

function fosenkoia() {
	sessionStorage.setItem('key', 'Fosenkoia');
	sessionStorage.setItem('basePrice', '599');
	sessionStorage.setItem('vask', '400');
	sessionStorage.setItem('tolvTimer', '499');
	window.location.href = "/blackjack/checkout";
}

function mortenskaten() {
	sessionStorage.setItem('key', 'Mortenskåten');
	sessionStorage.setItem('basePrice', '1599');
	sessionStorage.setItem('vask', '1000');
	sessionStorage.setItem('tolvTimer', '1199');
	window.location.href = "/blackjack/checkout";
}


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'no', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, autoDisplay: false, multilanguagePage: true}, 'google_translate_element');
}

$(document).ready(function() {
    $("#large").click(function() {
        $("body").css("font-size","170%");
    });
    $("#normal").click(function() {
        $("body").css("font-size","140%");
    })
    $("#small").click(function() {
        $("body").css("font-size","120%");
    })
});
