# Фреймворк для работы с линейными маркированными списками UL
**Цель:** <br> 
Целью фреймворка является кастомизация линейных маркированных списков
## Использование
Подключаем фаил 
```
<script src="cu.js"  type="text/javascript"></script>
```
Функция **cu(str)** - поиск списков UL по заданному селектору <br>
**Варианты поиска элементов** <br>
__*__ - Поиск всех UL в документе <br>
__#__ - Поиск по id <br>
__.__ - Поиск по классу <br>
<br>
Метод **.makeCustomUl('customClass')** - добавляет пользовательский класс.
Стили хранятся в файле **style.css** <br>
**Пример использования:**
```
<script>
  cu('#first').makeCustomUl('older');
  cu('.second').makeCustomUl('rounded');
  cu('.third').makeCustomUl('bullet');
</script> 
```