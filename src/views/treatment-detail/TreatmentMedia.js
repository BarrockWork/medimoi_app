import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useState, useEffect } from 'react';
import apiAxios from 'utils/axios';

const TreatmentMedia = ({ id }) => {
  const [medias, setMedias] = useState([]);
  const getMedias = async () => {
    const results = await apiAxios.get(`/treatment_medias/${id}`);
    setMedias(results.data);
  };

  useEffect(() => {
    getMedias();
  }, []);

  //   return <Typography variant='h2'>{array}</Typography>;

  return (
    <>
      <TableRow
        key={medias.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component='th' scope='row' align='center'>
          {medias.fileName}
        </TableCell>
        <TableCell align='center'>{medias.fileSize} Ko</TableCell>
      </TableRow>
    </>
  );
};

export default TreatmentMedia;
