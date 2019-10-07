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
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  //expect(convertBytesToHuman(/* ... */)).toBe(/* ... */)
  expect(convertBytesToHuman(0)).toBe(`convertBytesToHuman(0) === '0 B';`)
  expect(convertBytesToHuman(1)).toBe(`convertBytesToHuman(1) === '1 B';`)
  expect(convertBytesToHuman(1023)).toBe(`convertBytesToHuman(1023) === '1023 B';`)
  expect(convertBytesToHuman(1024)).toBe(`convertBytesToHuman(1024) === '1 KB';`)
  expect(convertBytesToHuman(1025)).toBe(`convertBytesToHuman(1025) === '1 KB';`)
  expect(convertBytesToHuman(524288)).toBe(`convertBytesToHuman(524288) === '512 KB';`)
  expect(convertBytesToHuman(1048576)).toBe(`convertBytesToHuman(1048576) === '1 MB';`)
  expect(convertBytesToHuman(1048570)).toBe(`convertBytesToHuman(1048570) === '1023.99 KB';`)
  expect(convertBytesToHuman(1048571)).toBe(`convertBytesToHuman(1048571) === '1024 KB';`)
  expect(convertBytesToHuman(1053818)).toBe(`convertBytesToHuman(1053818) === '1 MB';`)
  expect(convertBytesToHuman(1053819)).toBe(`convertBytesToHuman(1053819) === '1.01 MB';`)
  expect(convertBytesToHuman(1572864)).toBe(`convertBytesToHuman(1572864) === '1.5 MB';`)
  expect(convertBytesToHuman(3221225472)).toBe(`convertBytesToHuman(3221225472) === '3 GB';`)
  expect(convertBytesToHuman(13491007672811)).toBe(`convertBytesToHuman(13491007672811) === '12.27 TB';`)
  expect(convertBytesToHuman(1349100767281)).toBe(`convertBytesToHuman(1349100767281) === '1.23 TB';`)
  expect(convertBytesToHuman(134910076728)).toBe(`convertBytesToHuman(134910076728) === '125.64 GB';`)
  expect(convertBytesToHuman(1064910076)).toBe(`convertBytesToHuman(1064910076) === '1015.58 MB';`)
  // ...
});

// другая группа проверок
test('Не выдает значение для некорретных чисел', () => {
  expect(convertBytesToHuman('testString')).not.toBe(`convertBytesToHuman(testString) === 'NaN B';`)
  expect(convertBytesToHuman(-1023)).not.toBe(`convertBytesToHuman(1023) === '1023 B';`)
  expect(convertBytesToHuman(-1023)).not.toBe(`convertBytesToHuman(-1023) === '-1023 B';`)
  expect(convertBytesToHuman(-1023)).not.toBe(`convertBytesToHuman(-1023) === '1023 B';`)
  expect(convertBytesToHuman(-1023)).not.toBe(`convertBytesToHuman(1023) === '-1023 B';`)
  expect(convertBytesToHuman(null)).not.toBe(`convertBytesToHuman(0) === '0 B';`)
  expect(convertBytesToHuman(null)).not.toBe(`convertBytesToHuman(null) === '0 B';`)
  expect(convertBytesToHuman(alert())).not.toBe(`convertBytesToHuman(undefined) === 'NaN B';`)
  expect(convertBytesToHuman(true)).not.toBe(`convertBytesToHuman(true) === '0 B';`)
  expect(convertBytesToHuman(true)).not.toBe(`convertBytesToHuman(true) === 'NaN B';`)
  expect(convertBytesToHuman(undefined)).not.toBe(`convertBytesToHuman(undefined) === 'NaN B';`)
  expect(convertBytesToHuman("1023")).not.toBe(`convertBytesToHuman(1023) === '1023 B';`)
  expect(convertBytesToHuman(/* ... */)).not.toBe(/* ... */`convertBytesToHuman(undefined) === 'NaN B';`)
  // ...
});

/*
  функции были созданы еще до первого коммита в мастер,
  поэтому в pull_request видимо не отображались изменения
*/