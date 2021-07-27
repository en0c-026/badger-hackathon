import React from 'react';
import { StyledTableRow, StyledTabCell } from '.';

export type HeadRowProps = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
};

const HeaderRow = ({ col1, col2, col3, col4 }: HeadRowProps) => {
  return (
    <StyledTableRow>
      <StyledTabCell>{col1}</StyledTabCell>
      <StyledTabCell align="center">{col2}</StyledTabCell>
      <StyledTabCell align="center">{col3}</StyledTabCell>
      <StyledTabCell align="right">{col4}</StyledTabCell>
    </StyledTableRow>
  );
};

export default HeaderRow;
