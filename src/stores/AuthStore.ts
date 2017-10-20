import { types } from 'mobx-state-tree';
import User from '../model/User';

export const AuthStore = types
    .model('AuthStore', {
        logged: types.maybe(User)
    })
    .actions(self => {
        function logOut() {
            self.logged = null;
        }

        return { logOut };
    })
    .views(self => ({
        get loggedName(): string {
            return self.logged.name;
        }
    }));

export type IAuthStore = typeof AuthStore.Type;
