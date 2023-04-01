import React from 'react';
import { Extra } from './types';

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
  value: string;
  extra?: Extra;

  onChange?: (value: TabsProps['value']) => void;
}

const Tabs: React.ForwardRefRenderFunction<HTMLDivElement, TabsProps> = ({ value, extra, onChange, ...divProps }, ref) => {
  return (
    <div ref={ref} {...divProps}>
      {extra?.left}
      <div>Label</div>
      {extra?.right}
    </div>
  );
};

const ForwardTabs = React.forwardRef(Tabs);
ForwardTabs.displayName = 'Tabs';

export default ForwardTabs;
