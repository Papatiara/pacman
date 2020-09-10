import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

interface SvgProps {
  className?: string;
}

const Icon: React.FC<SvgProps> = props => {
  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props}>
      <path d="M472.19 10.88c-55.24 3.84-115.66 23.4-164.95 53.71-45.27 27.81-89.96 71.93-117.39 115.85-33.18 53.51-51.79 110.1-56.2 171.67-1.15 15.34-1.92 144.81-1.92 313.03 0 246.85.38 288.09 2.88 296.34 7.1 23.98 35.1 35.29 57.54 23.21 3.26-1.54 36.83-34.14 74.8-72.12L336 843.33l70.01 69.82c38.55 38.36 72.89 71.16 76.34 73.08 3.45 1.73 10.36 3.26 15.34 3.26 19.18.38 19.18.57 95.33-75.38l70.97-70.78 69.05 69.24c37.98 37.98 71.74 70.39 74.8 72.12 16.88 9.01 33.57 6.52 46.99-7.1 7.29-7.1 9.59-11.12 11.32-18.99 2.68-12.66 2.88-561.22.19-603.04-5.76-88.81-40.09-167.83-100.51-231.13C688.54 43.68 584.2 3.4 472.19 10.88zm-94.95 406.63v40.28h42.2v84.4H294.76V377.23h82.48v40.28zm205.23 0v40.28h40.28v84.4H500V377.23h82.48v40.28z" />
    </SvgIcon>
  );
};

export default Icon;