// custom hook to get data from API

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
// how to import it

import useFetch from "./useFetch";
//usage in real time
	const data = useFetch("https://jsonplaceholder.typicode.com/users");
	const todos = useFetch("https://jsonplaceholder.typicode.com/todos");
//redux component

import React, { useEffect, useReducer, useDebugValue } from "react";

const initialState = {
	username: "",
	loading: false,
	users: [],
	error: "",
};
function userReducer(state, action) {
	switch (action.type) {
		case "FETCH_REQUEST":
			return { ...state, loading: true };
		case "FETCH_SUCCESS":
			return { ...state, loading: false, users: action.payload };
		case "FETCH_FAIL":
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
}
export default function ReduxComponent() {
	const [ state, dispatch ] = useReducer(userReducer, initialState);
	useEffect(() => {
		dispatch({ type: "FETCH_REQUEST" });
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: "FETCH_SUCCESS", payload: data });
			})
			.catch((error) => {
				dispatch({ type: "FETCH_FAIL", error: "Something went wrong " + error.toString() });
			});
	}, []);
	return <div>{state.users.map((user) => <p>{user.name}</p>)}</div>;
}


//Useful code

import React, { useState, useEffect, Component, useMemo, useCallback, useRef, useLayoutEffect } from "react";
import useFetch from "./useFetch";
import { MessagesContext, useDetails } from "./Chat";
import GrandChild from "./GrandChild";

export default function Messages() {
	const [ user, setUser ] = useState({ username: "Ravi" });
	const [ count, setCount ] = useState(0);
	const data = useFetch("https://jsonplaceholder.typicode.com/users");
	const todos = useFetch("https://jsonplaceholder.typicode.com/todos");
	const [ a, setA ] = useState(0);
	const [ b, setB ] = useState(0);
	const [ dark, setDark ] = useState(false);
	const sum = useMemo(
		() => {
			return sumOfTwo(a, b);
		},
		[ a, b ],
	);
	const getSum = useCallback(
		(number) => {
			return [ parseInt(a) + parseInt(number) + parseInt(b) + parseInt(number) ];
		},
		[ a, b ],
	);
	const theme = useMemo(
		() => {
			return {
				backgroundColor: dark ? "black" : "white",
				color: dark ? "white" : "black",
			};
		},
		[ dark ],
	);
	const value = useDetails();

	useEffect(
		() => {
			console.log("Theme updated");
		},
		[ theme ],
	);
	useLayoutEffect(
		() => {
			console.log("Theme updated using layout effect");
		},
		[ theme ],
	);
	const input1 = useRef();
	const input2 = useRef();
	return (
		<div>
			<h1>useMemo</h1>
			<input type="number" ref={input1} value={a} onChange={(e) => setA(e.target.value)} />
			<input type="number" ref={input2} value={b} onChange={(e) => setB(e.target.value)} />
			<h2>Sum</h2>
			<div style={theme}>{sum}</div>
			<button onClick={() => setDark(!dark)}>Change Theme</button>
			{/* <h1>Context</h1>
			<p>{value.username}</p>
			<GrandChild /> */}
			<h1>Message Notifications</h1>
			<p>You have received {count} new messages</p>
			<button onClick={() => setCount(getSum(5))}>Get Sum</button>
			<button onClick={() => input1.current.focus()}>Focus Input1</button>
			<button onClick={() => input2.current.focus()}>Focus Input2</button>
			<h1>Users</h1>
			<div>{data.map((user) => <p key={user.name}>{user.name}</p>)}</div>
			<h1>Todos</h1>

			<div>{todos.map((todo) => <p key={todo.title}>{todo.title}</p>)}</div>

			<button onClick={() => setCount(count + 1)}>Send Message</button>
			<br />
			{user.username}
			<br />
			<button onClick={() => setUser({ age: 20 })}>Click</button>
		</div>
	);
}
function sumOfTwo(a, b) {
	for (var i = 0; i < 1000000000; i++) {}
	return parseInt(a) + parseInt(b);
}

// export class Messages extends Component {
// 	state = {
// 		username: "Ravi",
// 	};
// 	render() {
// 		return (
// 			<div>
// 				{this.state.username}
// 				<br />
// 				<button
// 					onClick={() => {
// 						this.setState({ age: 20 });
// 						console.log(this.state);
// 					}}>
// 					Click
// 				</button>
// 			</div>
// 		);
// 	}
// }

// export default Messages;

