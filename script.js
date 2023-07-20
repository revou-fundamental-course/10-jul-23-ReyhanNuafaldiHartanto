const btn = document.getElementById('hitung');

function hitung(){
    let beratbadan = document.getElementById('beratbadan').value;
    let tinggibadan = document.getElementById('tinggibadan').value;

    console.log(beratbadan / (tinggibadan * tinggibadan));

    if(beratbadan == '' || tinggibadan == ''){
        alert('Plese');return;
    }

    tinggibadan = tinggibadan / 100

    let BMI = (beratbadan / (tinggibadan * tinggibadan));

    BMI = BMI.toFixed(2);

    document.getElementById('hasil').innerHTML = BMI;

    let status = '';

    if(BMI <18.5){
        status = "Kekurangan berat badan. Anda bisa menambah berat badan dengan cara menerapkan pola hidup sehat. Berikut beberapa tips yang bisa Anda lakukan: - Menerapkan pola makan sehat, sesuaikan porsi makan dengan kebutuhan kalori harian. Tambah porsi makan sedikit demi sedikit. Anda bisa mengakalinya dengan makan lebih sering tapi dengan porsi yang kecil. - Pilih makanan yang tinggi kalori tapi sehat. - Pastikan Anda mengonsumsi makanan yang bervariasi, sehingga tubuh akan mendapatkan beragam zat gizi. - Olahraga rutin. - Tidur dan minum air putih yang cukup.";
    }
    if(BMI >=18.5 && BMI < 24.9){
        status = "Normal (Ideal). Mempertahankan berat badan tetap normal dapat menjaga Anda dari beragam risiko penyakit kronis. Untuk itu, Anda harus menerapkan pola hidup sehat dan teratur, berikut tips yang bisa Anda lakukan: - Menerapkan pola makan sehat dengan menggunakan prinsip gizi seimbang. Prinsip ini membuat Anda mengonsumsi beragam macam bahan makanan, sehingga tubuh bisa mendapat nutrisi yang cukup.";
    }
    if(BMI >=25.0 && BMI < 29.9){
        status = "kelebihan Berat Badan. Kurangi gula dan karbohidrat olahan yang tidak mengandung serat dan nutrisi penting lainnya.Tidur yang cukup. Kurang tidur dapat memperlambat proses perubahan kalori menjadi energi. Proses ini disebut dengan metabolisme. Ketika prosesnya kurang efektif, tubuh akan menyimpan energi yang tidak terpakai sebagai lemak. ";
    }
    if(BMI >=30){
        status = "Obesitas. Konsumsi sayur dan buah minimal 5 porsi setiap harinya. Meningkatkan aktivitas fisik minimal 30 menit setiap hari. Lakukan secara teratur 3-5 kali per minggu kemudian lakukan penyesuaian setelah beberapa minggu. Membatasi aktivitas, seperti menonton televisi, bermain komputer dan games. Batasi konsumsi gula, garam, dan lemak berlebih. ";
    }

    document.querySelector('.comment').innerHTML = status;
}

