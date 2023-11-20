/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const WRAPPERSIZE = {
  large: {
    '--heightWrapper': 24 + 'px',
    '--paddingWrapper': 4 +'px',
    '--borderRadiusWrapper': 8 + 'px'
  },
  medium: {
    '--heightWrapper': 12 + 'px',
    '--borderRadiusWrapper': `4px 0px 0px 4px`
  },
  small: {
    '--heightWrapper': 8 + 'px',
    '--borderRadiusWrapper': `4px 0px 0px 4px`
  }
}

const Wrapper = styled.div`
  width: 370px;
  height: var(--heightWrapper);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadiusWrapper);
  padding: var(--paddingWrapper);
`

const BarBase = styled.div`
  width: var(--widthBar);
  height: 16px;
  background-color: ${COLORS.primary};

`

const LargeBar = styled(BarBase)`
  border-radius: ${(props) => props.value === 100 ? `4px` : `4px 0 0 4px`};
`

const MediumBar = styled(BarBase)`
  height: 12px;
  border-radius: ${(props) => props.value === 100 ? `4px` : `4px 0 0 4px`};
`

const SmallBar = styled(BarBase)`
  height: 8px;
  border-radius: ${(props) => props.value === 100 ? `4px` : `4px 0 0 4px`};
`

const ProgressBar = ({ value, size }) => {
  const wrapperStyle = WRAPPERSIZE[size]
  let Components;

  if(size === 'large') {
    Components = LargeBar
  } else if (size === 'medium') {
    Components = MediumBar;
  } else if (size === 'small') {
    Components = SmallBar
  }

  return (
    <Wrapper
      style={wrapperStyle}
    >
      <Components
        style={{
          '--widthBar': value + '%'
        }}
        value={value}
      />
    </Wrapper>
  )
};

export default ProgressBar;
