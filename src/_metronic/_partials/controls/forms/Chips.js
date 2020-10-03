import React from 'react';

export default function Chips({ initialChip, placeholder, ...props }) {
  const [chips, setChips] = React.useState([initialChip]);
  const KEY = {
    backspace: 8,
    tab: 9,
    enter: 13,
  };
  const INVALID_CHARS = /[^a-zA-Z0-9 ]/g;

  // Helpers

  const onKeyDown = (event) => {
    let keyPressed = event.which;

    if (
      keyPressed === KEY.enter ||
      (keyPressed === KEY.tab && event.target.value)
    ) {
      event.preventDefault();
      updateChips(event);
    } else if (keyPressed === KEY.backspace) {
      if (!event.target.value && chips.length) {
        deleteChip(chips[chips.length - 1]);
      }
    }
  };

  const clearInvalidChars = (event) => {
    let value = event.target.value;

    if (INVALID_CHARS.test(value)) {
      event.target.value = value.replace(INVALID_CHARS, '');
    } else if (value.length > props.maxlength) {
      event.target.value = value.substr(0, props.maxlength);
    }
  };

  const updateChips = (event) => {
    if (!props.max || chips.length < props.max) {
      let value = event.target.value;

      if (!value) return;

      let chip = value.trim().toLowerCase();

      if (chip && chips.indexOf(chip) < 0) {
        setChips(chips.concat(chip));
      }
    }

    event.target.value = '';
  };

  const deleteChip = (chip) => {
    setChips(chips.filter((item) => item !== chip));
  };

  const focusInput = (event) => {
    let children = event.target.children;

    if (children.length) children[children.length - 1].focus();
  };

  const chipsRender = chips.map((chip, index) => {
    return (
      <span className='chip' key={index}>
        <span className='chip-value'>{chip}</span>
        <button
          type='button'
          className='chip-delete-button'
          onClick={() => deleteChip(chip)}
        >
          x
        </button>
      </span>
    );
  });
  // let placeholder =
  //   !props.max || chips.length < props.max ? placeholder : '';

  return (
    <div className='chips' onClick={(e) => focusInput(e)}>
      {chipsRender}
      <input
        type='text'
        className='chips-input'
        placeholder={placeholder}
        onKeyDown={(e) => onKeyDown(e)}
        onKeyUp={clearInvalidChars}
      />
    </div>
  );
}
