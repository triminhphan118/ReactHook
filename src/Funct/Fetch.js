import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

const useFetch = (url, isCovid) => {

    const [ data , setData ] = useState([]); 
    const [ loading, setLoading ] = useState(true); 
    const [ isErr, setIsErr] = useState({isError : false});
    useEffect( () => {
        const cancelTokenSource = axios.CancelToken.source();
        setTimeout( () => {
            ( async () => {
                try {
                    const data = await axios.get(url, {
                        cancelToken: cancelTokenSource.token
                    });
                    let dataCovid = data && data.status === 200 && data.data ? data.data : [];
                    if (isCovid) {
                        dataCovid = dataCovid.map(data => {
                            data.Date = moment(data.Date).format('DD/MM/YYYY');
                            return data;
                        }).reverse();
                    }
                    setData(dataCovid);
                    setLoading(false);
                    setIsErr({isError : false});
                } catch (error) {
                    if (axios.isCancel(error)) {
                        console.log("post Request canceled");
                    } else {
                        setIsErr({
                            isError : true,
                            message : error.message
                        })
                        setLoading(false);
                    }
                }
            })();
        }, 1000);

        return () => {
            cancelTokenSource.cancel('post Request canceled');
        }
    }, [url])

    return {
        data,
        loading,
        isErr
    }
}
export default useFetch;