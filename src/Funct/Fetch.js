import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

const useFetch = (url) => {

    const [ data , setData ] = useState([]); 
    const [ loading, setLoading ] = useState(true); 
    const [ isErr, setIsErr] = useState({isError : false});
    useEffect( () => {

        setTimeout( () => {
            ( async () => {
                try {
                    const data = await axios.get(url);
                    let dataCovid = data && data.status === 200 && data.data ? data.data : [];
                    dataCovid = dataCovid.map(data => {
                        data.Date = moment(data.Date).format('DD/MM/YYYY');
                        return data;
                    }).reverse();
                    setData(dataCovid);
                    setLoading(false);
                    setIsErr(false);
                } catch (error) {
                    setIsErr({
                        isError : true,
                        message : error.message
                    })
                    setLoading(false);
                }
            })();
        }, 1000)
    }, [])

    return {
        data,
        loading,
        isErr
    }
}
export default useFetch;