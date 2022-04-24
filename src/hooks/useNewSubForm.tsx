import { FormState, INITIAL_STATE } from '../interfaces/interfaces';
import { useReducer } from 'react';

type FormReducerAction =
  | { type: 'change_value'; payload: { inputName: string; inputValue: string } }
  | { type: 'clear' };

const formReducer = (
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

export const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE);
};

