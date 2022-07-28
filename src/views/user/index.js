// material-ui
import {Avatar, Card, CardContent, CardHeader, CircularProgress, IconButton, Link,} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import jwtHandler from "../../utils/jwtHandler";

import apiAxios from "../../utils/axios";
import {useEffect, useState} from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";



// ==============================|| PROFIL USER ||============================== //

function MoreVertIcon() {
    return null;
}

const ProfilUser = () => {
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const userConnected = jwtHandler.getUser().user;

    const getUser = async () => {
        try {
            const results = await apiAxios.get(`/users/${userConnected.id}`)
            setUser(results.data);
            setLoading(false);
        } catch (err) {
            setError(true);
            throw err;
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    if (loading) {
        return <div>
            <CircularProgress/>
        </div>;
    }

    if (error) {
        return <div style={{margin: '100px'}}>
            <div>ERROR 404 !!!!!!!!!!</div>
            <div style={{margin: '50px'}}>
                <Link to={`/`}>
                    <button>Revenez à la page d'accueil</button>
                </Link>
            </div>
        </div>
    }

    const localDate = new Date(user.createdAt).toLocaleDateString();


    return (<MainCard title={user.firstName + " " + user.lastName} align='center'>
            <Card sx={{maxWidth: 800}}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Inscrits depuis le "
                    subheader={localDate}
                />
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow
                                key={user.age}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope='row' align='center'>
                                    <CakeIcon/>
                                </TableCell>
                                <TableCell align='center'>{user.age} ans</TableCell>
                            </TableRow>
                            <TableRow
                                key={user.cellphone}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope='row' align='center'>
                                    <ContactPhoneIcon/>
                                </TableCell>
                                <TableCell align='center'>N° perso : {user.cellphone}</TableCell>
                            </TableRow>
                            <TableRow
                                key={user.cellphone}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope='row' align='center'>
                                    <ContactPhoneIcon/>
                                </TableCell>
                                <TableCell align='center'>N° fixe : {user.homephone}</TableCell>
                            </TableRow>
                            <TableRow
                                key={user.email}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope='row' align='center'>
                                    <ContactMailIcon/>
                                </TableCell>
                                <TableCell align='center'>{user.email}</TableCell>
                            </TableRow>
                            <TableRow
                                key={user.UserType.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope='row' align='center'>
                                    <PersonIcon/>
                                </TableCell>
                                <TableCell align='center'>{user.UserType.name}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </MainCard>
    );
};

export default ProfilUser;
