//variabel
let btnHitung = document.querySelector('.hitung');
let btnReset = document.querySelector('.reset');
let DisplayOutput = document.querySelector('.result');

//function
function hitungBMI(event) {
    let tinggiBadan = document.getElementById('tb').value;
    let beratBadan = document.getElementById('bb').value;
    event.preventDefault();

    //perhitungan rumus BMI
    let bmi = parseInt(beratBadan / (tinggiBadan / 100 * tinggiBadan / 100));
    const finalBMI = (bmi.toFixed(2));

    if (tinggiBadan === '' || beratBadan === '') {
        DisplayOutput.innerHTML = 'Masukkan data dengan benar!!';
    } else if (finalBMI < 18.5) { 
        DisplayOutput.innerHTML = ' kekurangan berat badan.' ;
    } else if (finalBMI >= 18.5 && finalBMI <= 24.9) {
        DisplayOutput.innerHTML = ' Normal/Ideal.';
    } else if (finalBMI >= 25.0 && finalBMI <= 29.9) {
        DisplayOutput.innerHTML = ' Kelebihan berat badan.';
    } else {
        DisplayOutput.innerHTML = ' Kegemukan/obesitas.';
    }


}
//fungsi untuk tombol reset
function reloadPage(){
    window.location.reload();
}

//button untuk menampilkan fungsi ketika di klik
btnHitung.addEventListener('click', hitungBMI );
btnReset.addEventListener('click', reloadPage);

