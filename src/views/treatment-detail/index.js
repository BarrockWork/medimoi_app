// material-ui
import TextField from '@mui/material/TextField';
import MainCard from 'ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Typography } from '@mui/material';

import apiAxios from '../../utils/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TreatmentDrugs from './TreatmentDrugs';
import TreatmentMedia from './TreatmentMedia';

const TreatmentDetail = () => {
  const { id } = useParams();
  const [treatment, setTreatment] = useState([]);

  const getTreatment = async () => {
    const results = await apiAxios.get(`/treatments/${id}`);
    setTreatment(results.data);
  };

  useEffect(() => {
    getTreatment();
  }, []);

  const dateFormatter = (date) => new Date(date).toLocaleDateString();

  return (
    <MainCard title={treatment.name}>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}>
        <Typography variant='h2'>Periodicité</Typography>
        <TextField
          id='outlined-multiline-flexible'
          label='Débute le'
          multiline
          maxRows={4}
          value={dateFormatter(treatment.startedAt)}
        />{' '}
        <TextField
          id='outlined-multiline-flexible'
          label='Termine le'
          multiline
          maxRows={4}
          value={dateFormatter(treatment.finishedAt)}
        />
      </Box>
      <Box>
        {' '}
        <Typography variant='h2'>Medicaments</Typography>
        {treatment.TreatmentDrugs === undefined ||
        treatment.TreatmentDrugs.length === 0 ? (
          ''
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
      <Box>
        <Typography variant='h2'>Pieces jointes</Typography>

        {treatment.TreatmentMedias === undefined ||
        treatment.TreatmentMedias.length === 0 ? (
          ''
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
      </Box>
    </MainCard>
  );
};

export default TreatmentDetail;
