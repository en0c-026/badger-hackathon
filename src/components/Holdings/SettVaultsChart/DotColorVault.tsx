import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

const DotColorVault = (props: any) => {
  const { color } = props;
  return <FiberManualRecord style={{ color: color, paddingLeft: '4px', height: '8px', width: '8x' }} />;
};

export default DotColorVault;
