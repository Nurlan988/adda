import { computed, onMounted, ref } from "vue";
import { defineStore } from "pinia";

export const useListsStore = defineStore("lists", () => {
    const lists = ref([
        {
            items: [
                {
                    count: 10,
                    color: "#ff0000",
                    checked: true,
                    id: 11,
                },
                {
                    count: 16,
                    color: "#ffff00",
                    checked: true,
                    id: 12,
                },
                {
                    count: 24,
                    color: "#00ff00",
                    checked: true,
                    id: 13,
                },
                {
                    count: 5,
                    color: "#0000ff",
                    checked: true,
                    id: 14,
                },
            ],
            checked: false,
            id: 1,
            isShered: false,
        },
        {
            items: [
                {
                    count: 21,
                    color: "#ff0000",
                    checked: true,
                    id: 21,
                },
                {
                    count: 6,
                    color: "#ffff00",
                    checked: true,
                    id: 22,
                },
                {
                    count: 12,
                    color: "#00ff00",
                    checked: true,
                    id: 23,
                },
                {
                    count: 0,
                    color: "#0000ff",
                    checked: true,
                    id: 24,
                },
                {
                    count: 10,
                    color: "#000000",
                    checked: true,
                    id: 25,
                },
            ],
            checked: false,
            id: 2,
            isShered: false,
        },
        {
            items: [
                {
                    count: 11,
                    color: "#ff0000",
                    checked: true,
                    id: 31,
                },
                {
                    count: 31,
                    color: "#ffff00",
                    checked: true,
                    id: 32,
                },
                {
                    count: 22,
                    color: "#00ff00",
                    checked: true,
                    id: 33,
                },
                {
                    count: 12,
                    color: "#0000ff",
                    checked: true,
                    id: 34,
                },
                {
                    count: 5,
                    color: "#000000",
                    checked: true,
                    id: 35,
                },
                {
                    count: 15,
                    color: "purple",
                    checked: false,
                    id: 36,
                },
            ],
            checked: false,
            id: 3,
            isShered: false,
        },
        {
            items: [
                {
                    count: 15,
                    color: "#ff0000",
                    checked: true,
                    id: 41,
                },
                {
                    count: 12,
                    color: "#ffff00",
                    checked: true,
                    id: 42,
                },
                {
                    count: 35,
                    color: "#00ff00",
                    checked: true,
                    id: 43,
                },
                {
                    count: 25,
                    color: "#800080",
                    checked: true,
                    id: 44,
                },
            ],
            checked: false,
            id: 4,
            isShered: false,
        },
        {
            items: [
                {
                    count: 14,
                    color: "#ff0000",
                    checked: true,
                    id: 51,
                },
                {
                    count: 14,
                    color: "#ffff00",
                    checked: true,
                    id: 52,
                },
                {
                    count: 20,
                    color: "#00ff00",
                    checked: true,
                    id: 53,
                },
                {
                    count: 13,
                    color: "#0000ff",
                    checked: true,
                    id: 54,
                },
                {
                    count: 9,
                    color: "#000000",
                    checked: true,
                    id: 55,
                },
            ],
            checked: false,
            id: 5,
            isShered: false,
        },
    ]);
    const itemsByList = ref([]);
    const allLists = computed(() => lists.value);
    const getAllItemsByList = (listId) => {
        lists.value.forEach((list) => {
            if(list.checked){
                if (list.id === listId) {
                    list.items.forEach(item => {
                        let sq = 0;
                        while(sq < item?.count){
                            sq++
                            itemsByList.value.push(item?.color);
                        }
                    })
                    function randomSort() {
                        return Math.random() - 0.5;
                    }
                    itemsByList.value.sort(randomSort);
                }
            }
            if(list.isShered){
                itemsByList.value=[]
            }
        });
    };
    const listCheckedToggle = (listId) => {
        lists.value.forEach((list) => {
            if (list.id === listId) {
                list.checked = !list.checked;
            }
            if (list.checked) {
                list.items.forEach((item) => (item.checked = true));
            }
        });
    };
    const sharedToggler = (list) => {
        getAllItemsByList(list.id);
        allLists.value.forEach((l) => {
            if (l.id === list.id) {
                l.isShered = !l.isShered;
            }
        });
    };
    const everyItemsUnchecked = (items, itemId, listId) => {
        const item = items.find((item) => item.id === itemId);
        item.checked = !item.checked;
        const checks = items.map((item) => item.checked);
        const unChecked = checks.every((item) => !item);
        if (unChecked) {
            lists.value.forEach(
                (list) => list.id === listId && (list.checked = false)
            );
        }
    };
    const itemChangeValue = (value, keyName, itemId, listId) => {
        lists.value.forEach((list) => {
            if (list.id == listId) {
                list.items.forEach((item) => {
                    if (item.id === itemId) {
                        item[keyName] = typeof item[keyName] === "number" ? +value : value;
                    }
                });
            }
        });
    };
    const removeItemHandler = (listId, item) => {
        allLists.value.forEach((list) => {
            if (list.id === listId) {
                list.items.forEach((i) => {
                    if (i.id === item.id) {
                        i.count--;
                    }
                });
            }
        });
    };
    const unCheckedItem = (itemId, listId) => {
        allLists.value.forEach((list) => {
            if (list.id == listId) {
                list.items.forEach((item) => {
                    if (item.id === itemId) {
                        item.checked = false;
                    }
                });
            }
        });
    };

    return {
        lists,
        sharedToggler,
        allLists,
        itemsByList,
        getAllItemsByList,
        listCheckedToggle,
        everyItemsUnchecked,
        itemChangeValue,
        removeItemHandler,
        unCheckedItem,
    };
});
