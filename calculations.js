<script >
function getCheckboxValue() {  
  
			var l1 = document.getElementById("Margherita");  
			var l2 = document.getElementById("Formaggio");  
			var l3 = document.getElementById("Chicken");  
			var l4 = document.getElementById("Pineapple_o_clock");  
			var l5 = document.getElementById("Meat_Town");  
			var l6 = document.getElementById("Parma"); 
			var l7 = document.getElementById("Lasagna");  
			var l8 = document.getElementById("Ravioli");  
			var l9 = document.getElementById("Spaghetti_Classica");  
			var l10 = document.getElementById("Seafood_pasta");  
			var l11 = document.getElementById("Today_soup");  
			var l12= document.getElementById("Bruschetta");
			var ll3 = document.getElementById("Garlic_bread");  
			var ll4 = document.getElementById("Tomozzarella");
			
			var res=0;   
			if (l1.checked == true){  
			var pl1 = document.getElementById("Margherita").value;  
			res = res+pl1;  
			}  else{
			pl1 = 0;
			}
			
			if (l2.checked == true){  
			var pl2 = document.getElementById("Formaggio").value;  
			res = res+pl2  
			}  else{
			pl2 = 0;
			}
			
			if (l3.checked == true){  
			var pl3 = document.getElementById("Chicken").value;  
			res = res+pl3;  
			}  else{
			pl3 = 0;
			}
			
			if (l4.checked == true){  
			var pl4 = document.getElementById("Pineapple_o_clock").value;  
			res = res+pl4;  
			}  else{
			pl4 = 0;
			}
			
			if (l5.checked == true){  
			var pl5 = document.getElementById("Meat_Town").value;  
			res = res+pl5;  
			}  else{
			pl5 = 0;
			}
			
			if (l6.checked == true){  
			var pl6 = document.getElementById("Parma").value;  
			res = res+pl6;  
			}  else{
			pl6 = 0;
			}
			
			if (l7.checked == true){  
			var pl7 = document.getElementById("Lasagna").value;  
			res = res+pl7;  
			}  else{
			pl7 = 0;
			}
			
			if (l8.checked == true){  
			var pl8 = document.getElementById("Ravioli").value;  
			res = res+pl8;  
			}  else{
			pl8 = 0;
			}
			
			if (l9.checked == true){  
			var pl9 = document.getElementById("Spaghetti_Classica").value;  
			res = res+pl9;  
			}  else{
			pl9 = 0;
			}
			
			if (l10.checked == true){  
			var pl10 = document.getElementById("Seafood_pasta").value;  
			res = res+pl10;  
			}  else{
			pl10 = 0;
			}
			
			if (l11.checked == true){  
			var pl11 = document.getElementById("Today_soup").value;  
			res = res+pl11;  
			}  else{
			pl11 = 0;
			}
			
			if (l12.checked == true){  
			var pl12 = document.getElementById("Bruschetta").value;  
			res = res+pl12;  
			}  else{
			pl12 = 0;
			}
			
			if (l13.checked == true){  
			var pl13 = document.getElementById("Garlic_bread").value;  
			res = res+pl13;  
			}  else{
			pl13 = 0;
			}
			
			if (l14.checked == true){  
			var pl14 = document.getElementById("Tomozzarella").value;  
			res = res+pl14;  
			}  else{
			pl14 = 0;
			}

			console.log(res);
			console.log("shivani");
			  
			}
</script>