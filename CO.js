// Menunggu hingga seluruh dokumen dimuat sebelum menjalankan fungsi
document.addEventListener('DOMContentLoaded', function () {
    openOrderPage(); // Menampilkan halaman pemesanan secara otomatis saat halaman dimuat
});

// Array untuk menyimpan item di keranjang dan total harga
let cartItems = [];
let totalPrice = 0;

// Menampilkan halaman pemesanan
function openOrderPage() {
    document.getElementById('orderPage').style.display = 'block';
}

// Menambahkan item ke dalam keranjang
function addToCart(itemName, itemPrice) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalItemPrice = itemPrice * quantity;

    // Menambahkan item ke dalam array cartItems
    cartItems.push({ name: itemName, price: totalItemPrice, quantity: quantity });
    totalPrice += totalItemPrice;

    // Memperbarui tampilan keranjang
    updateCart();
}

// Memperbarui tampilan keranjang
function updateCart() {
    const cartList = document.getElementById('cartItems');
    const totalElement = document.getElementById('totalPrice');

    // Mengosongkan isi keranjang sebelum memperbarui
    cartList.innerHTML = '';

    // Menambahkan setiap item di keranjang ke dalam daftar
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - ${formatRupiah(item.price)}`;
        cartList.appendChild(listItem);
    });

    // Menampilkan total harga
    totalElement.textContent = formatRupiah(totalPrice);
}

// Proses checkout
function checkout() {
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

// Memeriksa apakah informasi pelanggan dan keranjang tidak kosong
if (customerName && customerAddress && customerPhone && cartItems.length > 0) {
    let paymentMessage = '';

    // Menentukan pesan berdasarkan metode pembayaran
    if (paymentMethod === 'COD') {
        paymentMessage = 'Please be ready with cash when the delivery arrives.';
    } else if (paymentMethod === 'BankTransfer') {
        paymentMessage = 'Bank details for transfer will be sent to your phone number.';
    }

    alert(`Thank you, ${customerName}! Your order will be delivered to ${customerAddress}. Your phone number: ${customerPhone}. Total amount: ${formatRupiah(totalPrice)}. ${paymentMessage}`);
     // Mereset keranjang setelah checkout
    resetOrder();
} else {
     // Menampilkan pesan kesalahan jika informasi belum lengkap
    alert('Please provide your name, address, phone number, and add items to your cart before checkout.');
}
}

// Mereset keranjang setelah proses checkout
function resetOrder() {
    // Mengosongkan array cartItems dan total harga
    cartItems = [];
    totalPrice = 0;
    
    // Memperbarui tampilan keranjang
    updateCart();
    
    // Menyembunyikan halaman pemesanan setelah reset
    document.getElementById('orderPage').style.display = 'none';
}

// Mengubah format harga menjadi format mata uang Rupiah
function formatRupiah(amount) {
    return 'Rp ' + amount.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
