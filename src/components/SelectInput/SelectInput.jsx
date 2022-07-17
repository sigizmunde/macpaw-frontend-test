import { useEffect, useState } from 'react';

import { FieldWrapper, Field, FieldList } from './SelectInput.styled';

const SelectInput = ({
  items,
  placeholder = '',
  initialIndex = -1,
  width = '100%',
  onPick = () => {
    console.log('no function attached to this input element');
  },
}) => {
  const [opened, setOpened] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    setActiveId(
      initialIndex >= 0 ? (items.length > 0 ? items[initialIndex].id : '') : ''
    );
  }, [items, initialIndex]);

  const handleOptionClick = e => {
    setActiveId(e.target.id);
    onPick(e.target.id);
    setOpened(false);
  };

  return (
    <FieldWrapper width={width}>
      <Field
        // type="text"
        // placeholder={placeholder}
        // value={
        //   activeId !== '' ? items.find(({ id }) => id === activeId).value : ''
        // }
        onClick={() => setOpened(opened => !opened)}
        // onBlur={() => setOpened(false)}
      >
        {activeId !== ''
          ? items.find(({ id }) => id === activeId).value
          : placeholder}
      </Field>

      {opened && (
        <FieldList onMouseLeave={() => setOpened(false)}>
          {items.length > 0 &&
            items.map(({ id, value }) => (
              <li key={id} id={id} onClick={handleOptionClick}>
                {value}
              </li>
            ))}
        </FieldList>
      )}
    </FieldWrapper>
  );
};

export default SelectInput;
