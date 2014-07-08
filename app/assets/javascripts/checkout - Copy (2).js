$(document).ready(function () {
alert('test');

$('#test').click(function(){
alert('test');

   //check if the custom field 
   if(document.getElementById('customamt').checked) {
   alert('checked');
  //Male radio button is checked
  var testvar=$('#customnum').val();
  alert(testvar);
var  customamt = Number($('#customnum').val());
  alert(customamt);
  
}else {
}

});

var customamt;
   $('#checkout').submit(function (e) {




       amount: $('#payAmount').val * 100,
   
     $('#payment_errors').hide();
     e.preventDefault();
     var _this = this;
     Stripe.card.createToken({
       number:         $('#card_number').val().replace(/ /g, ''),
       exp_month:      $('#expires').val().split('/')[0],
       exp_year:       $('#expires').val().split('/')[1],
       cvc:            $('#cvv').val()
     }, function (error, response) {
       if (error == 200) {
         $('#stripe_token').val(response.id);
         console.log('stripe token added');
         _this.submit();
		return false;
       }
       else {
         //error
         if (response && response.error && response.error.message) {
          $('#payment_errors_info').text(response.error.message);
		  return false;
         } else {
           $('#payment_errors_info').text('');
		   return false;
         }
         $('#payment_errors').show();
         return false;
       }return false;
     });
	      return false;
   });
 });