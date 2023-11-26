<template>
    <div class="list-items" v-if="item.checked">
        <SortedItems v-for="c of item.count" :key="c" :item="item" :listId="listId"/>
        <!-- <OrderedItems :item="item"/> -->
    </div>
</template>

<script setup>
import SortedItems from './SortedItems.vue';
// import OrderedItems from './OrderedItems.vue';

const props = defineProps({
    item: Object,
    listId: Number,
});

const item = props.item;


</script>

<style scoped>
.list-items{
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
}
.list-items:not(:last-child){
    margin-bottom: 5px;
}
</style>