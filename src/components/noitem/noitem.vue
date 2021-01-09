<template>
  <div class="grid grid-cols-1 p-10  justify-center">
    <div>
      <p class="pink font-bold">{{ title }}</p>
      <div class="flex justify-center flex-col w-3/4 m-auto">
        <img
          class="h-64  justify-self-center"
          src="../../assets/icon/Frame.svg"
          alt=""
        />
        <p class="text-center text-gray-400 mt-10">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "noitem",
  props: ["message", "title"],
};
</script>

<style></style>
