import React from 'react';

export type ExtraPosition = 'left' | 'right';

export type Extra = Partial<Record<ExtraPosition, React.ReactNode>>