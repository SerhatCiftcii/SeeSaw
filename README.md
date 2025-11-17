Proje Canlıdaki Link.
https://serhatciftcii.github.io/SeeSaw/


Tahterevalli Simülasyonu:

Bu proje, JavaScript, HTML ve CSS kullanarak  fizik prensibine dayalı tahterevalli (seesaw) simülasyonudur. Amacı, eklenen ağırlıkların tork etkisine göre tahterevallinin eğimini (açısını) hesaplamak ve görselleştirmektir.

 Temel Geliştirme Mantığı

1.  Fizik ve Hesaplamalar:

Tork (Denge) Hesaplaması: Tahterevalliye her tıklandığında, 1-10 kg arasında rastgele bir ağırlık eklenir. updateView() fonksiyonunda, her ağırlığın Merkeze Olan Uzaklığı x Ağırlığı çarpılarak Sol ve Sağ Torklar toplanır.

Açı Sınırı: Tahterevalli, tork farkına orantılı olarak eğilir, ancak görevde belirtilen sınır olan  -30 ve +30 derece dışına çıkmaz.

Kod: targetAngle = Math.max(-30, Math.min(30, (rightTorque - leftTorque) / 10)); //angle değerini (const maxAngle = 30) olarak ayarladım.

Kalıcılık: Simülasyonun son durumu (tüm objeler) Local Storage kullanılarak tarayıcıda saklanır, böylece sayfa yenilense bile ilerleme kaybolmaz.

2. Görselleştirme ve Davranış:

Teknoloji: Harici bir kütüphane/framework (React, Angular ,Vue) kullanılmamıştır.

Akıcı Animasyon: Eğim değişimi anlık değil, requestAnimationFrame döngüsü ve tiltSpeed (0.1) ile yumuşak bir animasyonla sağlanmıştır.

Objelerin Düz Kalması: Tahterevalli eğilse bile, üzerindeki objelerin yatay kalması için zıt açıda dönüş uygulanmıştır.

Bilgi Paneli: Arayüzde anlık olarak Sol/Sağ Toplam Ağırlık, Objelerin Sayısı ve hesaplanan Hedef Açı (Target Angle) gösterilmektedir.

💡Ek Özellikler (Bonus):

Reset Butonu: Tek tıkla tüm objeleri, açıları ve Local Storage verilerini temizler.

Ağırlık Göstergeleri: Her bir objenin üzerinde atanan ağırlık değeri yazılıdır.

🛠️ Geliştirme Notları:

Geliştirme sırasında karşılaşılan ve çözümlenen önemli bir adım:

Info Panel Sıfırlama Eksikliği: Reset butonuna tıklandığında, tüm objeler silinmesine rağmen bilgi panelindeki (Info Panel) sayılar güncellenmiyordu. Bunun nedeni, resetButton  içinde updateView() fonksiyonunu çağırmayı unutmamdı. Bu eksiklik, sonradan yapılan bir geliştirme adımıyla (updateView() çağrısı eklenerek) giderilmiştir.


AI Kullanımı:


Toplama ve Filtreleme Mantığı: updateView() fonksiyonunda yer alan, sol ve sağ taraftaki ağırlıkları filtreleyerek (filter) toplayan (reduce)  yapının oluşturulmasında destek alınmıştır.

Görsel Düzenlemeler: CSS görsel düzenlemelerinin ( bilgi panelinin hizalanması ve objelerin estetiği) yazımında kısmi destek alınmıştır.

