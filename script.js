// Ambil elemen button dan info box
const infoButton = document.getElementById('infoButton');
const infoBox = document.getElementById('infoBox');

// Tambahkan event listener untuk tombol info
infoButton.addEventListener('click', () => {
    infoBox.classList.toggle('hidden'); // Toggle tampilan info box
});