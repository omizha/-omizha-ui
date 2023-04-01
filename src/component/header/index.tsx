import React, { type CSSProperties } from 'react';
import BrandLogo from './BrandLogo';
import Breadcrumb from './Breadcrumb';

interface HeaderProps {
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  background: CSSProperties['background'];
  brandLogoComponent: React.ReactNode;
  breadcrumbComponent: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ width, height, background, brandLogoComponent = <BrandLogo /> }) => {
  return (
    <div
      style={{
        width,
        height,
        background,
      }}
      className="flex items-center justify-between"
    >
      {brandLogoComponent}
      <Breadcrumb />
    </div>
  );
};

export default Header;
