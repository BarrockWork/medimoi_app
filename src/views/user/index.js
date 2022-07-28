// material-ui
import {Avatar, Card, CardContent, CardHeader, CircularProgress, IconButton, Link,} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// project imports
import MainCard from 'ui-component/cards/MainCard';

import apiAxios from "../../utils/axios";
import {useEffect, useState} from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import {NavLink} from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";


// ==============================|| PROFIL USER ||============================== //

function MoreVertIcon() {
    return null;
}

const ProfilUser = () => {
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const storage = JSON.parse(window.localStorage.getItem('app_user'));

    const getUser = async () => {
        try {
            const results = await apiAxios.get(`/users/${storage.id}`)
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
                    avatar={
                        <Avatar
                            sx={{
                                bgcolor: '#e7c7ca',
                            }}
                        >{user.firstName.slice(0,1)} {user.lastName.slice(0,1)}</Avatar>

                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Inscrits depuis"
                    subheader={localDate}
                />
                <IconButton>
                    <NavLink to={`/email/${user.email}`}>
                        <EditIcon style={{color: 'green'}}/>
                    </NavLink>
                </IconButton>
                <Tooltip title='Désactiver votre compte'>
                    <IconButton
                        onClick={() => {
                            const confirmBox = window.confirm(
                                'Etes-vous sur de vouloir désactiver votre compte ?'
                            );
                            if (confirmBox === true) {
                            }
                        }}>
                        <DeleteIcon style={{color: 'red'}}/>
                    </IconButton>
                </Tooltip>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow
                                key={user.cellphone}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component='th' scope='row' align='center'>
                                    <ContactPhoneIcon/>
                                </TableCell>
                                <TableCell align='center'>{user.cellphone}</TableCell>
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
