function openChat() {
  alert("Chat bot opened!");
  // Replace with actual chat bot integration
}

//main content
    let index = 0;
    const slides = document.querySelector('.slides');
    const total = document.querySelectorAll('.slide').length;

    function showSlide(i) {
      index = (i + total) % total;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }
    function nextSlide() { showSlide(index + 1); }
    function prevSlide() { showSlide(index - 1); }

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);
    //main content
    
    //purchase section
    
let currentVeg = '';
let currentPrice = 0;

function openModal(name, price) {
  currentVeg = name;
  currentPrice = price;
  document.getElementById('vegName').innerText = name;
  document.getElementById('pricePerKg').innerText = price;
  document.getElementById('quantity').value = 1;
  calculateTotal();
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function calculateTotal() {
  let qty = document.getElementById('quantity').value;
  let total = qty * currentPrice;
  document.getElementById('totalPrice').innerText = total;
}

function buyNow() {
  let total = document.getElementById('totalPrice').innerText;
  alert("Redirecting to payment for ₹" + total);
  window.location.href = "https://paytm.com";
}
