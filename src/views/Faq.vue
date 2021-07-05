<template>
  <div id="faq" class="pb-4">
    <div class="text-center mb-4">
      <h1 class="text-4xl font-bold">S.S.S.</h1>
      <p>Site hakkında bilmediğiniz çoğu bilgiye buradan erişebilirsiniz.</p>
    </div>
    <div class="block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Nasıl kodlara erişebilirim?
      </h1>
      <p class="my-2">
        Sunucu içerisindeki özel kodlar sırasıya
        <span class="bg-red-500 p-1 rounded">Hazır Altyapılar</span>,
        <span class="bg-blue-500 p-1 rounded">Elmas</span>,
        <span class="bg-yellow-500 p-1 rounded">Altın</span> ve
        <span class="bg-gray-500 p-1 rounded">Normal</span> olarak kategori
        edilmiştir.
      </p>
      <p class="my-2">
        Bu kategorilere erişebilmek için
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span>'ın Discord
        sunucusunda gerekli yetkileri almış olmanız gerekmektedir.
      </p>

      <ol>
        <li class="mb-2">
          1- <span class="bg-red-500 p-1 rounded">Hazır Altyapılar</span>: 50
          Davet
        </li>
        <li class="my-2">
          2- <span class="bg-blue-500 p-1 rounded">Elmas</span>: 30 Davet
        </li>
        <li class="my-2">
          3- <span class="bg-yellow-500 p-1 rounded">Altın</span>: 20 Davet
        </li>
        <li class="mt-2">
          4- <span class="bg-gray-500 p-1 rounded">Normal</span>: Şart yok
        </li>
      </ol>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Nasıl Yardım Alabilirim?
      </h1>
      <p class="my-2">
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span>'ın Discord
        sunucuna katılıp oradaki yardım kanalından yardım alabilirsin.
      </p>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Yanlış çalışan bir kod gördüm. Ne yapmalıyım?
      </h1>
      <p class="my-2">
        Dilersen bu sorunu site üzerindeki
        <span class="p-1 bg-red-600 rounded">HATA RAPORLAMA</span> üzerinden
        bize bildirebilirsin ya da
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span>'a gelip
        yetkililerimize bu kodun çalışıp çalışmadığını sorabilirsin.
      </p>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        İstek kodlarım var. Bu kodları nasıl yaptırabilirim?
      </h1>
      <p class="my-2">
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span> sunucusu
        üzerinden
        <span
          class="rounded p-1 bg-yellow-500"
          v-text="'!istek <isteğin>'"
        ></span>
        komutunu kullanarak istediğin kodu yetkililerimizden rica edebilirsin.
        Fazla oy alan kodlar yapılmaya daha yakın kodlardır.
      </p>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Site üzerinde bir hata tespit ettim, kime başvurmalıyım?
      </h1>
      <p class="my-2">
        Site üzerindeki bulduğun hatayı bize bildirmek için
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span>
        sunucusuna veya Alosha#3779'e bildirebilirsin. Hataları bildirdiğin için
        teşekkürler!
      </p>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Booster kişiler ne gibi özellikler alıyor?
      </h1>
      <p class="my-2">
        Booster üyelerimiz için aşağıdaki gibi avantajlarımız mevcut. (Tek boost
        basmak yeterlidir.)
      </p>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Bir kodun içeriği ToS'a uymuyor veya sunucuya zarar verebilecek
        içerikler taşıyorsa ne yapmalıyım?
      </h1>
      <p class="my-2">
        Bu kodu kullanmadan hemen önce bize başvurmalısın. <span class="bg-purple-500 rounded p-1">Serendia Squad</span>
        sunucusuna gelerek bize kodu bildir ve senin için incelemelere
        başlayalım.
      </p>
    </div>
    <div class="mt-4 block rounded bg-c2 w-full p-4">
      <h1 class="text-2xl font-semibold text-center sm:text-left">
        Projelerimi nasıl paylaşabilirim?
      </h1>
      <p class="my-2">
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span> sunucusunda #projects odasındaki paylaşımlara dahil olmak
        istersen yapman gereken bir kaç kural var. Bu kuralları öğrenmek için
        projeler odasına gidip sabitlenen mesajları okuman yeterli olacak.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    this.$emit("overlay", false);
  },
};
</script>