
export interface IUser {
    username?: string;
}


export interface IUseData {
    user: IUser;
    handleUser: (data?: IUser) => void;
}
