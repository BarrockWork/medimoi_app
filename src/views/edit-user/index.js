// material-ui
import {Button, Card, CircularProgress, TextField, Typography,} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import {useNavigate} from "react-router-dom";
import apiAxios from "../../utils/axios";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import jwtHandler from "../../utils/jwtHandler";
import {Formik, useFormik} from 'formik';
import * as Yup from "yup";


// ==============================|| PROFIL USER ||============================== //

function MoreVertIcon() {
    return null;
}

const EditUser = () => {
    const userConnected = jwtHandler.getUser().user;
    const [error, setError] = useState(false);
    const [user, setUser] = useState(userConnected);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            user_id: user.id,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            cellPhone: user.cellphone,
            homePhone: user.homephone,
            workPhone: user.workphone
        },
        onSubmit: async values => {
            try {
                let results = await apiAxios.put(`/users/${userConnected.id}`, values)
                setUser(results.data);
                setLoading(false);
                navigate(`/profil/${userConnected.id}`)
            } catch (err) {
                setError(true);
                throw err;
            }
        },
    });

    /*
      const validationSchema = Yup.object().shape({
          firstName: Yup.string()
              .max(50)
              .required('First Name is required'),
          lastName: Yup.string()
              .max(50)
              .required('Last Name is required'),
          email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
          age: Yup.number()
              .required('Age is required'),
          cellphone: Yup.string()
              .max(50)
              .required('Cellphone is required'),
          homephone: Yup.string()
              .max(50)
              .required('Homephone is required'),
      });

      function onSubmit(values){
          console.log(values)
      }*/

    const getUser = async () => {
        try {
            let results = await apiAxios.get(`/users/${userConnected.id}`)
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
                <form
                    /* initialValues={initialValues}
                     validationSchema={validationSchema}*/
                    onSubmit={formik.handleSubmit}
                >
                    <FormControl>
                        <TextField id="firstName" onChange={formik.handleChange}
                                   value={formik.values.firstName} label="Nom *"
                                   variant="outlined"
                                   margin="dense"/>
                        <TextField id="lastName" onChange={formik.handleChange}
                                   value={formik.values.lastName} label="Prénom *"
                                   variant="outlined"
                                   margin="dense"/>
                        <TextField id="age" label="Age *"
                                   type="number"
                                   onChange={formik.handleChange}
                                   value={formik.values.age}
                        />
                        <TextField id="email"
                                   onChange={formik.handleChange}
                                   value={formik.values.email}
                                   label="Email *" variant="outlined"
                                   margin="dense"/>
                        <TextField id="cellPhone"
                                   onChange={formik.handleChange}
                                   value={formik.values.cellPhone}
                                   label="Téléphone portable * "
                                   variant="outlined" margin="dense"/>
                        <TextField id="homePhone"
                                   onChange={formik.handleChange}
                                   value={formik.values.homePhone}
                                   label="Téléphone fixe *"
                                   variant="outlined" margin="dense"/>
                        <TextField id="workPhone"
                                   label="Téléphone pro"
                                   onChange={formik.handleChange}
                                   value={formik.values.workPhone}
                                   variant="outlined"
                                   margin="dense"/>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
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
