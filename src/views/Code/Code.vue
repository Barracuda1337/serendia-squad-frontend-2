<template>
  <div class="flex flex-col w-full my-6" id="code">
    <div class="flex flex-col items-center text-center my-2" id="header">
      <h1 class="text-5xl font-semibold mb-4">Shely'i Yarma Komutu</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsam
        natus officia quidem magni inventore, laudantium, minima quisquam
        mollitia similique ipsa cumque eum doloribus hic maxime velit obcaecati
        aut nihil.
      </p>
    </div>
    <div
      class="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-full"
    >
      <div class="lg:w-2/6 md:w-full p-2">
        <div class="bg-c2 p-4 rounded">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat vero
          molestiae aspernatur in repudiandae placeat maiores quasi maxime
          numquam! Consequuntur similique inventore sint cumque est nam impedit
          sit odio ratione?
        </div>
      </div>
      <div class="lg:w-2/6 md:w-full sm:w-full p-2">
        <div class="bg-c2 p-4 rounded">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat vero
          molestiae aspernatur in repudiandae placeat maiores quasi maxime
          numquam! Consequuntur similique inventore sint cumque est nam impedit
          sit odio ratione?
        </div>
      </div>
      <div class="lg:w-2/6 md:w-full sm:w-full p-2">
        <div class="bg-c2 p-4 rounded">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat vero
          molestiae aspernatur in repudiandae placeat maiores quasi maxime
          numquam! Consequuntur similique inventore sint cumque est nam impedit
          sit odio ratione?
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full p-2">
      <div class="w-full p-4 bg-c2 rounded" id="code">
        <highlightjs theme language="javascript" :code="code" />
        <div class="w-full mt-4">
          <button
            class="
              focus:outline-none
              m-1
              p-2
              w-24
              bg-c3
              transition
              rounded
              hover:bg-c1
            "
            @click="copyText(code)"
          >
            Kopyala
          </button>
          <button
            class="
              focus:outline-none
              float-right
              m-1
              p-2
              w-24
              bg-red-600
              transition
              rounded
              hover:bg-red-900
            "
          >
            Sil
          </button>
          <button
            class="
              focus:outline-none
              float-right
              m-1
              p-2
              w-24
              bg-c3
              transition
              rounded
              hover:bg-c1
            "
          >
            Düzenle
          </button>
        </div>
      </div>
    </div>
    <div class="w-full p-2">
      <div class="flex flex-col w-full bg-c2 p-4 rounded">
        <h1 class="uppercase text-2xl font-medium mb-2">Yorumlar</h1>
        <textarea
          v-model="comment"
          class="
            bg-c3
            transition
            text-2xl
            p-2
            focus:outline-none
            focus:ring focus:ring-c1
            focus:border-c3
            h-min
            rounded
          "
          placeholder="Yorumunu belirt..."
        ></textarea>

        <div class="w-full mt-4">
          <button
            class="
              focus:outline-none
              float-right
              m-1
              p-2
              w-24
              bg-c3
              transition
              rounded
              hover:bg-c1
            "
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from "@/services/Clipboard.js";
import CodeService from "@/services/CodeService.js";

export default {
  async mounted() {
    this.$emit("overlay", false);
  },

  props: {
    user: {
      type: Object,
      default: null,
      required: true,
    },
  },

  methods: {
    deleteCode() {
      if (!this.code.id || !this.user || this.user == null) {
        return;
      }

      CodeService.deleteCode(this.code.id);
    },
    copyText(text) {
      this.$emit("add:toast", {
        name: "Panoya Kopyalandı",
        description: "Kod başarılı bir şekilde panoya kopyalandı.",
        delay: 2500,
        color: "black",
      });
      Clipboard.copyTextToClipboard(text);
    },
  },

  data() {
    return {
      active: false,
      code: `const { Mongosha } = require("mongosha");

const client = await Mongosha.connect("MONGODB_CONNECTION_STRING");
const db = client.database("example_database");

const collection = db.collection("users");
const data = collection.data("user_id_0");

// set and delete
data.set("identify", { "name": "Mert", "surname": "Yılmaz" }); // => { "name": "Mert", "surname": "Yılmaz" }
data.set("wallet", { price: 1500 }); // => { price: 1500 }
data.set("adress", "Europe/Istanbul"); // => "Europe/Istanbul"
data.set("mail", "aloshai@aloshai.com"); // => "aloshai@aloshai.com"

data.delete("mail"); // => Promise<void>

// addition and subtraction 
data.add("wallet", 10); // => 1510
data.subtract("wallet", 1000); // => 510

// array operations
data.push("inventory", "Sword"); // => "Sword"
data.pushRange("inventory", ["Shield", "Gum", "Gum", "Phone"]); // => ["Shield", "Gum", "Gum", "Phone"]
data.pushRange("favorite_numbers", [1, 2, 3, 4, 10, 5, 30, 6, 10]);

data.pull("inventory", "Sword"); // Promise<void>
data.pullAll("inventory", "Gum"); // Promise<void>

// sort
data.sort("favorite_numbers", "ASC"); // => [1, 2, 3, 4, 5, 6, 10, 10, 30]
data.sort("favorite_numbers", "DESC"); // => [30, 10, 10, 6, 5, 4, 3, 2, 1]

// has path any value?
data.has("wallet"); // => true
data.has("mail"); // => false
data.has("otherField"); // => false
`,
      comment: null,
    };
  },
};
</script>
