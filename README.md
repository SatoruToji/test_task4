#### Как запустить?
1. Установи зависимости:
```bash
yarn
```

2. Запусти верстку:
```bash
yarn serve
```

#### Upgrade 

- понял что внутри background порядок парсинга инвертирован, т.е. внутри background-image парсел читает снизу вверх.
```css
  background-image: 
    url('/public/images/head/dog.png'),
    url('/public/images/head/effect.jpg'),
    linear-gradient(90deg,rgba(91, 72, 58, 1) 0%, rgba(38, 36, 37, 1) 100%);
```

- изучил новое свойсто `windows`, точнее свойство `matchMedia`, оно возвращает **boolean** если размер окна браузера соответствует условию. 
```js
const mobileBtn = window.matchMedia("(max-width: 500px)");
```

-  ejs. я познакомился с древней библиотекой из 10ых годов, он (шаблонизатор) позволяет тебе декомпозировать html разметку на отдельные блоки/компоненты, не знаю насколько термин из React применим к шаблонизаторам.