import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import EnhancedTable from './Treatments';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <EnhancedTable isLoading={isLoading} titre='Traitements en cours' />
        <EnhancedTable isLoading={isLoading} titre='Traitements terminés' />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
