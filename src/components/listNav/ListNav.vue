<template>
    <ul class="listNav">
        <ListsOrder v-for="list in store.allLists" :key="list.id" :list="list"/>
    </ul>
</template>

<script setup>
import {useListsStore} from '../../store/index' 
import ListsOrder from './ListsOrder.vue'

const store = useListsStore();

</script>
