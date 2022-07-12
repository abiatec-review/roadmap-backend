// в чем разница между  SQL и NoSQL?

// Что такое транзакции?
// Рассказать про типы связей таблиц в SQL?
// Рассказать про нормализацию  в SQL?

// Какие виды NoSQL бывают и для чего они используются?

// Что такое QraphQL и для чего он?
// Что такое Redis и для чего он?


// Задача
// 1) Для SQL бд сделать 3 таблицы (юзеров и постов и картинок). Связь между юзером и постом (1:M), между постом и картинками (N:M).
/*
  таблица юзеров
  id - number
  name - string;
  posts - post[];

  таблица постов
  id - number;
  theme - string;
  text - string;
  authorId - string;

  необходимо написать sql скрипт, который реализует пагинацю для выдачи постов пачками по 5 штук (результат должен включать таблицы которые связаны  с юзером)
*/

// 2) Для MongoDB сделать 2 сущности (юзеров и постов - примеры таблиц выше). Связь между юзером и постом (1:M), между постом и картинками (N:M).
/*
  таблица юзеров
  id - number
  name - string;
  posts - post[];

  таблица постов
  id - number;
  theme - string;
  text - string;
  authorId - string;

  необходимо написать крипт, который реализует пагинацю для выдачи постов пачками по 5 штук (результат должен включать сущности которые связаны  с юзером)
*/
