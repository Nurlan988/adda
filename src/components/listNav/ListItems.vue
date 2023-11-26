<template>
    <ul class="list list-items">
        <ListItemSetting v-for="item in items" :key="item.id" :item="item"  :listId="props.listId"/>
    </ul>
</template>

<script setup>
import ListItemSetting from './ListItemSetting.vue';
import { listById} from '../../helpers/listById'

const props = defineProps({
    listId: Number,
})
const items = listById(props.listId).items;

</script>

<style scoped>
.list-items{
    margin-left: 50px;
    display: flex;
    flex-direction: column;
}
</style>