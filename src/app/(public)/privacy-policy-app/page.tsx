import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 mt-8 py-6">
      <h3 className="text-center text-2xl font-semibold">
        Kebijakan Privasi <br />
        Applikasi Pantau.ai
      </h3>

      <div className="px-4 md:px-16 lg:px-64 mt-8">
        <p className="mb-8">
          Pantau.ai adalah aplikasi yang berfokus untuk memanage CCTV dan memantau aktivitas api dan asap dari notifikasi realtime. Kami berkomitmen untuk menjaga dan
          melindungi data privasi dan keamanan informasi pengguna. Dengan menggunakan Pantau.ai pengguna setuju dengan kebijakan privasi kami.
        </p>

        <p>
          Kebijakan privasi ini berlaku untuk aplikasi Pantau.ai (dengan ini disebut sebagai "Aplikasi") untuk perangkat seluler yang dibuat oleh Pantau.ai (dengan ini
          disebut sebagai "Penyedia Layanan") sebagai layanan Komersial. Layanan ini dimaksudkan untuk digunakan "SEBAGAIMANA ADANYA".
        </p>

        <p className="font-semibold text-lg mt-8 mb-2">Pengumpulan dan Penggunaan Informasi</p>
        <p>Aplikasi mengumpulkan informasi ketika Anda mengunduh dan menggunakannya. Informasi ini dapat mencakup informasi seperti :</p>

        <ul className="list-disc	px-8">
          <li>Alamat Protokol Internet perangkat Anda (mis. Alamat IP)</li>
          <li>Halaman Aplikasi yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu yang dihabiskan pada halaman tersebut</li>
          <li>Waktu yang dihabiskan untuk menggunakan Aplikasi</li>
          <li>Sistem operasi yang Anda gunakan pada perangkat seluler Anda</li>
        </ul>

        <p className="mt-4">
          Aplikasi mengumpulkan lokasi perangkat Anda, yang membantu Penyedia Layanan menentukan perkiraan lokasi geografis Anda dan memanfaatkannya dengan cara-cara di
          bawah ini:
        </p>
        <ul className="list-disc	px-8">
          <li>Layanan Geolokasi: Penyedia Layanan menggunakan data lokasi untuk menyediakan fitur-fitur seperti kondisi cuaca dan suhu.</li>
          <li>
            Analisis dan Peningkatan: Data lokasi yang dikumpulkan dan di anonimkan membantu Penyedia Layanan untuk menganalisis perilaku pengguna, mengidentifikasi
            trend, dan meningkatkan kinerja dan fungsionalitas Aplikasi secara keseluruhan.
          </li>
        </ul>
        <p className="mt-4">
          Aplikasi membutuhkan izin untuk menggunakan kamera perangkat Anda. Ini diperlukan untuk pemindaian barcode yang digunakan saat bergabung untuk menerima
          informasi dari area akun lain.
        </p>
        <p className="mt-4">
          Perizinan Akses Internet <br />
          Akses keadaan jaringan digunakan untuk memeriksa koneksi jaringan perangkat pengguna. Hal ini diperlukan untuk menentukan apakah aplikasi dapat mengakses
          internet atau tidak. Informasi yang dikumpulkan meliputi status jaringan (misalnya: terhubung atau tidak terhubung), jenis koneksi (misalnya: WiFi, seluler),
          dan informasi serupa yang diperlukan untuk menentukan ketersediaan jaringan.
        </p>

        <p className="mt-4">
          Perizinan Access Network State
          <br />
          Akses internet digunakan untuk mengambil dan mengirim data kepada server kami untuk memfasilitasi fungsi aplikasi, seperti memuat konten dari server atau
          mengirimkan data yang diperlukan.
        </p>

        <p className="mt-4">
          Perizinan Post Notification <br />
          Izin ini digunakan untuk mengirim pemberitahuan kepada pengguna terkait informasi penting, pembaruan, atau promosi yang relevan dengan pengalaman pengguna.
          Tidak ada informasi pribadi yang dikumpulkan melalui izin ini.
        </p>
        <p className="mt-4">
          Perizinan WAKE_LOCK <br />
          Izin ini digunakan untuk mempertahankan status perangkat agar tidak masuk ke mode tidur saat aplikasi sedang digunakan, sehingga memastikan bahwa fungsi
          aplikasi tetap aktif saat digunakan. Tidak ada informasi pribadi yang dikumpulkan melalui izin ini. Ini hanya mempengaruhi kinerja aplikasi pada perangkat
          pengguna.
        </p>

        <p className="mt-4">
          Perizinan READ_PHONE_STATE
          <br />
          Akses ke status telepon digunakan untuk mengidentifikasi unik perangkat, yang diperlukan untuk keperluan analisis dan peningkatan layanan. Informasi yang
          dikumpulkan mungkin termasuk ID perangkat, informasi jaringan
        </p>

        <p className="mt-4">
          Perizinan SCHEDULE_EXACT_ALARM <br />
          Izin ini memungkinkan aplikasi untuk menjadwalkan alarm dengan akurat dan tepat waktu, yang diperlukan untuk fungsi-fungsi tertentu seperti pengingat atau tugas
          terjadwal. Tidak ada informasi pribadi yang dikumpulkan melalui izin ini.
        </p>
        <p className="mt-4">
          Perizinan WRITE_EXTERNAL_STORAGE <br />
          Izin ini memungkinkan aplikasi untuk menyimpan data di penyimpanan eksternal perangkat, seperti file gambar atau dokumen yang diunduh. Informasi yang disimpan
          di penyimpanan eksternal mungkin meliputi file yang dihasilkan oleh pengguna, tetapi tidak termasuk informasi pribadi kecuali jika pengguna secara aktif memilih
          untuk menyimpannya di penyimpanan eksternal.
        </p>

        <p className="mt-4">
          Untuk pengalaman yang lebih baik, saat menggunakan Aplikasi, Penyedia Layanan dapat meminta Anda untuk memberikan kami informasi pengenal pribadi tertentu,
          termasuk namun tidak terbatas pada Email, Nama Pengguna, Kata Sandi. Informasi yang diminta oleh Penyedia Layanan akan disimpan oleh mereka dan digunakan
          sebagaimana dijelaskan dalam kebijakan privasi ini.
        </p>

        <p className="font-semibold text-lg mt-8 mb-2">Kebijakan Penyimpanan Data</p>
        <p>
          Penyedia Layanan akan menyimpan data yang diberikan Pengguna selama Anda menggunakan Aplikasi dan untuk waktu yang wajar setelahnya. Jika Anda ingin mereka
          menghapus Data yang Diberikan Pengguna yang telah Anda berikan melalui Aplikasi, silahkan hubungi mereka di pantauai.id@gmail.com dan mereka akan merespons
          dalam waktu yang wajar.
        </p>

        <p className="font-semibold text-lg mt-8 mb-2">Keamanan </p>
        <p>
          Penyedia Layanan peduli untuk menjaga kerahasiaan informasi Anda. Penyedia Layanan menyediakan pengamanan fisik, elektronik, dan prosedural untuk melindungi
          informasi yang diproses dan disimpan oleh Penyedia Layanan. Penyedia layanan akan melindungi data pribadi Anda seperti nama pengguna, alamat email, dan kata
          sandi. Selain itu, penyedia layanan juga akan mengenkripsi kata sandi yang Anda berikan, sehingga tidak ada pihak, termasuk penyedia layanan dan pengguna
          lainnya, yang mengetahui kata sandi asli Anda.
        </p>

        <p className="font-semibold text-lg mt-8 mb-2">Akses Pihak Ketiga </p>
        <p>
          Hanya data yang dikumpulkan dan di anonimkan yang dikirimkan secara berkala ke layanan eksternal untuk membantu Penyedia Layanan dalam meningkatkan Aplikasi dan
          layanan mereka. Penyedia Layanan dapat membagikan informasi Anda dengan pihak ketiga dengan cara yang dijelaskan dalam pernyataan privasi ini.
        </p>
        <p className="mt-4">
          Harap diperhatikan bahwa Aplikasi menggunakan layanan pihak ketiga yang memiliki Kebijakan Privasi mereka sendiri tentang penanganan data. Di bawah ini adalah
          tautan ke Kebijakan Privasi penyedia layanan pihak ketiga yang digunakan oleh Aplikasi:
        </p>

        <ul className="list-disc	px-8">
          <li>
            <Link href="https://play.google/developer-content-policy/?hl=id" target="_blank" className="text-blue-500" rel="noopener noreferrer">
              Layanan Google Play
            </Link>
          </li>
          <li>
            <Link href="https://firebase.google.com/support/privacy" target="_blank" className="text-blue-500" rel="noopener noreferrer">
              Google Analytics untuk Firebase
            </Link>
          </li>
          <li>
            <Link href="https://firebase.google.com/support/privacy" target="_blank" className="text-blue-500" rel="noopener noreferrer">
              Firebase Crashlytics
            </Link>
          </li>
          <li>
            <Link href="https://firebase.google.com/support/privacy" target="_blank" className="text-blue-500" rel="noopener noreferrer">
              Firebase Cloud Messaging
            </Link>
          </li>
        </ul>

        <p className="mt-4">Penyedia Layanan dapat mengungkapkan Informasi yang Disediakan Pengguna dan Dikumpulkan Secara Otomatis:</p>

        <ul className="list-disc	px-8">
          <li>sebagaimana diwajibkan oleh hukum, seperti untuk mematuhi panggilan pengadilan, atau proses hukum serupa;</li>
          <li>
            ketika mereka yakin dengan itikad baik bahwa pengungkapan diperlukan untuk melindungi hak-hak mereka, melindungi keselamatan Anda atau keselamatan orang lain,
            menyelidiki penipuan, atau menanggapi permintaan pemerintah;
          </li>
          <li>
            dengan penyedia layanan terpercaya mereka yang bekerja atas nama mereka, tidak menggunakan informasi yang kami ungkapkan kepada mereka secara independen, dan
            telah setuju untuk mematuhi aturan yang ditetapkan dalam pernyataan privasi ini.
          </li>
        </ul>

        <p className="font-semibold text-lg mt-8 mb-2">Hak untuk Memilih Tidak Ikut Serta</p>
        <p>
          Anda dapat menghentikan semua pengumpulan informasi oleh Aplikasi dengan mudah dengan menghapus instalasinya. Anda dapat menggunakan proses penghapusan
          instalasi standar yang mungkin tersedia sebagai bagian dari perangkat seluler Anda atau melalui pasar atau jaringan aplikasi seluler.
        </p>

        <p className="font-semibold text-lg mt-8 mb-2">Perubahan Kebijakan</p>
        <p>
          Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu dengan alasan apapun. Penyedia Layanan akan memberitahu Anda tentang perubahan apapun pada Kebijakan
          Privasi dengan memperbarui halaman ini dengan Kebijakan Privasi yang baru. Anda disarankan untuk membaca Kebijakan Privasi ini secara teratur untuk mengetahui
          perubahan apapun, karena penggunaan yang berkelanjutan dianggap sebagai persetujuan atas semua perubahan.
        </p>
        <p className="font-semibold italic underline underline-offset-2 mt-2">Kebijakan privasi ini berlaku sejak 08 Mei 2024.</p>

        <p className="font-semibold text-lg mt-8 mb-2">Kontak</p>
        <p>
          Jika Anda memiliki pertanyaan mengenai privasi saat menggunakan Aplikasi, atau memiliki pertanyaan mengenai praktik-praktiknya, silakan hubungi Penyedia Layanan
          melalui email di pantauai.id@gmail.com.
        </p>

        <p className="font-semibold text-lg mt-8 mb-2">Persetujuan Anda</p>
        <p>
          Dengan menggunakan Aplikasi, Anda menyetujui pemrosesan informasi Anda sebagaimana diatur dalam Kebijakan Privasi ini sekarang dan sebagaimana telah diubah oleh
          kami.
        </p>
      </div>
    </section>
  );
}
