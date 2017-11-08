 //global variabel
      var basePrice;
      var vask;
      var tolvTimer;
      //Når dokumentet lastet så hentes inn informasjonen om hytten som blir bestillt
      //Datoen får bestilling får også en minimumsdato som settes denne dagen
      function hytte() {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        if (isFirefox) {
          alert("Vi ser du bruker Mozilla Firefox, vennligst skriv inn datoen manuelt på formen mm/dd/åååå eller last ned en alternativ nettleser");
        }

        if (isIE) {
          alert("Vi ser du bruker Internet explorer, vennligst skriv inn datoen manuelt på formen mm/dd/åååå eller last ned en alternativ nettleser");
        }
        vask = parseInt(sessionStorage.getItem('vask'));
        document.getElementById("pris").style.display='none';
        document.getElementById("onskerIkkeVask").checked = true;
        document.getElementById("ikkeMedlem").checked = true;
        document.getElementById("toDate").style.display = 'none';
        var a = sessionStorage.getItem('key');
        document.getElementById("hytte").innerHTML = a;
        basePrice = parseInt(sessionStorage.getItem('basePrice'));
        tolvTimer = parseInt(sessionStorage.getItem('tolvTimer'));
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
          dd='0'+dd;
        } 
        if(mm<10){
          mm='0'+mm;
        } 
        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("from").setAttribute("min", today);
      }

      //Funskjon som gir et heltall for dager mellom datoene
      function days_between(date1, date2) {
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24;
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);
        // Convert back to days and return
        //check if this works properly
        return Math.round(difference_ms/ONE_DAY);
      } 

      function showPrice() {
        document.getElementById("pris").style.display= 'block';
      }
      //oppdaterer prisen, sjekker for ekstrating som vask og medlem for turistforeningen
      function update() {
        var date1 = new Date(document.getElementById("from").value);
        var date2 = new Date(document.getElementById("to").value);
        var days = days_between(date1, date2);
        if (days == 0) {
          var price = tolvTimer; //siden funskojnen tolker dette som null dager regnes dette som et halvdagsleie
        } else {
          
          var price = days*basePrice;
        }
        if (document.getElementById("onskerVask").checked) {
          price += vask; //henter vaskeprisen til hytten
        }

        if (document.getElementById("medlem").checked) {
          price = Math.round(price*0.85);
        }
        document.getElementById("pris").innerHTML = price + " kr";
      }

      //Setter maksimum fra-til dato 2 uker fra valgt dato hos 'fra'
      function setMax() {
        var startDate = document.getElementById("from").value;
        var twoWeeks = new Date(startDate)
        twoWeeks.setDate(twoWeeks.getDate() + 14);
        var dd = twoWeeks.getDate();
        var mm = twoWeeks.getMonth()+1; //January is 0!
        var yyyy = twoWeeks.getFullYear();
        
        if(dd<10){
          dd='0'+dd
        } 
        
        if(mm<10){
          mm='0'+mm
        } 

        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("to").setAttribute("min", startDate);
        document.getElementById("to").setAttribute("max", today);
        document.getElementById("toDate").style.display = 'block';
      }

      //validerer inputen for navn of email
      function validateForm() {
        var feilMelding
        feilmelding = "Skjemaet har manglende felter, vennligst fyll inn følgende: " + "\n";
        //regex syntaks for email hentet fra stackoverflow
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        name =document.getElementById("name").value;
        email = document.getElementById("mail").value;
        var nameCheck = true;
        var emailCheck = true;

        if (name == "") {
          nameCheck = false;
          feilmelding += "-Navn \n";
        }

        if (!(regEx.test(email))) {
          emailCheck = false;
          feilmelding += "-Email \n";
        } 

        if (nameCheck && emailCheck) {
          feilMelding = ""
          return true;

        } else {
          alert(feilmelding);
          feilmelding = "";
          return false;
        }
      }
