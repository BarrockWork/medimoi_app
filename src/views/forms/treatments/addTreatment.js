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
import CircularProgress from '@mui/material/CircularProgress';

import { useState, useEffect } from 'react';
import React from 'react';

import apiAxios from 'utils/axios';

import { useFormik } from 'formik';

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
      // files: null,
    },
  });

  const getPeriodicity = async () => {
    const results = await apiAxios.get(`/treatment_periodicities/many`);
    setPeriodicity(results.data);
    setLoading(false);
  };

  // class Thumb extends React.Component {
  //   state = {
  //     loading: false,
  //     thumb: undefined,
  //   };

  //   componentWillReceiveProps(nextProps) {
  //     if (!nextProps.file) {
  //       return;
  //     }

  //     this.setState({ loading: true }, () => {
  //       let reader = new FileReader();

  //       reader.onloadend = () => {
  //         this.setState({ loading: false, thumb: reader.result });
  //       };

  //       reader.readAsDataURL(nextProps.file);
  //     });
  //   }

  //   render() {
  //     const { file } = this.props;
  //     const { loading, thumb } = this.state;

  //     if (!file) {
  //       return null;
  //     }

  //     if (loading) {
  //       return <p>loading...</p>;
  //     }

  //     return (
  //       <img
  //         src={thumb}
  //         alt={file.name}
  //         className='img-thumbnail mt-2'
  //         height={200}
  //         width={200}
  //       />
  //     );
  //   }
  // }

  useEffect(() => {
    getPeriodicity();
  }, []);

  const sendData = async (values) => {
    // const result = await apiAxios.post('/treatments/new', values);
    console.log(values);
    return Promise.resolve();
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
          Date du traitement
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
        <Typography sx={{ padding: 1 }} variant='h2'>
          Périodicité
        </Typography>
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
            {loading === true ? (
              <CircularProgress />
            ) : (
              periodicity.map((v) => {
                return <MenuItem value={v.id}>{v.name}</MenuItem>;
              })
            )}
          </Select>
        </FormControl>
      </Box>
      {/* <Box sx={{ padding: 2 }}>
        <Button variant='contained' component='label'>
          Upload
          <input
            hidden
            accept='image/*'
            multiple
            type='file'
            onChange={(event) => {
              console.log('test', event.currentTarget.files);
              formik.setFieldValue('files', event.currentTarget.files);
            }}
          />
        </Button>
        <Thumb file={formik.values.files} />
      </Box> */}
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
      {console.log(formik.values)}
    </MainCard>
  );
};

export default FormAddTreatment;
