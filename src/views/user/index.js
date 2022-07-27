// material-ui
import {Avatar, Card, CardContent, CardHeader, CircularProgress, IconButton, Link, Typography,} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// project imports
import MainCard from 'ui-component/cards/MainCard';

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
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const getUser = async () => {
        try {
            const results = await apiAxios.get('/users/3')
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
    let initials = user.firstName


    return (<MainCard title={user.firstName + " " + user.lastName}>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {initials}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Inscrits depuis"
                    subheader={localDate}
                />
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
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </MainCard>
    );
};

export default ProfilUser;
