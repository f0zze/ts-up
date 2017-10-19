import { types } from 'mobx-state-tree';
import UserModel from './views/User/UserModel';

interface IApplicationStore {}

const store = types.model({
    user: types.reference(UserModel)
});
