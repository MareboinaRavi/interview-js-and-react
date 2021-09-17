import React, { useEffect, useState, useDebugValue } from "react";

export default function useFetch(url) {
	const [ data, setData ] = useState([]);
	useDebugValue(data.length > 0 ? "Loaded" : "Not loaded");
	useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => {
			setData(data);
		});
	}, []);
	return data;
}

// custom hook to get data from API
