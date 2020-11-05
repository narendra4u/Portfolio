(function($) { 

	"use strict";

	

jQuery(document).ready(function(){

	$('#contact_form').on( "submit", function() {



		var action = $(this).attr('action');



		$("#message").slideUp(750,function() {

		$('#message').hide();



 		$('#submit')

			.before('<div class="text-center"><img src="images/ajax-loader.gif" class="contact-loader" /></div>')

			.attr('disabled','disabled');



		$.post(action, {

			name: $('#name_input').val(),

			email: $('#email_input').val(),

			tel: $('#telephone_input').val(),

			subject: $('#subject_input').val(),

			message: $('#message_input').val(),



		},

			function(data){

				document.getElementById('message').innerHTML = data;

				$('#message').slideDown('slow');

				$('#contact_form img.contact-loader').fadeOut('slow',function(){$(this).remove()});

				$('#submit').removeAttr('disabled');

				if(data.match('success') != null) $('#contact_form').slideUp('slow');

			}

		);



		});



		return false;



	});



});



}(jQuery));