import React, { ReactElement } from 'react';

const DateTick = (props: any): ReactElement<SVGElement> => {
  const { x, y, payload } = props;
  return (
    <text x={x} y={y} textAnchor="middle" fill="#FFFFFF">
      {payload.value}
    </text>
  );
};

export default DateTick;
