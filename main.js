// Menunggu DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Mengambil elemen ikon menu dan navbar
    const menuIcon = document.getElementById('menu-icon');
    const navbarNav = document.getElementById('navbarNav');

    // Menambahkan event listener untuk klik pada ikon menu
    menuIcon.addEventListener('click', function () {
        // Menambah atau menghapus kelas 'show' pada navbarNav
        navbarNav.classList.toggle('show');

        // Menambahkan bagian berikut
        if (navbarNav.classList.contains('show')) {
            // Mengatur properti overflow body menjadi 'hidden' untuk mencegah scrolling pada latar belakang
            document.body.style.overflow = 'hidden';
        } else {
            // Mengembalikan properti overflow body ke keadaan normal
            document.body.style.overflow = '';
        }
    });
});

 // Script untuk efek scroll halus
 $(document).ready(function () {
    // Tambahkan class "smooth-scroll" pada setiap tautan yang ingin memiliki efek scroll halus
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        // Menggunakan jQuery animate untuk menambahkan efek scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 130, function () {
          // Menambahkan hash (#) ke URL setelah scroll
          window.location.hash = hash;
        });
      }
    });
  });