## Чтение файла с выводом в консоль

В файле `index.js` в директории `01-read-file` разработайте скрипт, который выводит содержимое файла `text.txt` в консоль.

### Общие правила

- Использование сторонних модулей запрещено.
- Каждая задача должна быть выполнена <u>в корневой директории</u> с помощью команды `node <имя папки задания>`.
- Использование синхронных функций из **fs модуля**, таких как `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])` и других из раздела [synchronous API](https://nodejs.org/api/fs.html#fs_synchronous_api), запрещено.

### Требования

- [ ] Внутри папки `01-read-file` находятся 2 файла, `index.js` и `text.txt`.
- [ ] При выполнении команды `node 01-read-file` <u>в корневой директории репозитория</u>, содержимое файла `text.txt` должно быть выведено в консоль.
- [ ] В коде не должны использоваться синхронные методы чтения файлов.
- [ ] Чтение файла должно происходить с использованием **ReadStream**.

### Цели

- Познакомиться с основами работы с файловой системой на платформе Node.js.
- Изучить основы потоков и событий.
- Ознакомиться с модулем Path и научиться использовать его для построения абсолютных путей к файлам.

### Описание

В этой задаче вам необходимо разработать небольшой скрипт, который выводит содержимое заранее подготовленного текстового файла в консоль. Вы можете следовать этим шагам:

1. Импортируйте необходимые модули для выполнения задачи:

- Для взаимодействия с файловой системой в Node.js используйте [fs модуль](https://nodejs.org/api/fs.html#fs_file_system).
- Для корректного указания пути к файлу вам понадобится [модуль Path](https://nodejs.org/api/path.html#path).

2. Создайте новый **ReadStream** из файла `text.txt`.
3. Направьте поток чтения в стандартный поток вывода.

### Советы

Для импортов в Node.js используйте [модули CommonJS](https://nodejs.org/docs/latest/api/modules.html#modules_modules_commonjs_modules).  
Несмотря на то, что Node.js теперь имеет почти полную поддержку **модулей ECMAScript** (`import/export`), этот подход еще не полностью стабилен, и подавляющее большинство кода, с которым вы столкнетесь, будет написано с использованием CommonJS:

```js
const fs = require('fs');
```

Для чтения файла вы будете использовать [потоки](https://nodejs.org/api/stream.html#readable-streams), которые являются важной и полезной частью платформы. Благодаря им вы можете обрабатывать большие объемы данных порциями на лету, потребляя минимальное количество ресурсов, вместо того чтобы загружать их в память целиком. В вашей будущей работе вы будете сталкиваться с ними неоднократно.

Важно ознакомиться с еще одной фундаментальной концепцией в Node.js: **События**. Node.js широко использует события, и большинство объектов являются экземплярами класса `EventEmitter`. Понимание работы потоков значительно улучшается после знакомства с событиями, так как каждый поток является наследником `EventEmitter`.
Материалы по этим темам также прилагаются в разделе [Полезные ссылки](#useful-links).

При создании **ReadStream** обратите внимание на то, что команда для запуска вашего кода должна выполняться <u>в корневой директории репозитория</u>. Поэтому важно правильно передать путь к файлу для чтения.  
Node.js в случае передачи относительного пути к файлу вида `./text.txt` будет искать его относительно директории, <u>в которой был запущен процесс</u>.  
[Функция join](https://nodejs.org/api/path.html#path_path_join_paths) из **модуля Path** позволяет создать полный путь к текстовому файлу на основе переменной `__dirname`, которая хранит путь к директории, где находится ваш файл скрипта. Таким образом, директория, из которой вы запускаете код, не повлияет на местоположение требуемого файла, и вы всегда будете обращаться к `text.txt`, расположенному рядом с `index.js`.  
[Модуль Path](https://nodejs.org/api/path.html) также содержит другие полезные функции для манипуляции с путями, поэтому настоятельно рекомендую изучить его возможности.

У вас будет несколько вариантов для направления вашего потока чтения в [стандартный поток вывода](https://en.wikipedia.org/wiki/Standard_streams) (т.е. консоль). Вы можете использовать как высокоуровневый [console.log()](https://nodejs.org/api/console.html#console_console_log_data_args), так и работать напрямую с потоком вывода [process.stdout](https://nodejs.org/api/process.html#process_process_stdout).

##### Полезные ссылки

_Если вы ищете информацию на русском языке, обратите внимание, что переводы документации на русский язык могут быть устаревшими и могут не содержать всех современных возможностей модулей.  
Для получения актуальной информации всегда используйте официальную документацию!_

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
- Path:
  - [Path](https://nodejs.org/api/path.html)
  - [Node.js Path Module](https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/)
- Process:
  - [Process](https://nodejs.org/api/process.html)
  - [Node Process Object Explained](https://www.freecodecamp.org/news/node-process-object-explained/)
