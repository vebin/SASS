<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <all-clue v-if="clueNav == '0' ? true : false"></all-clue>
    <my-clue v-if="clueNav == '1' ? true : false"></my-clue>
  </transition>
</template>
<script>
    import AllClue from './clues/items.vue'
    import MyClue from './clues/myitems.vue'
    export default {
        components: {
            AllClue,
            MyClue,
        },
        computed: {
          clueNav () {return this.$store.state.clueNav}
        },
        methods: {

        }
    }
</script>
<style>
    
</style>
