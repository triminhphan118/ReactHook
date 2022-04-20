import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import useFetch from "../../Funct/Fetch";
import { CountDown, NewCountDown } from "../CountDown/CountDown";

const Covid = () => {
    let dateToday = new Date( new Date().setHours(0, 0, 0, 0));
    let priorDate = new Date( new Date().setHours(0, 0, 0, 0)).setDate(dateToday.getDate() - 30);
    const {data : dataCovid, loading, isErr } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${dateToday}`)


    const timeUp = () => {
        alert('time out');
    }
    
    return (
        <>
            <div style={{textAlign : 'center', margin : '16px 0'}}>
                        <CountDown 
                            timeUp = {timeUp}
                        />
                        <hr/>
                        <NewCountDown
                            timeUp = {timeUp}
                        />

                <hr/>
                <h2 >Covid 19</h2>
            </div>
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
                {  loading && isErr.isError === false &&
                  <tr><td colSpan={5} style={{textAlign : 'center'}}>Loading ...</td></tr>
                }

                {  loading === false && isErr.isError === true &&
                  <tr><td colSpan={5} style={{textAlign : 'center'}}>SomeThing Wrong... : {isErr.message}</td></tr>
                }
                { loading === false && 
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