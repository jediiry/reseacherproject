<template>
  <div
    :class="clasStyle"
    class="origin-top-right absolute  w-56  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 profile"
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["clasStyle"],
};
</script>

<style></style>
