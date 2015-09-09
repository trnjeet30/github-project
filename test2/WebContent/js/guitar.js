var count = 1;
var total = 3;
function slide(x) {
	var fotu = document.getElementById("img");
	
	count = count + x;
	if (count > total) {
		count = 1;
	}
	if (count < 1) {
		count = total;
	}
	fotu.src = "../images/product" + count + ".jpg";
	


	
			$.getJSON(
					'../js/guitardata.json',
					function(data) {
						 {
							document.getElementById("info").innerHTML = data.allProducts[count].product_desc;
							document.getElementById("ship").innerHTML = data.allProducts[count].shipping_details;
							document.getElementById("rev").innerHTML = data.allProducts[count].customer_reviews;
						 }
							
					});
		localStorage.setItem("srce" ,fotu.src)	;
localStorage.setItem("inf",data.allProducts[count].product_desc)
}

function expand() {
	if (document.getElementById('info').style.display == "none") {
		(document.getElementById('info').style.display = "block");
	} else
		(document.getElementById('info').style.display = "none");

}

function expan() {
	if (document.getElementById('ship').style.display == "none") {
		(document.getElementById('ship').style.display = "block");
	} else
		(document.getElementById('ship').style.display = "none");

}

function expa() {
	if (document.getElementById('rev').style.display == "none") {
		(document.getElementById('rev').style.display = "block");
	} else
		(document.getElementById('rev').style.display = "none");

}

function newf() {
	 document.getElementById("nw").src= localStorage.getItem("srce");
	 document.getElementById("desc").innerHTML= localStorage.getItem("inf");
	 
	
}
 


