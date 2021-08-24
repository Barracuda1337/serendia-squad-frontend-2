<template>
  <section class="w-full h-full">
    <div class="my-16 flex flex-col sm:flex-row justify-center items-center">
      <div class="w-72 mx-6">
        <div
          @click="select = 'codes'"
          class="
            cursor-pointer
            transition
            transform
            hover:scale-105
            w-full
            p-4
            rounded
            bg-c2
            text-center
          "
        >
          <lottie-player
            class="h-96"
            src="https://assets3.lottiefiles.com/packages/lf20_M4t9nS.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
          <h1 class="text-2xl tracking-widest font-medium uppercase">
            Kodları İncele
          </h1>
        </div>
      </div>
      <div class="w-72 mx-6">
        <div
          @click="select = 'badges'"
          class="
            cursor-pointer
            transition
            transform
            hover:scale-105
            w-full
            p-4
            rounded
            bg-c2
            text-center
          "
        >
          <lottie-player
            class="h-96"
            src="https://assets9.lottiefiles.com/packages/lf20_i4zw2ddg.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
          <h1 class="text-2xl tracking-widest font-medium uppercase">
            ROZETLER
          </h1>
        </div>
      </div>
      <div class="w-72 mx-6">
        <div
          @click="select = 'users'"
          class="
            cursor-pointer
            transition
            transform
            hover:scale-105
            w-full
            p-4
            rounded
            bg-c2
            text-center
          "
        >
          <lottie-player
            class="h-96"
            src="https://assets1.lottiefiles.com/packages/lf20_rw0hvilj.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
          <h1 class="text-2xl tracking-widest font-medium uppercase">
            KULLANICILAR
          </h1>
        </div>
      </div>
    </div>
    <CodeReviewModal v-if="select == 'codes'" @close="select = $event" />
    <BadgeManagementModal v-if="select == 'badges'" @close="select = $event" />
  </section>
</template>

<script>
import CodeReviewModal from "@/components/Panel/CodeReviewModal.vue";
import BadgeManagementModal from "@/components/Panel/BadgeManagementModal.vue";

export default {
  components: {
    CodeReviewModal,
    BadgeManagementModal,
  },

  data() {
    return {
      select: null,
      active: false,
    };
  },
  async mounted() {
    this.$emit("overlay", false);
  },
};
</script>
