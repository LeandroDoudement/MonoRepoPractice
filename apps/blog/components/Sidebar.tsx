import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
}

export default function Sidebar(props: SidebarProps) {
  const { social } = props;

  return (
    <Grid item xs={12} md={4}>
      <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display='block'
          variant='body1'
          href='#'
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction='row' spacing={1} alignItems='center'>
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
