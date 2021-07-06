import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as SesameIcon } from './images/sesame.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={SesameIcon} viewBox="0 0 150 58" {...props} />;
}
