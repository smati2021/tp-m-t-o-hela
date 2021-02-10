
       function showCity( ) { 
                       
       let nomVilleSelectionnee = document.getElementById("villes-select").value;;
       let villes = document.getElementsByClassName("ville");
       let l = villes.length;
       for (let i=0; i<l; i++) {
       ville=villes[i];

       if (villes[i].id == nomVilleSelectionnee ) {
       ville.style.display= "" ;
       } else {
       ville.style.display= "none" ;
                  }
                }
             }
                              
      