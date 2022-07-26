import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useState, useEffect } from 'react';
import apiAxios from 'utils/axios';

import drugType from 'views/utilities/DrugType';
import medicalAdministration from 'views/utilities/MedicalAdministration';

const TreatmentDrugs = ({ id }) => {
  const [drugs, setDrugs] = useState([]);
  const getDrugs = async () => {
    const results = await apiAxios.get(`/drugs/${id}`);
    setDrugs(results.data);
  };

  useEffect(() => {
    getDrugs();
  }, []);

  //   return <Typography variant='h2'>{array}</Typography>;

  return (
    <>
      <TableRow
        key={drugs.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component='th' scope='row'>
          {drugs.name}
        </TableCell>
        <TableCell align='right'>
          {medicalAdministration(drugs.medical_administration_id)}
        </TableCell>
        <TableCell align='right'>{drugType(drugs.drug_type_id)}</TableCell>
        <TableCell align='right'>{drugs.drug_level_id - 1}</TableCell>
        {/* <TableCell align='right'>{drug.description}</TableCell> */}
      </TableRow>
    </>
  );
};

export default TreatmentDrugs;
