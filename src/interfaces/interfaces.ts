export interface Sub {
    nick: string;
    avatar: string;
    subMonths: number;
    description?: string;
}

export interface AppState {
    subs: Sub[],
    newSubsNumber: number;
}

export interface FormState {
    inputValues: Sub
}

export const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: '',
};