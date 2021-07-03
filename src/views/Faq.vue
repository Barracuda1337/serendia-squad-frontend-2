<template>
  <div id="faq">
    <div class="text-center mb-4">
      <h1 class="text-4xl font-bold">S.S.S.</h1>
      <p>Site hakkında bilmediğiniz çoğu bilgiye buradan erişebilirsiniz.</p>
    </div>
    <div class="block rounded bg-c2 w-full p-4">
      <h1 class="text-3xl font-semibold text-center sm:text-left">
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
      <h1 class="text-3xl font-semibold text-center sm:text-left">
        Nereden Yardım Alabilirim?
      </h1>
      <p class="my-2">
        <span class="bg-purple-500 rounded p-1">Serendia Squad</span>'ın Discord
        sunucuna katılıp oradaki yardım kanalından yardım alabilirsin.
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