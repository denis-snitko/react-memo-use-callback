import React from "react";
import { useWhyDidYouUpdate } from "ahooks";

/**
 *
 * Использование React.memo()
 * Оборачиваем компонент в React.memo() для оптимизации производительности.
 * Работает так.
 * Компонент будет обновляться только в том случае, если изменились приходящие в него пропсы.
 *
 * Если передается функция в качестве пропса, то для лучшей производительности нужно обернуть её в React.useCallback()
 *
 * Без React.memo() компонент будет обновляться при ре-рендере родительского компонента
 *
 */


// 1. Оборачиваем компонент в React.memo()

const TestRenderComponent = React.memo(({ count, click }) => {
	console.log("TestRenderComponent RENDERED!");

	// Штука для проверки от каких пропсов перерендерился компонент
	useWhyDidYouUpdate("TestRenderComponent", { count, click });

	return (
		<>
			<div>TestRenderComponent</div>
			<button onClick={click}>Click for change parent state</button>
			<br />
			{count || 'no count'}
		</>
	);
});

// 2. Компонет без React.memo()

// const TestRenderComponent = ({ count, click }) => {
// 	console.log("TestRenderComponent RENDERED!");

// 	// Штука для проверки почему перерендерился компонент
// 	useWhyDidYouUpdate("TestRenderComponent", { click, count });

// 	return (
// 		<>
// 			<div>TestRenderComponent</div>
// 			<button onClick={click}>Click for change parent state - {count}</button>
//      <br />
//			{count || 'no count'}
// 		</>
// 	);
// };

export default TestRenderComponent;
