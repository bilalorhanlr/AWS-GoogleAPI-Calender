# AWS Tabanlı Takvim Etkinlik Yönetim Uygulaması

Bu proje, AWS Lambda ve AWS EC2 gibi bulut hizmetlerini kullanarak geliştirilen işlevsel bir web uygulamasıdır. Uygulama, kullanıcıların Google API entegrasyonu ile takvim etkinliklerini görüntülemesine olanak tanır. Proje, arka uç işlevselliği sağlamakta olup, henüz bir ön yüz tasarımı içermemektedir.

## Proje Özellikleri

- **AWS Lambda**: Uygulama mantığı ve işlevselliği için sunucusuz mimari kullanılarak geliştirilmiştir. Lambda fonksiyonları, etkinlik verilerini almak ve yönetmek için kullanılır.
- **AWS EC2**: Uygulamanın barındırılması için EC2 sanal sunucuları kullanılmıştır. Bu sayede uygulama performansı artırılmış ve ölçeklenebilirlik sağlanmıştır.
- **Google API Entegrasyonu**: Kullanıcıların takvim etkinliklerine erişimi için Google Calendar API kullanılmıştır. Kullanıcılar, hesaplarına giriş yaparak etkinliklerini görebilir.
- **Giriş Paneli**: Kullanıcıların uygulamaya giriş yapabilmesi için bir kimlik doğrulama paneli mevcuttur.

## Gereksinimler

- AWS Hesabı
- Google API Hesabı
- Python 3.x (veya Lambda fonksiyonları için uygun diğer diller)
- AWS CLI (isteğe bağlı, komut satırı arayüzü için)

## Kullanım

1. **AWS Kurulumu**:
   - AWS Lambda ve AWS EC2'de gerekli servisleri oluşturun.
   - Lambda fonksiyonlarınızı Python ile yazın ve dağıtın.
   - EC2 üzerinde gerekli yapılandırmaları yaparak uygulamanızı barındırın.

2. **Google API Ayarları**:
   - Google Cloud Console üzerinden bir proje oluşturun ve Google Calendar API'yi etkinleştirin.
   - OAuth 2.0 istemci kimlik bilgilerinizi oluşturun ve uygulamanızda kullanmak üzere alın.

3. **Uygulamanın Çalıştırılması**:
   - Lambda fonksiyonlarınızı test edin ve etkinlik verilerini çekin.
   - EC2 sunucunuzda uygulamanızı çalıştırın.
   - Uygulamanıza giriş yapmak için giriş panelini kullanın ve takvim etkinliklerinizi görüntüleyin.

## Gelecek Planları

- **Frontend Geliştirme**: Uygulamanın kullanıcı arayüzü üzerinde çalışmak.
- **Ek Özellikler**: Kullanıcılara etkinlik ekleme, silme ve güncelleme gibi işlevsellikler eklemek.
- **Güvenlik İyileştirmeleri**: Kullanıcı verilerini korumak için güvenlik önlemlerini artırmak.

## Katkıda Bulunma

Herhangi bir öneri veya katkıda bulunmak için [bilalorhanlr](mailto:bilalorhanlr@example.com) ile iletişime geçebilirsiniz.

---

Bu proje, AWS ve Google API'leri ile bulut tabanlı uygulamalar geliştirmek isteyenler için iyi bir örnek teşkil etmektedir. Daha fazla bilgi için lütfen dokümantasyonumuza veya AWS ve Google API belgelerine başvurun.
