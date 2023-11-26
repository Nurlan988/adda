<template>
    <div 
        class="square" 
        :style="{backgroundColor: props.color}"
    ></div>
</template>

<script setup>


const props = defineProps({
    index: Number,
    color: String,
});


</script>


<style scoped>
</style>