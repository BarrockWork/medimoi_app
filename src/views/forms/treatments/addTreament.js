// material-ui
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';

import apiAxios from 'utils/axios';

import { useFormik } from 'formik';
import axios from 'axios';

const FormAddTreatment = () => {
  const [periodicity, setPeriodicity] = useState('');
  const [loading, setLoading] = useState(true);
  const formik = useFormik({
    initialValues: {
      name: '',
      user_id: 1,
      treatment_periodicity_id: '',
      startedAt: null,
      finishedAt: null,
      isActive: true,
    },
  });

  const getPeriodicity = async () => {
    const results = await apiAxios.get(`/treatment_periodicities/many`);
    setPeriodicity(results.data);
    setLoading(false);
  };

  useEffect(() => {
    getPeriodicity();
  }, []);

  const sendData = async (values) => {
    console.log('value', values);
    await axios.post('/treatments/new', values);

    return;
  };

  return (
    <MainCard title="AJOUT D'UN TRAITEMENT">
      <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, padding: 1 }}>
        <Typography sx={{ padding: 1 }} variant='h2'>
          Nom du traitement
        </Typography>
        <TextField
          id='name'
          label='name'
          variant='outlined'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Box>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          padding: 1,
        }}
        noValidate
        autoComplete='off'>
        <Typography sx={{ padding: 1 }} variant='h2'>
          Periodicité
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label='Traitement commence le'
            value={formik.values.startedAt}
            onChange={(val) => {
              formik.setFieldValue('startedAt', val);
            }}
          />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label='Traitement termine le'
            value={formik.values.finishedAt}
            onChange={(val) => {
              formik.setFieldValue('finishedAt', val);
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ padding: 2 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Selectionner</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={formik.values.treatment_periodicity_id}
            label='periodiciter'
            onChange={(v) => {
              formik.setFieldValue('treatment_periodicity_id', v.target.value);
            }}>
            {loading === true
              ? console.log('loading')
              : periodicity.map((v) => {
                  return <MenuItem value={v.id}>{v.name}</MenuItem>;
                })}
          </Select>
        </FormControl>
      </Box>
      {console.log(formik.values)}
      <Box sx={{ padding: 2 }}>
        <Button
          size='large'
          color='primary'
          variant='contained'
          onClick={() => {
            sendData(formik.values);
          }}>
          Submit
        </Button>
      </Box>
    </MainCard>
  );
};

export default FormAddTreatment;
