$(document).ready(function() {

    // var applyFormClickFunc = function() {
    // 	yaCounter35226635.reachGoal('applyFormClick');
    // 	return true;
    // };

    var applyFormSubmitFunc = function() {
    	yaCounter35226635.reachGoal('formSubmit');
    	return true;
    };


	$("#form_main,#form_main1,#form_main2,#form_main3").submit(function(){ 
		var form = $(this);
		var error = false; 
		form.find('input, textarea').each( function(){
			if ($(this).val() == '') { 
				alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); 
				error = true; 
			}
		});
		if (!error) { 
			var data = form.serialize(); 
// console.log("i am here");			
console.log(data);			
			$.ajax({ 
			    type: 'POST', 
			    // url: 'mail.php', 
			    url: 'mail.php', 
			    dataType: 'json', 
			    data: data, 
		        beforeSend: function(data) { 
		            form.find('button[type="submit"]').attr('disabled', 'disabled'); 
		        },
		        success: function(data){ 
console.log("entered succes part");		        	
		       		if (data['error']) { 
		       			alert(data['error']); 
		       		} else { 
                        $('#myModal5').modal('show');
                        applyFormSubmitFunc();                        
console.log(data);                        
		       		}
		        },
		        error: function (xhr, ajaxOptions, thrownError) { 
console.log("entered error part");		        			        	
console.log("xhr: " + xhr + "; \n ajaxOptions: " + ajaxOptions + "; \n thrownError: " + thrownError);
		            alert(xhr.status); 
		            alert(thrownError); 
		        },
		        complete: function(data) { 
		            form.find('button[type="submit"]').prop('disabled', false); 
                    form.trigger("reset");
                    $("#myModal1,#myModal2,#myModal3").modal('hide');
		        }		                  
			});
		}
		return false; 
	});
	$('#myCarousel .carousel-inner div:first').addClass('active');
	$('.go_to').click( function(){
		// applyFormClickFunc();
		var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });
});