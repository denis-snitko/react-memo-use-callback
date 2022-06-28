import React from "react";
import "./App.css";

import TestRenderComponent from "./TestRenderComponent";

function App() {
	console.log("APP RENDERED!");

	const [count, setCount] = React.useState(0);

	// 1. Если функцию передаем как пропс, то оборачиваем её в React.useCallback() для отмены её пересоздания при перерендере
	// Если не обернуть, то дочерний компонент будет всегда ререндериться, даже если дочений компонент обернут в React.Memo()

  const onClickHandler = React.useCallback(() => {
		setCount((prevState) => prevState + 1);
	}, []);

	// 2. Компонент без React.useCallback()

	// const onClickHandler = () => {
	// 	setCount((prevState) => prevState + 1);
	// };

	return (
		<div className="App">
			<button onClick={onClickHandler}>onClickHandler</button>
			<br />
			{count}
			<TestRenderComponent click={onClickHandler} /* count={count} */ />
		</div>
	);
}

export default App;
