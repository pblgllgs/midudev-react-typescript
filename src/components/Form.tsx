import { useNewSubForm } from '../hooks/useNewSubForm';
import { Sub } from '../interfaces/interfaces';


interface FormProps {
  onNewSubs: (newSub: Sub) => void;
}

export const Form = ({ onNewSubs }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSubs(inputValues);
    dispatch({ type: 'clear' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'change_value',
      payload: {
        inputName: e.target.name,
        inputValue: e.target.value,
      },
    });
  };

  const handleReset = () => {
    dispatch({ type: 'clear' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <textarea
          value={inputValues.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button type="button" onClick={handleReset}>
          Clear the form!
        </button>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};
