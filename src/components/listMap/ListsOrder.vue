<template>
    <li class="list-order">
        <div class="list-header">
            <h3 class="list-header-title">List {{ listId }}</h3>
            <button 
                class="list-header-button" 
                @click="sheredSquareHandleer"
                v-if="list?.checked"
            >{{ list.isShered ? 'To ordered' : 'To shered' }}</button>
        </div>
        <div 
            v-if="list?.checked"
            class="list-main"
            :style="{display: list.isShered ? 'flex' : 'block'}" 
        >
            <template v-if="!list.isShered">
                <ListItems v-for="item in list.items" :key="item.id" :item="item" :listId="listId"/>
            </template>
            <template v-else>
                <OrderedItems :items="list.items" :listId="listId"/>
            </template>
        </div>
    </li>
</template>

<script setup>
import {useListsStore} from '../../store/index'
import ListItems from './ListItems.vue'
import OrderedItems from './OrderedItems.vue';

const store = useListsStore();
const props = defineProps({
    list: Object,
});

const list = props.list;
const listId = list.id;

const sheredSquareHandleer = () => {
    store.sharedToggler(list);
}


</script>

<style scoped>
.list-order{
    border: 1px solid #000;
    padding: 8px;
}
.list-order:not(:last-child){
    margin-bottom: 10px;
}
.list-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.list-header-title{
    font-size: 20px;
    font-weight: 400;
}
.list-header-button{
    color: #FFF;
    background-color: #1ca1f2;
    border-radius: 6px;
    padding: 4px 8px;
    cursor: pointer;
}
</style>