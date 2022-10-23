## [ts-todolist-project DEMO](https://ts-course-react.vercel.app/)

## Настройка окружения
- установка реакт и ТС
- npx create-react-app . --template typescript (в текущую папку)
- если устанавлимваемая библиотека обозначена как DT (DefinitelyTyped) то она требует дополнительных установок библиотек с префиксом @types
- например @types/react этот пакет содержит определения типов для React
- если используем файлы jsx то мы обязаны использовать файлы tsx, если нет, то обычный ts
- в TS есть директива три слеша ///, это ссылка на определенные типы
npm start запуск

## Пубрикация проекта на vercel
- create new project
- import current repo
- все настройки по умолчанию, жмем deploy
- предварительно можно, для проверки, собрать локально (npm run build)
