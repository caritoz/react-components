import React from 'react';
import { colors } from '../../../constants/colors';

export interface IZopaLogoProps extends React.SVGProps<SVGSVGElement> {
  /**
   * How wide the SVG will be
   */
  width?: string;
  /**
   *  How tall the SVG will be
   */
  height?: string;
  /**
   * Targets the svg's `fill` attribute, and is set to white by default
   */
  color?: string;
}

const ZopaLogo: React.FunctionComponent<IZopaLogoProps> = ({ color, ...rest }) => (
  <svg
    viewBox="0 0 104 19"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    aria-label="zopa logo"
    {...rest}
  >
    <title>Zopa Logo</title>
    <g>
      <path
        fill={color}
        d="M36.90752,0 C42.6769778,0 46.8674844,3.93460861 46.8674844,9.36414355 C46.8674844,14.8199217 42.6769778,18.83326 36.90752,18.83326 C31.1380622,18.83326 26.9475556,14.8461649 26.9475556,9.36414355 C26.9475556,3.90836539 31.1380622,0 36.90752,0 Z M36.9851733,13.7701929 C39.0550044,13.7701929 40.7106844,11.9078615 40.7106844,9.38944951 C40.7106844,6.87197483 39.0550044,5.06212985 36.9851733,5.06212985 C34.8894578,5.06212985 33.1043556,6.87197483 33.1043556,9.38944951 C33.1043556,11.9078615 34.9153422,13.7701929 36.9851733,13.7701929 Z M16.4541867,1.04879158 C16.4541867,6.67702519 8.45959111,11.8600613 8.45959111,13.9529582 L16.1435733,13.9529582 L16.1435733,18.5708278 L0,18.5708278 L0,17.7048015 C0,12.0765679 7.99367111,6.89353176 7.99367111,4.8006349 L0.309688889,4.8006349 L0.309688889,0.183702546 L16.4541867,0.183702546 L16.4541867,1.04879158 Z M66.7153067,0.183702546 C71.4244267,0.183702546 74.1404444,2.56996113 74.1404444,6.76700194 C74.1404444,11.2255377 71.4244267,13.7964361 66.7153067,13.7964361 L64.2063644,13.7964361 L64.2063644,18.5708278 L58.5136356,18.5708278 L58.5136356,0.183702546 L66.7153067,0.183702546 Z M66.4046933,9.180441 C67.6989156,9.180441 68.44864,8.36690115 68.44864,6.95070449 C68.44864,5.58699426 67.6989156,4.79969764 66.4046933,4.79969764 L64.2063644,4.79969764 L64.2063644,9.180441 L66.4046933,9.180441 Z M96.6257067,0.612874778 L104,19 L97.6093156,19 L96.70336,16.4028584 L89.8994489,16.4028584 L88.9685333,19 L82.8108089,19 L90.4689067,0.612874778 L96.6257067,0.612874778 Z M91.4515911,11.619186 L95.2288711,11.619186 L93.3661156,6.24213753 L91.4515911,11.619186 Z"
      />
    </g>
  </svg>
);

ZopaLogo.defaultProps = {
  color: colors.base.primary,
  height: '100%',
  width: '100%',
};

export default ZopaLogo;
