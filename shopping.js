
		function addtocart(name,price){
        const cart = document.querySelector('.cart');	



        const html=` 
        <div> ${name}</div>
        <div> ${price}</div>
        <button class="button" onclick="removeItem()">Remove item</button>
        :`
      cart.innerHTML+=html;

		}
		function removeItem() {
		const item = document.querySelector('.cart');
    	item.remove();
	}
	