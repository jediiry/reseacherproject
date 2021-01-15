<template>
    <div class="hallOfFame_tab flex flex-row mb-10">
        <a href="" class="text-lg text-gray-400 mr-10 lg:ml-10">Program details</a>
        <a href="" class="text-lg text-gray-400 mr-10">Announcement</a>
        <a href="" class="text-lg text-gray-400 active_tab">Hall of fame</a>
    </div>
</template>

<script>
export default {
    name: 'tabcomponent'
}
</script>

<style>
@media only screen and (max-width: 44.69em) { /** 715px / 16 */
    .hallOfFame_tab a {
        font-size: 14px;
    }
}
</style>