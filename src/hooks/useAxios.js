import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

function useAxios(initialItems = [], baseURL) {
    const [items, setItems] = useState(initialItems);
    const addItems = async (restURL = "") => {
      const response = await axios.get(`${baseURL}${restURL}`);
      setItems(items => [...items, { ...response.data, id: uuid() }]);
    };
    return [items, addItems];
}

export default useAxios;

