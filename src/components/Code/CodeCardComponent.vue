<template>
  <router-link
    tag="div"
    to="/codes/code/1"
    class="lg:w-2/6 md:w-3/6 sm:w-6/6 p-4"
  >
    <div
      class="
        flex flex-col
        bg-c2
        w-full
        h-full
        p-2
        rounded-md
        transition
        transform
        hover:scale-105
        hover:bg-c3
        cursor-pointer
      "
    >
      <h1 class="text-xl font-semibold mb-2">Arama Komutu</h1>
      <p class="flex-grow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, rem nam.
        Provident illum pariatur ipsum officia et voluptatem cum ipsam optio
        inventore! Libero recusandae delectus odio hic pariatur rem aspernatur?
      </p>
      <div class="flex flex-row mt-2 w-full items-center">
        <div class="w-4/6 flex flex-row w-full">
          <div id="heart" class="flex items-center text-l mx-1">
            <svg height="24px" width="24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
            10
          </div>
          <div id="comments" class="flex items-center text-l mx-1">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z"
              />
            </svg>
            10
          </div>
          <div id="eye" class="flex items-center text-l mx-1">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
              />
            </svg>
            10
          </div>
        </div>
        <div class="w-2/6 flex flex-row w-full justify-end items-center">
          <img
            class="h-8 rounded-full mr-1"
            src="https://cdn.discordapp.com/avatars/558016135052787773/ee15868c2722d7e71af3aa35b3623f21.webp"
          />
          <span class="font-medium">Alosha#3779</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    description: String,
    like: Number,
    comments: Number,
    view: Number,
    author: {
      id: String,
      name: String,
      avatar: String,
    },
  },
};
</script>
