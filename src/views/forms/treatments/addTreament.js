// material-ui
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const FormAddTreatment = () => {
  const { id } = useParams();
  const [treatment, setTreatment] = useState([]);
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard title={treatment.name}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'>
        <Typography sx={{ padding: 1 }} variant='h2'>
          Periodicité
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label='DateTimePicker'
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </Box>
      {/* <Box sx={{ padding: 3 }}>
        {' '}
        <Typography sx={{ padding: 1 }} variant='h2'>
          Medicaments
        </Typography>
        {treatment.TreatmentDrugs === undefined ||
        treatment.TreatmentDrugs.length === 0 ? (
          'Pas de médicament enregistré'
        ) : (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Medicament</TableCell>
                  <TableCell align='right'>Mode d'administration</TableCell>
                  <TableCell align='right'>Type de medicament</TableCell>
                  <TableCell align='right'>Niveau du medicament</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {treatment.TreatmentDrugs.map((value) => {
                  // console.log(value.originalName);
                  return <TreatmentDrugs id={value.id} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Box sx={{ padding: 3 }}>
        <Typography sx={{ padding: 1 }} variant='h2'>
          Pieces jointes
        </Typography>

        {treatment.TreatmentMedias === undefined ||
        treatment.TreatmentMedias.length === 0 ? (
          'Pas de média enregistré'
        ) : (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Nom du fichier</TableCell>
                  <TableCell align='center'>Taille du fichier</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {treatment.TreatmentMedias.map((value) => {
                  console.log(value.id);
                  return <TreatmentMedia id={value.id} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box> */}
    </MainCard>
  );
};

export default FormAddTreatment;
