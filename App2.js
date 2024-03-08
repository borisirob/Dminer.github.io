function geeks(msg, gfg) {
			var confirmBox = $("#container");
      var result = getRandomNumber(); // Het resultaat ophalen van getRandomNumber

       confirmBox.find(".message #uitkomst").html(result); // Het resultaat bijwerken

			/* Trace message to display */
			confirmBox.find(".message").text(msg);

			/* Calling function */
			confirmBox.find(".yes").unbind().click(function()
			{
			confirmBox.hide();
			});
			confirmBox.find(".yes").click(gfg);
			confirmBox.show();

			confirmBox.find(".no").unbind().click(function()
			{
			confirmBox.hide();
			});
			confirmBox.find(".no").click(gfg);
			confirmBox.show();
		}

    function getRandomNumber() {
      let number = Math.floor(Math.random() * 25 + 1);
      let result = '';
      
      if (number >= 1 && number < 3) {
        result = 'geef buurt door';
      } else if (number >= 3 && number < 5) {
        result = 'neem een slok';
      } 
      else if (number >= 5 && number < 13) {
        result= 'bom';
        function mama() {
          
        }
      }
      else if (number >= 13 && number < 15) {
        result = 'veilig';
      }
      else if (number >= 15 && number < 17) {
        result = 'Doe een korte imitatie van een vriend in de groep: Als het niet wordt herkend, neem je een slok.';
      }
      else if (number >= 17 && number < 19) {
        result = 'Een medespeler zet een lied op die jij moet raden, fout is atje';
      } 
      else if (number >= 19 && number < 21) {
        result = 'zoek in whatsapp een woord op: de rest mag bepalen welk woord';
      }
      else if (number >= 21 && number < 23) {
        result = '"Speel een rondje Ik heb nog nooit...: Iedereen die het wel heeft gedaan, moet drinken."';
      }
      else if (number >= 23 && number < 25) {
        result = '"Slangen/vogel beet"';
     }
      else { result = 'deel een atje uit'}
return result; }

const input = document.getElementById('toggleBtn');
input.addEventListener('click', function() { input.style.display = 'none';
  });
 
function verdwijnAfbeelding(button) {
 
  var afbeelding = button.querySelector('img');

  if (afbeelding) {

    afbeelding.style.opacity = 0;

 
    setTimeout(function () {
      afbeelding.style.display = "none";
    }, 500); //
  }
}

