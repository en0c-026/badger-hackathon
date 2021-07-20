import React, { ReactElement } from 'react';
import { kFormatt } from '../../../utils';

const PriceTick = (props: any): ReactElement<SVGElement> => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} textAnchor="start" fill="#FFFFFF">
      ${kFormatt(payload.value)}
    </text>
  );
};

export default PriceTick;
