import { action, observable } from 'mobx';
import { applyAction, applyPatch, applySnapshot } from 'mobx-state-tree';

class HistoryStore {
    @observable
    snapshots = [];

    @observable
    actions = [];

    @observable
    patches = [];

    @observable
    recording = true;

    @action
    pushPatch = (s, store) => {

        if (!this.recording) {
            return;
        }

        this.actions.unshift({
            data: s,
            replay: () => {
                this.recording = false;
                applyPatch(store, s);
                this.recording = true;
            }
        });
    };

    @action
    pushAction = (s, store) => {

        if (!this.recording) {
            return;
        }

        this.actions.unshift({
            data: s,
            replay: () => {
                this.recording = false;
                applyAction(store, s);
                this.recording = true;
            }
        });
    };

    @action
    pushSnapshot = (s, store) => {
        if (!this.recording) {
            return;
        }

        this.snapshots.unshift({
            data: s,
            replay: () => {
                this.recording = false;
                applySnapshot(store, s);
                this.recording = true;
            }
        });
    };
}

export default HistoryStore;
