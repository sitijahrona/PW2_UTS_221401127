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
