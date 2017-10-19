import { types } from 'mobx-state-tree';

interface UserModel {
    id: number;
    name: string;
}

const UserModel = types.model<UserModel>({
    id: types.identifier<number>(),
    name: types.optional<string, string>(types.string, '')
});

export default UserModel;
