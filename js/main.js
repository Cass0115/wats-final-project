// Javascript file
$(function(){
  $('div.form-group').prop('required',true);
    $.validator.addMethod('withSpaces', function(value, element){
      return value.match(/^[a-zA-Z]+$/);

    }, "Please use letters and spaces only."
  );

  $('#contact-form').validate({
    submitHandler: function(form){
      form.submit();
    },

    rules:{
      'your-name':{
        required:true,
        maxlength:100,
        withSpaces:true
      },

    } // rules
    })// order-form
}); //document function
