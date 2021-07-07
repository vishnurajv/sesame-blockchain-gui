import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SesameIcon } from './images/sesame.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SesameIcon} viewBox="100 10 146 110" {...props} />;
}
