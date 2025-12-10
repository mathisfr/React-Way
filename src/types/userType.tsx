export type User = {
    id: string,
    username: string;
    age: number;
}

export type UserSelected = {
    selected: boolean,
    user: User,
}