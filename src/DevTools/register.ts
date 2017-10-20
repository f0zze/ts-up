import { applyAction, applyPatch, applySnapshot, getSnapshot, onAction, onPatch, onSnapshot } from 'mobx-state-tree';
import { historyStore, userListStore } from '../index';

export default () => {
    onSnapshot(userListStore, s => historyStore.pushSnapshot(s, userListStore));
    onPatch(userListStore, s => historyStore.pushPatch(s, userListStore));
    onAction(userListStore, s => historyStore.pushAction(s, userListStore));

// add initial snapshot
    historyStore.pushSnapshot(getSnapshot(userListStore), userListStore);
}
