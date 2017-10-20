import { types } from 'mobx-state-tree';

export interface IUser {
    id: number;
    name: string;
}

const User = types.model<IUser>('User', {
    id: types.identifier(types.number),
    name: types.string
});

export default User;
