const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('li');

// Menangani klik pada ikon menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('transparent');
});

// Menambahkan event listener untuk setiap item menu
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        event.preventDefault();
        const targetId = item.querySelector('a').getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fungsi valid email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Fungsi valid form
function validateForm(event) {
    event.preventDefault(); // biar ga default

    const name = document.querySelector('#contactForm input[placeholder="Name"]');
    const email = document.querySelector('#contactForm input[placeholder="Email"]');
    const interest = document.getElementById('interest');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const interestError = document.getElementById('interestError');

    // Reset message error
    nameError.textContent = '';
    emailError.textContent = '';
    interestError.textContent = '';

    let isValid = true;

    // Valid nama
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.'; // isi nama errornya
        isValid = false;
    }

    // Valid email
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.'; // isi email errornya
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address.'; // error valid email
        isValid = false;
    }

    // Valid interest
    if (interest.value === '') {
        interestError.textContent = 'Please select an option.'; // isi error option
        isValid = false;
    }

    // valid true, nampilin alert sukses
    if (isValid) {
        alert('Form submitted successfully!'); // 
        // refresh/tuju ke halaman yang dipengen
        window.location.href = '/assignment/index.html'; // 
    }

    return isValid; // 
}

// Menambahkan event listener untuk tombol submit
document.getElementById('contactForm').addEventListener('submit', validateForm);

// Slider Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); // Mengambil semua elemen slide
const totalSlides = slides.length;
let slideInterval; // Variabel untuk menyimpan interval

// Menyembunyikan semua slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; // Menampilkan slide yang sesuai
    });
}

// Menampilkan slide pertama
showSlide(currentSlide);

// Fungsi untuk mengganti slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Menghitung slide berikutnya
    showSlide(currentSlide);
    resetInterval(); // Reset interval setiap kali slide berubah
}

// Mengatur interval untuk otomatis mengganti slide setiap 3 detik
function startInterval() {
    slideInterval = setInterval(() => changeSlide(1), 3000);
}

// Menghentikan interval
function resetInterval() {
    clearInterval(slideInterval);
    startInterval(); // Mulai interval baru
}

// Mulai interval saat halaman dimuat
startInterval();