/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('testString')).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(-1023)).toBe(false)
  expect(convertBytesToHuman([25,12,1024])).toBe(false)
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman(alert())).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman("Мерседес выигрывает F1 GP Russua in Sochi в 6 раз")).toBe(false)
  expect(convertBytesToHuman(/* ... */)).toBe(/* ... */false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-Infinity)).toBe(false)
  //let infConstVar = Infinity;
  //expect(convertBytesToHuman(/* ... */infConstVar)).toBe(/* ... */false)
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  //expect(convertBytesToHuman(/* ... */)).toBe(/* ... */)
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(1)).toBe('1 B')
  expect(convertBytesToHuman(1023)).toBe('1023 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(1025)).toBe('1 KB')
  expect(convertBytesToHuman(524288)).toBe('512 KB')
  expect(convertBytesToHuman(1048576)).toBe('1 MB')
  expect(convertBytesToHuman(1048570)).toBe('1023.99 KB')
  expect(convertBytesToHuman(1048571)).toBe('1024 KB')
  expect(convertBytesToHuman(1053818)).toBe('1 MB')
  expect(convertBytesToHuman(1053819)).toBe('1.01 MB')
  expect(convertBytesToHuman(1572864)).toBe('1.5 MB')
  expect(convertBytesToHuman(3221225472)).toBe('3 GB')
  expect(convertBytesToHuman(13491007672811)).toBe('12.27 TB')
  expect(convertBytesToHuman(1349100767281)).toBe('1.23 TB')
  expect(convertBytesToHuman(134910076728)).toBe('125.64 GB')
  expect(convertBytesToHuman(1064910076)).toBe('1015.58 MB')
  // ...
});

// другая группа проверок
test('Не выдает значение для некорретных чисел', () => {
  expect(convertBytesToHuman('testString')).not.toBe('NaN B')
  expect(convertBytesToHuman(-1023)).not.toBe('1023 B')
  expect(convertBytesToHuman(-1023)).not.toBe('-1023 B')
  expect(convertBytesToHuman(-1023)).not.toBe('1023 B')
  expect(convertBytesToHuman(-1023)).not.toBe('-1023 B')
  expect(convertBytesToHuman(null)).not.toBe('0 B')
  expect(convertBytesToHuman(null)).not.toBe('0 B')
  expect(convertBytesToHuman(alert())).not.toBe('NaN B')
  expect(convertBytesToHuman(true)).not.toBe('0 B')
  expect(convertBytesToHuman(true)).not.toBe('NaN B')
  expect(convertBytesToHuman(undefined)).not.toBe('NaN B')
  expect(convertBytesToHuman("1023")).not.toBe('1023 B')
  expect(convertBytesToHuman(Infinity)).not.toBe('NaN B')
  expect(convertBytesToHuman(Infinity)).not.toBe('0 B')
  expect(convertBytesToHuman(-Infinity)).not.toBe('NaN B')
  expect(convertBytesToHuman(-Infinity)).not.toBe('0 B')
  expect(convertBytesToHuman(/* ... */)).not.toBe(/* ... */'NaN B')
  // ...
});

/*
  функции были созданы еще до первого коммита в мастер,
  поэтому в pull_request видимо не отображались изменения
*/