import React, { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";
const useAxios = (url) => {
    
    const [response, setResponse] = useState([]);
    const addResponse = async () => {
        const result = await axios.get(url );
        setResponse(currentData => [...currentData, {...result.data , id: uuid()}]);
    };
    const addEndPoint = async (endPoint) => {
        const result = await axios.get(url + endPoint);
        setResponse(currentData => [...currentData, {...result.data , id: uuid()}]);
    };

    return [response, addResponse, addEndPoint];
}

export default useAxios;
