import {useListsStore} from '../store/index' 

export function listById(id){
    const lists = useListsStore();
    
    const list = lists.allLists.find(list => list.id === id);

    return list;
}