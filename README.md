# Пример эффективности связки React.memo и React.useCallback

## Собрано с помощью [Vite](https://vitejs.dev/guide/)

<br />

## Установка зависимостей

```bash
npm install
```

## Запуск проекта

```bash
npm run dev
```

## Как это работает

- Если функцию передаем как пропс, то оборачиваем её в React.useCallback() для отмены её пересоздания при перерендере компонента в котором эта функция создана

- Если не обернуть, то дочерний компонент, в который передается функция, будет всегда ререндериться, даже если дочений компонент обернут в React.Memo()

### Использование React.memo()
- Оборачиваем компонент в React.memo() для оптимизации производительности.

- Компонент будет обновляться только в том случае, если изменились приходящие в него пропсы.

- Если передается функция в качестве пропса, то для лучшей производительности нужно обернуть её в React.useCallback() в компоненте в котором она создана

- Даже если в компонент не передаются пропсы, без React.memo() компонент будет обновляться при ре-рендере родительского компонента
