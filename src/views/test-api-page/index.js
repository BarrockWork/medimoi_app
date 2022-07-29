// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import apiAxios from "../../utils/axios";
import {useEffect, useState} from "react";
// ==============================|| SAMPLE PAGE ||============================== //

const TestApiPage = () => {
    const [companies, setCompanies] = useState();
    const getCompany = async () => {
        const results = await apiAxios.get('/company/all?filter={}&range=[0,10]&sort=["id","ASC"]')
        setCompanies(results.data);
    }

    useEffect(() => {
        getCompany();

    }, []);
    return (<MainCard title="Sample Card">
        <Typography variant="body2">
            Récupération des companies: <strong>apiAxios.get('/company/all?filter={}&range=[0,10]&sort=["id","ASC"]')</strong>
            <hr/>
            {JSON.stringify(companies)}
        </Typography>
    </MainCard>)
};

export default TestApiPage;
