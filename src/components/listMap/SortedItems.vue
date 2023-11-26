<template>
    <div class="square" :style="{ backgroundColor: props.item.color }" @click="removeSquare"></div>
</template>

<script setup>
import {useListsStore} from '../../store/index'

const {removeItemHandler} = useListsStore();

const props = defineProps({
    item: Object,
    listId: Number,
});

const removeSquare = () => {
    removeItemHandler(props.listId, props.item)
}

</script>

<style scoped>
</style>