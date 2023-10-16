// Select all buttons with class 'add-to-cart'
const addToCartButtons = document.querySelectorAll('.item');

// Initialize cart counter to 0
let cartCounter = localStorage.getItem('cartCounter') || 0;

// Select cart counter element
const cartCounterElement = document.getElementById('cart-counter');

// Update cart counter on the page with the initial value from localStorage
cartCounterElement.textContent = cartCounter;

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get product name from button's data attribute
    const productName = button.dataset.productName;

    // Add product to cart (e.g., by storing it in an array or an object)
    // For simplicity, we'll just increment the cartCounter variable
    cartCounter++;

    // Update cart counter on the page
    cartCounterElement.textContent = cartCounter;

    // Store the updated cart counter value in localStorage
    localStorage.setItem('cartCounter', cartCounter);

        // Reset cart counter if it reaches 10
    if (cartCounter === 10) {
      cartCounter = '-1' ;
    }
  });
});





