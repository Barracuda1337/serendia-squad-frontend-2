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
          class="
            w-full
            font-semibold
            text-xl
            sm:text-2xl
            p-4
            rounded
            bg-c2
            transition
            focus:outline-none
            focus:ring focus:ring-c3
          "
          placeholder="Kod Adı..."
        />
      </div>
      <div class="w-full sm:w-2/6 p-4">
        <button
          class="
            text-xl
            sm:text-2xl
            font-semibold
            p-4
            bg-c2
            rounded
            w-full
            transition
            focus:outline-none
            hover:bg-c3
            relative
          "
          @click="active = !active"
        >
          Kategori: {{ kategori }}
          <CustomDropdown
            class="w-full"
            :status="active"
            :items="[
              { name: 'Elmas', onClick: (v) => (kategori = v) },
              { name: 'Altın', onClick: (v) => (kategori = v) },
              { name: 'Normal', onClick: (v) => (kategori = v) },
            ]"
          />
        </button>
      </div>
      <div class="w-full p-4">
        <input
          class="
            w-full
            font-semibold
            text-xl
            sm:text-2xl
            p-4
            rounded
            bg-c2
            transition
            focus:outline-none
            focus:ring focus:ring-c3
          "
          placeholder="Kod Açıklaması..."
        />
      </div>
      <div class="w-full text-white p-4">
        <div class="w-full font-semibold text-xl sm:text-2xl p-4 rounded bg-c2">
          <VueEditor class="font-medium" v-model="content" />
        </div>
      </div>
      <div class="w-full p-4">
        <textarea
          v-model="code"
          class="
            font-mono
            w-full
            font-semibold
            text-xl
            sm:text-2xl
            p-2
            rounded
            bg-c2
            transition
            focus:outline-none
            focus:ring focus:ring-c3
          "
          placeholder="Kod..."
        ></textarea>
      </div>
      <div class="w-full p-4">
        <div class="bg-c2 rounded p-4">
          <h1 class="mb-2 text-xl font-bold">Kod Çıktısı:</h1>
          <highlightjs
            class="font-mono"
            theme
            language="javascript"
            :code="code"
          />
        </div>
      </div>
      <div class="w-full p-4 flex justify-end">
        <button
          class="
            p-4
            bg-green-500
            cursor-pointer
            transition
            hover:bg-green-600
            w-48
            transform
            hover:scale-105
            rounded
            m-1
            focus:outline-none
          "
        >
          Paylaş
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import CustomDropdown from "@/components/Dropdowns/CustomDropdown.vue";

export default {
  mounted() {
    this.$emit("overlay", false);
  },
  components: {
    VueEditor,
    CustomDropdown,
  },

  data() {
    return {
      code: "",
      active: false,
      content: null,
      kategori: "Seçilmedi",
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
