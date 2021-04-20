
/* ----------------------------------------
what we do section
-----------------------------------------*/
$(document).ready(function() {
  $("#wwd_design").click(function() {
    $("#wwd_design_icon").slideToggle(400);
    $("#wwd_design_text").slideToggle(400);
  });



  $("#wwd_development").click(function() {
    $("#wwd_development_icon").toggle();
    $("#wwd_development_text").toggle();
  });



  $("#wwd_product").click(function() {
    $("#wwd_product_icon").slideToggle(400);
    $("#wwd_product_text").slideToggle(400);
  });

});


/* ----------------------------------------
portfolio section
-----------------------------------------*/
$(document).ready(function() {
	
	$("#portIMG4").hover(function() {
		$("#overlay4").toggle(0);
	  });
	$("#portIMG3").hover(function() {
		$("#overlay3").toggle(0);
	  });
	$("#portIMG2").hover(function() {
		$("#overlay2").toggle(0);
	  });
	$("#portIMG1").hover(function() {
		$("#overlay1").toggle(0);
	  });
	
	$("#portIMG5").hover(function() {
		$("#overlay5").toggle(0);
	  });
	$("#portIMG6").hover(function() {
		$("#overlay6").toggle(0);
	  });
	$("#portIMG7").hover(function() {
		$("#overlay7").toggle(0);
	  });
	$("#portIMG8").hover(function() {
		$("#overlay8").toggle(0);
	  });
});


/* ----------------------------------------
contact section
-----------------------------------------*/
$('#contact_form').submit(function(e) {
    //e.preventDefault();
	
	var name = $("#frm_name").val();
    var mail = $("#frm_mail").val();
	var message = $("#frm_message").val();
    
	//validation
	if(name === "" || mail === "" || message === ""){
		alert("Enter all fields");
	}else{
		var final_message = "Sending your message via "+ mail + " as: "+ name;
		if(confirm(final_message)){
			alert(name+" we have received your message. Thank you fro reaching out to us.");
		}else{
			alert("Message Cancelled");
		}
	}

});