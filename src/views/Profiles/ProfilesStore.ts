import { types, process } from 'mobx-state-tree';
import UserProfile from './ProfileModel';
import userProfiles from '../../json/users.json';

export type IUserListStore = typeof UserListStore.Type;

export const UserListStore = types
    .model('UserListStore', {
        users: types.optional(types.array(UserProfile), [])
    })
    .actions(self => {
        const loadProfiles = process(function*() {
            self.users = yield new Promise(resolve => {
                setTimeout(() => {
                    resolve(userProfiles);
                }, 500);
            });
        });

        return { loadProfiles };
    });
