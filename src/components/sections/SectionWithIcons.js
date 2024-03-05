import { Box } from '@mui/material';
import * as React from 'react';
import '../../style/components/sections/SectionWithIcons.css';
import IconBox from '../IconBox';
import SectionWrapper from './SectionWrapper';
import { useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { balconiesWithSeaView, beachAccess, equippedKitchens, privatePoolArea, wifi } from '../../constants/facilities';

export default function SectionWithIcons({title, titleVariant, subtitle, decoration, details, backgroundColor, maxWidth, py}) {
  const [searchParams,] = useSearchParams();
  const [pageText, setPageText] = useState(() => 
  searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      wifiTitle: wifi.titleMNE,
      wifiDescription: wifi.descriptionMNE,
      beachAccessTitle: beachAccess.titleMNE,
      beachAccessDescription: beachAccess.descriptionMNE,
      balconiesTitle: balconiesWithSeaView.titleMNE,
      balconiesDescription: balconiesWithSeaView.descriptionMNE,
      equppedKitchensTitle: equippedKitchens.titleMNE,
      equppedKitchensDescription: equippedKitchens.descriptionMNE,
      poolAreaTitle: privatePoolArea.titleMNE,
      poolAreaDescription: privatePoolArea.descriptionMNE
    } : {
      wifiTitle: wifi.title,
      wifiDescription: wifi.description,
      beachAccessTitle: beachAccess.title,
      beachAccessDescription: beachAccess.description,
      balconiesTitle: balconiesWithSeaView.title,
      balconiesDescription: balconiesWithSeaView.description,
      equppedKitchensTitle: equippedKitchens.title,
      equppedKitchensDescription: equippedKitchens.description,
      poolAreaTitle: privatePoolArea.title,
      poolAreaDescription: privatePoolArea.description
    }
  );

  useLayoutEffect(() => {
    setPageText(searchParams && searchParams.get('lang') === 'MNE' ? 
    {
      wifiTitle: wifi.titleMNE,
      wifiDescription: wifi.descriptionMNE,
      beachAccessTitle: beachAccess.titleMNE,
      beachAccessDescription: beachAccess.descriptionMNE,
      balconiesTitle: balconiesWithSeaView.titleMNE,
      balconiesDescription: balconiesWithSeaView.descriptionMNE,
      equppedKitchensTitle: equippedKitchens.titleMNE,
      equppedKitchensDescription: equippedKitchens.descriptionMNE,
      poolAreaTitle: privatePoolArea.titleMNE,
      poolAreaDescription: privatePoolArea.descriptionMNE
    } : {
      wifiTitle: wifi.title,
      wifiDescription: wifi.description,
      beachAccessTitle: beachAccess.title,
      beachAccessDescription: beachAccess.description,
      balconiesTitle: balconiesWithSeaView.title,
      balconiesDescription: balconiesWithSeaView.description,
      equppedKitchensTitle: equippedKitchens.title,
      equppedKitchensDescription: equippedKitchens.description,
      poolAreaTitle: privatePoolArea.title,
      poolAreaDescription: privatePoolArea.description
    });
  }, [searchParams]);

  return (
    <SectionWrapper py={py} backgroundColor={backgroundColor}>
      <Box className='Section-with-icons-container Section'>
        <Box className='Section-with-icons-content' maxWidth={maxWidth}>
          <IconBox icon={wifi.icon} title={pageText.wifiTitle} description={pageText.wifiDescription}/>
          <IconBox icon={beachAccess.icon} title={pageText.beachAccessTitle} description={pageText.beachAccessDescription}/>
          <IconBox icon={balconiesWithSeaView.icon} title={pageText.balconiesTitle} description={pageText.balconiesDescription}/>
          <IconBox icon={equippedKitchens.icon} title={pageText.equppedKitchensTitle} description={pageText.equppedKitchensDescription}/>
          <IconBox icon={privatePoolArea.icon} title={pageText.poolAreaTitle} description={pageText.poolAreaDescription}/>
        </Box>
      </Box>
    </SectionWrapper>
  );
};