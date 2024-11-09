
/* function myFunction() {
	
	 var name = document.getElementById('form_name');
       var email = document.getElementById('form_email');
       var message = document.getElementById('form_message');
	   if (name.value && email.value && message.value){ 
		alert("MESSAGE SENT SUCESSFULLY");
	    $('#contact-form')[0].reset();
	   }
	  else
		  alert("fill out the boxes");
}

 */



















 $(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "https://formsubmit.io/send/vishwaksaran11@gmail.com";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
			 alert('Message sent');
			 $('#contact-form')[0].reset();
            return false;
			
        }
    })
}); 








/* (function () {
	$('#contact-form').validator();
  $(document).ready(function () {
    return $('#contact-form').submit(function (e) {
      var email, message, name,url;
      name = document.getElementById('form_name');
      email = document.getElementById('form_email');
      message = document.getElementById('form_message');
	  url="https://formspree.io/vishwaksaran11@gmail.com"
      if (!name.value || !email.value || !message.value) {
        alert("	fill out the boxes")
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: url,
          data: $(this).serialize(),
          datatype:'json' });

        e.preventDefault();
        $(this).get(0).reset();
        return alert('Message sent');
      }
    });
  });

}).call(this); */
 