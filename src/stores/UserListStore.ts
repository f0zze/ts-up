import { types } from 'mobx-state-tree';
import UserProfile from '../model/UserProfile';

export type IUserListStore = typeof UserListStore.Type;

export const UserListStore = types.model('UserListStore', {
    users: types.maybe(types.array(UserProfile))
});
