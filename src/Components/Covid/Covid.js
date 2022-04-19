import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

const Covid = () => {
    const [ dataCovid , setDataCovid ] = useState([]); 
    useEffect( () => {
        ( async () => {
                const data = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-02-01T00:00:00Z&to=2022-04-19T00:00:00Z');
                let dataCovid = data && data.status === 200 && data.data ? data.data : [];
                dataCovid = dataCovid.map(data => {
                    data.Date = moment(data.Date).format('DD/MM/YYYY');
                    return data;
                })
                setDataCovid(dataCovid);
        })();
    }, [])
    return (
        <>
            <h2 style={{textAlign : 'center', margin : '16px 0'}}>Covid 19</h2>
            <table id="customers">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
                </thead>
                <tbody>
                {
                    dataCovid.map( data => {
                        return (
                                <tr key={data.ID}>
                                    <td>{data.Date}</td>
                                    <td>{data.Active}</td>
                                    <td>{data.Confirmed}</td>
                                    <td>{data.Deaths}</td>
                                    <td>{data.Recovered}</td>
                                </tr>
                        )
                    })
                }
                </tbody>

            </table>
        </>
    )
}

export default Covid;