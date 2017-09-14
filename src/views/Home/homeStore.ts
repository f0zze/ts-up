import { action, observable } from 'mobx';

class HomeStore {
    @observable title: string = 'This is default Home Page title';

    @action
    updateTitle = (title: string) => {
        this.title = title;
    };

    @action
    getHomeRoomCount() {
        return 1;
    }
}

const STORE_HOME = 'homeStore';

interface IHomeStoreProps {
    homeStore?: HomeStore;
}

export { HomeStore, IHomeStoreProps, STORE_HOME };
