## Копирование директории

В файле `index.js` папки `04-copy-directory` реализуйте функцию `copyDir`, которая копирует содержимое папки `files` в папку `files-copy`.

### Общие правила

- Использование сторонних модулей запрещено.
- Каждая задача должна быть выполнена <u>в корневой директории</u> с помощью команды `node <имя папки задания>`.
- Использование синхронных функций из **fs модуля**, таких как `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])` и других из раздела [synchronous API](https://nodejs.org/api/fs.html#fs_synchronous_api), запрещено.

### Требования

- [ ] После завершения выполнения функции создается папка `files-copy`, содержимое которой является точной копией оригинальной папки `files`.
- [ ] При добавлении/удалении/изменении файлов в папке `files` и повторном запуске `node 04-copy-directory` содержимое папки `files-copy` обновляется.
- [ ] Использование `fsPromises.cp()` запрещено.

### Цели

- Научиться копировать файлы и директории.

### Описание

Шаги для выполнения задачи:

1. Импортируйте все необходимые модули.
2. Создайте папку `files-copy`, если она еще не существует.
3. Прочитайте содержимое папки `files`.
4. Скопируйте файлы из папки `files` в папку `files-copy`.

### Советы

Обратите внимание на опцию `recursive`, которую можно передать в `fsPromises/mkdir`. С её помощью вы можете избежать ошибок в случаях, когда директория уже существует.

##### Полезные ссылки

- [copyFile](https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_mode)
- [fs.copyFile() Function](https://www.geeksforgeeks.org/node-js-fs-copyfile-function/)
- [mkdir](https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_options)
- [fs.mkdir() Method](https://www.geeksforgeeks.org/node-js-fs-mkdir-method/)
