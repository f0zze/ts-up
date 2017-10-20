import {types} from 'mobx-state-tree';

export interface IUserProfile {
    id: number;
    name: string;
    img: string;
    jobTitle: string;
}

const UserProfile = types.model<IUserProfile>('UserProfile', {
    id: types.identifier(types.number),
    name: types.string,
    img: types.string,
    jobTitle: types.string
});

export default UserProfile;
