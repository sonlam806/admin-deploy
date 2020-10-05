import React from 'react';
import { FieldArray, useFormikContext } from 'formik';

export default function Chips({ placeholder, ...props }) {
  const { values } = useFormikContext();
  const [chips, setChips] = React.useState(values[props.name]);
  const [errors, setErrors] = React.useState('');
  const KEY = {
    backspace: 8,
    tab: 9,
    enter: 13,
  };
  const INVALID_CHARS = /[^a-zA-Z0-9 ]/g;

  React.useEffect(() => {
    setChips(values[props.name]);
  }, [values, props.name]);
  // Helpers
  const onKeyDown = (event, arrayHelpers) => {
    let keyPressed = event.which;

    if (
      keyPressed === KEY.enter ||
      (keyPressed === KEY.tab && event.target.value)
    ) {
      event.preventDefault();
      updateChips(event, arrayHelpers);
    } else if (keyPressed === KEY.backspace) {
      if (!event.target.value && chips.length) {
        deleteChip([chips.length - 1], arrayHelpers);
      }
    }
  };

  const clearInvalidChars = (event) => {
    let value = event.target.value;
    if (value === '') {
      setErrors('');
    }
    if (INVALID_CHARS.test(value)) {
      // event.target.value = value.replace(INVALID_CHARS, '');
      return setErrors('Không chứa kí tự đặc biệt');
    } else if (value.length > props.maxlength) {
      event.target.value = value.substr(0, props.maxlength);
      return setErrors(`Không vượt quá ${props.maxlength} kí tự`);
    }
  };

  const updateChips = (event, arrayHelpers) => {
    if (!props.max || chips.length < props.max) {
      let value = event.target.value;

      if (!value) return;

      let chip = value.trim().toLowerCase();

      if (chip && chips.indexOf(chip) < 0) {
        arrayHelpers.push(chip);
      }
    }

    event.target.value = '';
  };

  const deleteChip = (index, arrayHelpers) => {
    arrayHelpers.remove(index);
  };

  const focusInput = (event) => {
    let children = event.target.children;

    if (children.length) children[children.length - 1].focus();
  };

  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <div className='chips' onClick={(e) => focusInput(e)}>
          {values[props.name].map((chip, index) => {
            return (
              <span className='chip' key={index}>
                <span className='chip-value'>{chip}</span>
                <button
                  type='button'
                  className='chip-delete-button'
                  onClick={() => arrayHelpers.remove(index)}
                >
                  x
                </button>
              </span>
            );
          })}
          <input
            type='text'
            className='chips-input'
            placeholder={placeholder ? placeholder : ''}
            onKeyDown={(e) => onKeyDown(e, arrayHelpers)}
            onKeyUp={clearInvalidChars}
          />
          {errors && <p>{errors}</p>}
        </div>
      )}
    ></FieldArray>
  );
}
