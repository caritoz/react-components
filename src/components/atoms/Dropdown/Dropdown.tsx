import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import chevronDown from '../../../content/images/chevron-down.svg';
import { getBorderColorByStatus } from '../../../helpers/utils';
import { typography } from '../../../constants/typography';

export const DEFAULT_COLOR = colors.greyLight;

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Border gets red if this is set to true.
   */
  hasError?: boolean;
  /**
   * Border gets green if this is set to true.
   */
  isValid?: boolean;
}

export const Option = styled.option``;

const StyledDropdown = styled.select<DropdownProps>`
  appearance: none;
  background: transparent url(${chevronDown}) no-repeat calc(100% - 13px) center;
  background-size: 13px;
  border: 2px solid ${getBorderColorByStatus};
  border-radius: 4px;
  padding: 8px 32px 8px 16px;
  font-weight: ${typography.weights.semiBold};
  height: 46px;
  min-width: 100px;
  user-select: none;

  &:focus {
    outline-width: 0;
    border: 2px solid ${colors.actionPlain};
    transition: border 0.2s;
  }
`;

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => <StyledDropdown ref={ref} {...props} />);

export default Dropdown;
