<template>
    <li class="list">
        <div class="lists-arrow" :class="list?.checked ?  'active' : ''"></div>
        <input type="checkbox" :id="`listId${listId}`" class="list-checkbox" :checked="list.checked" :value="list.checked" @input="selectList">
        <label :for="`listId${listId}`">list {{ listId }}</label>
    </li>
    <ListItems v-if="list?.checked" :listId="listId"/>
</template>

<script setup>
import {useListsStore} from '../../store/index'
import ListItems from './ListItems.vue'

const store = useListsStore();

const props = defineProps({
    list: Object,
});

const list = props.list;
const listId = list.id;

const selectList = () => {
    store.listCheckedToggle(listId)
}

</script>

<style scoped>
.lists-arrow{
    width: 10px;
    height: 10px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    transition: transform .3s ease-in-out;
    margin: 10px;
}

.lists-arrow.active{
    transform: rotate(45deg);
    transition: transform .3s ease-in-out;
}
.list-checkbox{
    margin-right: 5px;
}
</style>