<template>
    <li class="list list-item-setting">
        <div>
            <input 
                class="item-checkbox" 
                type="checkbox" 
                :id="`itemId${itemId}`" 
                :checked="itemToggle" 
                :value="itemToggle"
                :disabled="disabled" 
                @input="toggleHandler">
            <label :for="`listId${itemId}`">item {{ item.id }}</label>
        </div>
        <div>
            <input type="number" class="item-input" :value="itemCount" @input="setCounterHandler" min="0">
        </div>
        <div>
            <input type="color" class="item-color" :value="itemColor" @input="setColorHandler">
        </div>
    </li>
</template>

<script setup>
import {useListsStore} from '../../store/index'
import { listById} from '../../helpers/listById'
import { computed, ref } from 'vue';

const store = useListsStore();

const props = defineProps({
    item: Object,
    listId: Number,
})

const listId = props.listId;
const itemId = props.item.id;
const itemToggle = computed(()=>props.item.checked);
const itemCount = computed(()=>props.item.count);
const itemColor = computed(()=>props.item.color);
const disabled = ref(false);

const list = listById(listId);
const items = list.items;

const toggleHandler = (e) => {
    store.everyItemsUnchecked(items, itemId, listId);
    store.itemChangeValue(e.target.checked, 'checked',  itemId, listId);
}
const setCounterHandler = (e) =>  {
    store.itemChangeValue(e.target.value, 'count',  itemId, listId);
    if(e.target.value == 0){
        store.unCheckedItem(itemId, listId);
        disabled.value = true;
    }else{
        disabled.value = false;
    }
}
const setColorHandler = (e) =>  {
    store.itemChangeValue(e.target.value, 'color',  itemId, listId);
}

</script>

<style scoped>
.list-item-setting{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item-input {
    width: 40px;
    margin: 0 20px;
    border: 1px solid black;
}
</style>