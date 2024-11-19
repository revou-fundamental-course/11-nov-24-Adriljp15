const menuIcon = document.getElementById('menu-icon'); // Menggunakan ID
const navLinks = document.getElementById('nav-links'); // Menggunakan ID
const navItems = navLinks.querySelectorAll('li'); // Mengambil semua item menu

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Menambahkan atau menghapus kelas show
    navLinks.classList.toggle('transparent'); // Menambahkan atau menghapus kelas transparent
});

// Menambahkan event listener untuk setiap item menu
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        // Menghapus kelas active dari semua item
        navItems.forEach(i => i.classList.remove('active'));
        // Menambahkan kelas active ke item yang diklik
        item.classList.add('active');

        // Menghindari perilaku default tautan
        event.preventDefault();

        // Mendapatkan ID tujuan dari href
        const targetId = item.querySelector('a').getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Menggulung ke elemen target
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function validateForm() {
    // Mengambil elemen dari form
    const name = document.querySelector('input[placeholder="Name"]');
    const email = document.querySelector('input[placeholder="Email"]');
    const interest = document.getElementById('interest');

    // Mengambil elemen untuk menampilkan pesan error
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const interestError = document.getElementById('interestError');

    // Menghapus pesan error sebelumnya
    nameError.textContent = '';
    emailError.textContent = '';
    interestError.textContent = '';

    let isValid = true;

    // Validasi nama
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validasi email
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else {
        // Cek format email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }
    }

    // Validasi minat
    if (interest.value === '') {
        interestError.textContent = 'Please select an option.';
        isValid = false;
    }

    return isValid; // Mengembalikan true jika semua validasi berhasil
}