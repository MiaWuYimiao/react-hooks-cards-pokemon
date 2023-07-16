import { useState } from "react";
import axios from "axios";

function useAxios(initialItems = [], baseURL) {
    const [items, setItems] = useState(initialItems);

    const addItems = async (formatter, restURL = "") => {
      const response = await axios.get(`${baseURL}${restURL}`);
      setItems(items => [...items, formatter(response.data)]);
    };

    const clearItems = () => setItems([]);

    return [items, addItems, clearItems];
}

export default useAxios;

