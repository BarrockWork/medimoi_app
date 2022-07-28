// material-ui
import {Button, Card, CircularProgress, TextField, Typography,} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import apiAxios from "../../utils/axios";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import FormControl from '@mui/material/FormControl';


// ==============================|| PROFIL USER ||============================== //

function MoreVertIcon() {
    return null;
}

const EditUser = () => {
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const storage = JSON.parse(window.localStorage.getItem('app_user'));
    const getUser = async () => {
        try {
            let results = await apiAxios.get(`/users/${storage.id}`)
            setUser(results.data);
            setLoading(false);
        } catch (err) {
            setError(true);
            throw err;
        }
    }

    const handleSubmit = (e) => {
        apiAxios.put(`/users/${storage.id}`, user).then((data) => {
            console.log(data.data)
        }).catch((err) => {
            console.log(err)
        })
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
        return <MainCard title="ERROR 404" align='center'>
            <Card sx={{maxWidth: 800}}>
                <Typography>
                    Error 404, Veuillez revenir à la page d'accueil
                </Typography>
                <NavLink to={`/`}>
                    <button>Revenez à la page d'accueil</button>
                </NavLink>
            </Card>
        </MainCard>
    }


    return (<MainCard title="Modification du profil" align='center'>
            <Card sx={{maxWidth: 800}}>
                <form>
                    <FormControl>
                        <TextField id="firstName" defaultValue={user.firstName} label="Nom" variant="outlined"
                                   margin="dense"/>
                        <TextField id="lastName" defaultValue={user.lastName} label="Prénom" variant="outlined"
                                   margin="dense"/>
                        <TextField id="age" defaultValue={user.age} label="Age"
                                   inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}/>
                        <TextField id="email" defaultValue={user.email} label="Email" variant="outlined"
                                   margin="dense"/>
                        <TextField id="cellPhone" defaultValue={user.cellphone} label="Téléphone portable"
                                   variant="outlined" margin="dense"/>
                        <TextField id="homePhone" defaultValue={user.homephone} label="Téléphone fixe"
                                   variant="outlined" margin="dense"/>
                        <TextField id="workPhone" defaultValue={user.workphone} label="Téléphone pro" variant="outlined"
                                   margin="dense"/>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleSubmit(user)}
                        >
                            Modifier
                        </Button>
                    </FormControl>
                </form>
            </Card>
        </MainCard>
    );
};

export default EditUser;
