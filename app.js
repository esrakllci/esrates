// Package.json dosyası js projelerimizin manifesto dosyası gibi düşünülebilir.
// Bizim oluşturduğumuz her bir uygulama aslında kendi içinde bir pakettir.
// Bir proje geliştirince bir modül geliştirmiş oluruz.
// Package.json ise bu uygulamanın ne gibi ekstra paketlere ihtiyaç duyacağını veya ne gibi ekstra özelliklere sahip olacağını tutar.
// Uygulamamız ne gibi paketlere bağımlı vs. gibi bilgiler package.json dosyası içinde tutulur.
// npm init terminalde yazarak package.json dosyasının npm tarafından oluşturulmasını sağlayabiliriz.
// daha sonra gelen alana package ismi verilir.
// npm'in sorduğu sorulara yanıt verilerek devam edilir.
// Projemizde belli descrptionlar olabilir. Bunları ekliyoruz.
// Enter description
// Ve bir dosya ismi gelir eğer enter dersek direkt olarak projemizin ana dosyası kabul edilir.
// Test command: test komutları
// Projemizde belli testler yazmak istiyorsak bu komutları buraya girmemiz gerekir.
// Şimdilik geçtik
// git repository: projemizin kaynak kodlarının barındığı bir github repository'si olabilir bunun adresi burada verilir.
// keywords: npmjs.com'da bu projeyi yayınladığımız zaman projemizin bulunmasını sağlayacak keywordleri buraya girebiliriz.
// author: yazar, kendi adımızı yazabiliriz. Eğer npm.jsde yayınlamak istiyorsanız uniq yani eşsiz bir isim vermeniz gerekmektedir.
// licence: enter yap direkt
// En son eklenen bilgilere göre bu şekilde bir package dosyası oluşsun mu diye sorar yes yazıp enter.
// Böylece package.json dosyası oluşmuş olur.
// Diyelim daha sonradan bunu değiştirmek istiyoruz örneğin projemizin ana dosyasının index.js olmasını istiyoruz package.jsonı açıp direkt olarak değiştirebiliriz.
// Package.json içindeki scriptlerden bahsedecek olursak büyük projelerde terminalden kullanacağımız komutlar olabilir.
// Bu komutları sürekli bir şekilde kullanmak istiyor olabiliriz ve aynı zamanda bu komutlarımız çok uzun olursa komutlarımızı yazmakta kullanabiliriz.
// Bu yüzden buraya yazıcağımız komutlarımızı key value değerlerine göre buradaki scriptsin altında yerleştirebiliriz.
// Örneğin burada package.json oluştururken bizden test komutumuzu istemişti.
// Daha sonradan ekleyebiliriz json içerisinde.
// Örneğin. "test": "echo \"Error: no test specified\" && exit 1", altına
// "esra":"echo 'Benim adım Esra'" şeklinde yazabiliriz.
// Bu komutu çalıştırmak için önce npm run esra şeklinde komut yazılır.
// Daha sonra terminalde çalıştırılır. Ve karşımıza "Benim adım Esra" yazısı çıkar.
// Burada index.js dosyası oluşturup içine console'da yazı yazdık ve terminalde node index.js yazdık.
// Bunu da scripts'in içine ekleyebiliriz.
// "start":"node index.js" bunu da json dosyasına yazmalıyız.
// Terminalde npm start yazarak bu dosyanın içeriğini görüntüleyebiliriz.
// Daha sonra npm install simple-is yazarak npm.js.com'dan paket indirme işlemimizi gerçekleştirdik.
// package.json dosyasında dependencies kısmı bağlı paket olarak indiğini ifade etmektedir.
// Projemizde hangi modülleri kullanıyorsak buraya dependecies olarak gelmektedir.
// Package-lock.json'ın anlamı projemize bir çok modül eklediğimiz zaman node modüles değişecektir.
// Her değiştiğinde package-lock.json dosyasında değişim işlenir.
// Yani bu dosyayı node modüles'ün değişimlerini gösteren bir tane lock dosyası olarak düşünebiliriz.
// Paket indirdiğimizde node modules'ün güncellendiğini görebiliriz.
// Dependencies neden package.json içerisinde bulundurulur?
// Örneğin uygulamalarda çok fazla modül kullanılmak istendiğinde modüller birbirlerinin bağımlılıklarıyla gelirler.
// Bir paketin çalışması için birden fazla farklı modül ile birlikte gelebilir.
// Ve bu node modules gittikçe büyüyecektir. Bu durumda projeyi bir servera atmak oldukça zorlaşacaktır.
// Peki ne yapılabilir?
// node modules silinebilir. Çünkü zaten hangi modüllere ihtiyaç olduğu package.json dosyası içerisindeki dependencies kısmında yer almaktadır.
// Terminalde npm install komutu yazıldığında node modules silinse bile dependencies'e göre modüller tekrar indirilecektir.
// Böylelikle node modules'ü server tarafına kesinlikle gerek olmamaktadır zaten node modules npm install sayesinde server tarafında node modules içindeki modülleri indirecektir.
// Development dependencies : Sadece geliştirme ortamında ihtiyaç duyulan paketler 
// Komutu npm install webpack-cli --save-dev
// Webpack cli indirilir.
// Ve devDependencies oluşturulur.
// Sadece geliştirme ortamında ihtiyaç duyulan paketler varsa production kısmında kullanılmayacaksa gösterilmeyecekse vs. kullanılır.