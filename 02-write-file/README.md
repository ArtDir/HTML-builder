## Запись консольного ввода в файл

В файле `index.js` в директории `02-write-file` разработайте скрипт, который выводит приветствие в консоль, ожидает ввода текста и записывает введенный текст в файл.

### Общие правила

- Использование сторонних модулей запрещено.
- Каждая задача должна быть выполнена <u>в корневой директории</u> с помощью команды `node <имя папки задания>`.
- Использование синхронных функций из **fs модуля**, таких как `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])` и других из раздела [synchronous API](https://nodejs.org/api/fs.html#fs_synchronous_api), запрещено.

### Требования

- [ ] Внутри папки `02-write-file` находится 1 файл `index.js`.
- [ ] При выполнении команды `node 02-write-file` <u>в корневой директории репозитория</u> создается текстовый файл в папке `02-write-file`, и в консоли отображается приглашение для ввода текста (текст приглашения на ваш выбор).
- [ ] После ввода текста введенный текст должен быть записан в ранее созданный файл в директории `02-write-file`. Процесс не завершается и ожидает нового ввода.
- [ ] После следующего ввода изначально созданный текстовый файл дополняется новым текстом, и процесс продолжает ожидать ввода.
- [ ] При нажатии комбинации клавиш `ctrl + c` или вводе `exit` в консоль отображается прощальная фраза (текст прощальной фразы на ваш выбор), и процесс завершается.

### Цели

- Укрепить понимание основ работы с событиями и потоками в Node.js.
- Работа с глобальным объектом **process**.

### Описание

В этой задаче вы разработаете программу, которая читает ваш консольный ввод до тех пор, пока процесс не будет принудительно завершен с помощью `ctrl + c` или не будет введено ключевое слово `exit`.

Шаги для выполнения задачи следующие:

1. Импортируйте все необходимые модули.
2. Создайте поток записи в текстовый файл.
3. Выведите приветственное сообщение в консоль.
4. Ожидайте пользовательский ввод с последующей проверкой на наличие ключевого слова `exit`.
5. Запишите введенный текст в файл.
6. Ожидайте дальнейший ввод.
7. Реализуйте прощальное сообщение при остановке процесса.

### Советы

Для успешного выполнения этой задачи вам потребуется применить знания о событиях и потоках, которые вы получили ранее. Кроме того, важно понимание глобального объекта **process** и его возможностей. Использование его событий позволяет перехватывать сигналы, отправляемые процессу, такие как команда прерывания `ctrl + c`.

Чтение чего-либо из потока с помощью **модуля Readline** может быть полезным. Стандартный поток ввода `stdin`, являясь **ReadableStream**, хорошо подходит для этого.

##### Полезные ссылки

_Пожалуйста, обратите внимание, если вы ищете информацию на русском языке, что переводы документации могут быть устаревшими. Они могут не включать все последние возможности модулей. Для получения самой актуальной и точной информации всегда обращайтесь к официальной документации!_

- Process:
  - [Process](https://nodejs.org/api/process.html)
  - [Node Process Object Explained](https://www.freecodecamp.org/news/node-process-object-explained/)
  - [Signal events](https://nodejs.org/api/process.html#process_signal_events)
  - [Node.js Process Signal Events](https://www.geeksforgeeks.org/node-js-process-signal-events/)
- Readline:
  - [Readline](https://nodejs.org/api/readline.html)
  - [Node.js Readline() Module](https://www.geeksforgeeks.org/node-js-readline-module/)
- События:
  - [Understanding Node.js Event-Driven Architecture](https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/)
  - [The Node.js Event emitter](https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter)
  - [Events](https://nodejs.org/api/events.html)
  - [Events in Node.js](https://medium.com/@diego.coder/events-in-node-js-76fbe1b6cdad)
- Потоки:
  - [Stream](https://nodejs.org/api/stream.html)
  - [fs.createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
  - [Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
  - [Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
- Модуль Path:
  - [Path](https://nodejs.org/api/path.html)
  - [Node.js Path Module](https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/)
