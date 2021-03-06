import styled from 'styled-components';
import { colors, typography } from '../../../../constants';
import { CardImageContainer } from '../CardImage/CardImage';
import CardHeading from '../CardHeading/CardHeading';
import CardText from '../CardText/CardText';

export type CardLayout = 'horizontal' | 'vertical';
export type CardStyling = 'primary' | 'secondary';

export interface CardProps {
  /**
   * Determines the layout of the card
   * @default `vertical`
   */
  layout?: CardLayout;
  /**
   * Determines the styling of the card
   * @default `secondary`
   */
  styling?: CardStyling;
}

const layoutDirections: Record<CardLayout, string> = {
  horizontal: 'row',
  vertical: 'column',
};

const layoutImageStyles: Record<CardLayout, string> = {
  horizontal: '200px',
  vertical: '200px',
};

const headingSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.heading.h6,
  primary: typography.sizes.heading.h5,
};

const textSizes: Record<CardStyling, string> = {
  secondary: typography.sizes.text.small,
  primary: typography.sizes.text.body,
};

const Card = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  background-color: ${colors.white};
  border: 1px solid ${colors.greyLighter};
  border-radius: 12px;
  box-shadow: 0 1px 0 0 ${colors.greyLight};
  flex-direction: ${({ layout = 'vertical' }) => layoutDirections[layout]};
  & > ${CardImageContainer} {
    flex: 0 1 ${({ layout = 'vertical' }) => layoutImageStyles[layout]};
  }
  & ${CardHeading} {
    font-size: ${({ styling = 'secondary' }) => headingSizes[styling]};
  }
  & ${CardText} {
    font-size: ${({ styling = 'secondary' }) => textSizes[styling]};
  }
`;

export default Card;
