import { FormState, INITIAL_STATE } from "../interfaces/interfaces";

type FormReducerAction =
    | { type: 'change_value'; payload: { inputName: string; inputValue: string } }
    | { type: 'clear' };

export const formReducer = (
    state: FormState['inputValues'],
    action: FormReducerAction
) => {
    switch (action.type) {
        case 'change_value':
            const { inputName, inputValue } = action.payload;
            return {
                ...state,
                [inputName]: inputValue,
            };
        case 'clear':
            return INITIAL_STATE;

        default:
            return state;
    }
};