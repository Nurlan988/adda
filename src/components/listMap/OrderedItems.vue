<template>
    <div class="d-flex f-wrap">
        <template 
            v-for="(item, index) in sheredItems" 
            :key="index"
        >
            <Square
                :color="item"
                :index="index"
                @click="sheredItems.splice(index, 1);"
            />
        </template>
        
    </div>
</template>

<script setup>
import Square from './Square.vue'
import {useListsStore} from '../../store/index'

const store = useListsStore();

const props = defineProps({
    items: Object,
    listId: Number,
});

const sheredItems = store.itemsByList;
</script>


<style scoped>
.d-flex{
    display: flex;
}
.f-wrap{
    flex-wrap: wrap;
}
</style>