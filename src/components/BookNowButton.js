import { Button } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { buttonLabelTextMNE } from '../assets/languages/montenegrian/components/BookNowButton';
import { buttonLabelText } from '../assets/languages/english/components/BookNowButton';
import * as React from 'react';

export default function BookNowButton({style, href}) {
  const [searchParams,] = useSearchParams();
  const [buttonLabel, setButtonLabel] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ?
    buttonLabelTextMNE
    :
    buttonLabelText
  );

  useLayoutEffect(() => {
    setButtonLabel(
      searchParams && searchParams.get('lang') === 'MNE' ?
      buttonLabelTextMNE
      :
      buttonLabelText
    )
  },[searchParams]);

  return (
    <Button variant='contained' color="secondary" size='large' href={href || '/contact'} disableElevation style={style} >{buttonLabel}</Button>
  );
}