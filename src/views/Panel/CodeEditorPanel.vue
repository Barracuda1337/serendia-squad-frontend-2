<template>
  <div class="share">
    <div class="header text-center mb-4">
      <h1 class="text-4xl font-bold">Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus
        magni ea nemo laboriosam doloribus commodi deserunt nihil? Ut est neque
        ipsa repellat assumenda, ipsam libero rem natus veniam quibusdam.
      </p>
    </div>
    <div class="content flex flex-wrap">
      <div class="w-full sm:w-4/6 p-4">
        <input
          class="w-full font-semibold text-xl sm:text-2xl p-4 rounded bg-c2 transition focus:outline-none focus:ring focus:ring-c3"
          v-model="code.name"
          placeholder="Kod Adı..."
        />
      </div>
      <div class="w-full sm:w-2/6 p-4">
        <button
          class="text-xl sm:text-2xl font-semibold p-4 bg-c2 rounded w-full transition focus:outline-none hover:bg-c3 relative"
          @click="active = !active"
        >
          Kategori: {{ code.category }}
          <CustomDropdown
            class="w-full"
            :status="active"
            :items="[
              { name: 'Elmas', onClick: (v) => (code.category = v) },
              { name: 'Altın', onClick: (v) => (code.category = v) },
              { name: 'Normal', onClick: (v) => (code.category = v) },
            ]"
          />
        </button>
      </div>
      <div class="w-full p-4">
        <input
          class="w-full font-semibold text-xl sm:text-2xl p-4 rounded bg-c2 transition focus:outline-none focus:ring focus:ring-c3"
          v-model="code.description"
          placeholder="Kod Açıklaması..."
        />
      </div>
      <div class="w-full text-white p-4">
        <div class="w-full font-semibold text-xl sm:text-2xl p-4 rounded bg-c2">
          <h3>Sayfa İçeriği:</h3>
          <VueEditor class="font-medium" v-model="code.content" />
        </div>
      </div>
      <div class="w-full p-4">
        <div class="w-full font-semibold text-xl sm:text-2xl p-4 rounded bg-c2">
          <h3>Kod:</h3>
          <editor
            class="w-full p-2 rounded bg-c2"
            v-model="code.code"
            @init="editorInit"
            lang="javascript"
            theme="merbivore_soft"
            width="100%"
            height="500px"
          ></editor>
        </div>
      </div>
      <div class="w-full p-4 flex justify-end">
        <button
          class="p-4 bg-green-500 cursor-pointer transition hover:bg-green-600 w-48 transform hover:scale-105 rounded m-1 focus:outline-none"
        >Paylaş</button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import CustomDropdown from "@/components/Dropdowns/CustomDropdown.vue";
import CodeService from "@/services/CodeService.js";

export default {
  async mounted() {
    await this.beginPage();
    this.$emit("overlay", false);
  },

  components: {
    VueEditor,
    CustomDropdown,
    editor: require("vue2-ace-editor"),
  },

  methods: {
    editorInit: function () {
      require("brace/ext/language_tools");
      require("brace/mode/javascript");
      require("brace/theme/merbivore_soft");
      require("brace/snippets/javascript");
    },

    async beginPage() {
      let type = this.$route.query.type;
      if (!type) {
        this.$emit("add:toast", {
          name: "HATA",
          description: "Sayfaya giriş yapılırken tanımsız bir tip belirlendi.",
          delay: 7500,
          color: "red-600",
        });
        return;
      }

      if (type == "share") {
        return;
      }

      if (type == "edit") {
        let id = this.$route.query.id;
        if (!id) {
          return;
        }
        this.code = await CodeService.getCode(id);
      }
    },
  },
  data() {
    return {
      code: {
        name: null,
        description: null,
        code: null,
        content: null,
        category: "Seçilmedi",
      },
      type: null,
      active: false,
    };
  },
};
</script>

<style lang="scss">
.quillWrapper {
  [type="button"] * {
    stroke: whitesmoke !important;
  }

  [type="button"]:hover * {
    stroke: rgba(245, 245, 245, 0.699) !important;
  }

  [role="button"] * {
    stroke: whitesmoke !important;
  }

  [role="button"]:hover * {
    stroke: rgba(245, 245, 245, 0.699) !important;
  }

  .ql-picker-label::before {
    color: whitesmoke;
  }
}
</style>
