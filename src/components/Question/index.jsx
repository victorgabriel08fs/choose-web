import axios from "axios";
import { useEffect, useState } from "react";

export function Question({ alt1, alt2, choosed, setChoosed }) {
    const [result, setResult] = useState({});

    function getResult(alt1, alt2) {
        axios.get(`${process.env.REACT_APP_API_URL}/question/result/${alt1}/${alt2}`).then(async (response) => {
            var data = await response.data;
            setResult(data);
        });
    }

    async function vote(side) {
        axios.post(`${process.env.REACT_APP_API_URL}/question`,
            { alt1: alt1.id, alt2: alt2.id, choose: side.id }
        ).then(async response => {
            var data = await response.data;
            setChoosed(true)
        })
            .catch(error => {
                console.log(error);
            });

        getResult(alt1.id, alt2.id);
    }

    useEffect(() => {
        getResult(alt1.id, alt2.id)
    }, [alt1, alt2])

    return (
        <>
            <div className="flex justify-between rounded-md overflow-hidden">
                <button disabled={choosed} onClick={() => vote(alt1)} className="bg-red-500 h-[100px]" style={{ width: choosed ? `${result.alt1 * 15}px` : `${50 * 15}px` }}>{choosed ? `${result.alt1.toFixed(2)}%` : alt1.text}</button>
                <button disabled={choosed} onClick={() => vote(alt2)} className="bg-blue-500 h-[100px]" style={{ width: choosed ? `${result.alt2 * 15}px` : `${50 * 15}px` }}>{choosed ? `${result.alt2.toFixed(2)}%` : alt2.text}</button>
            </div>
        </>
    );
}