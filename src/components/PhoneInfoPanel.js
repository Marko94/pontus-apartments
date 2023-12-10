import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

export default function InfoPanel() {
  return (
    <React.Fragment>
        <Typography variant="p1" component="div" display="flex" alignItems="center">
            <PhoneEnabledIcon/>
            <Box display="flex" flexDirection="column" sx={{ ml:1 }}>
                <Link href="tel:+38269466754" flex>
                    +382 69 466 754
                </Link>
                <Link href="tel:+38269033039" flex>
                    +382 69 033 039
                </Link>
            </Box>
        </Typography>
    </React.Fragment>
  );
}