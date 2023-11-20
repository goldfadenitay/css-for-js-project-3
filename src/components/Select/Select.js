import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  height: 43px;
  max-width: min-content;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  border-style: none;
  padding: 8px;
  appearance: none;
  display: flex;

  &:hover {
    color: ${COLORS.black}
  }
`

const SelectStyled = styled.select`
  appearance: none;
  background-color: transparent;
  border-style: none;
  height: 100%;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectStyled value={value} onChange={onChange}>
        {children}
      </SelectStyled>
      <Icon
        id="chevron-down"
      />
    </Wrapper>
  );
};

export default Select;
