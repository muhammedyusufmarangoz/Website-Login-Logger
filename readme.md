🇹🇷 Version

Js tek başına yeterlidir. Html bölümünde değişiklik sağlayabilirsiniz.

Webhook url almak için: Discorda giriş yapın > Sunucunuza girin > Sunucu ayarlarına tıklayın > Entegrasyonlar bölümüne tıklayın > Webhook seçeneğine tıklayın > Yeni Webhook tıklayın > Webhookunuz sayfaya eklendiğinde webhookunuza tıklayın > Webhookuna profil fotoğafı sseçebilirsiniz (opsiyonel) > Webhookunuza bir isim verin ve mesajları hangi kanala atacağnı seçin > Webhook urlsini kopyayın > script.js dosyasını açın ve **var webhook = 'WEBHOOK-URL';** bölümündeki WEBHOOK-URL yazını silip urlnizi yapışıtırın. > Js dosyaını web sitenize yükleyin

Test 
Web sitenize yükleme işleminden sonra giriş sağlayın ve discord üzerinde seçtiğniz kanala webhookunuz mesaj atıp atmadığnı kontrol edin.
Eğer mesaj gelmiyor ise loglarınızı tutacağnız başka bir sunucu açın ve kanalı herkese açık hale getirin.

🇺🇸 Version

Js alone is enough. You can make changes in the Html section.

To get webhook url: Login to Discord > Login to your server > Click on Server settings > Click on Integrations > Click on Webhook > Click on New Webhook > When your webhook is added to the page, click on your webhook > You can choose a profile photo for your webhook (optional) > Give your webhook a name and choose which channel to send messages to > Copy the webhook url > Open the script. js file and in **var webhook = 'WEBHOOK-URL';** delete WEBHOOK-URL and paste your url. > Upload the js file to your website

Test 
After uploading to your website, log in and check if your webhook is sending messages to the channel you selected on discord.
If not, open another server where you will keep your logs and make the channel public.
