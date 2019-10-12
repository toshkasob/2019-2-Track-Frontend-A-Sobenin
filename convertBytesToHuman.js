/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here

  /*if (bytes.length == 0)
    return false;
  */
  let typeBytes = typeof bytes;
  let flagIsBytesNumber = (typeBytes == typeof(1));
  if (flagIsBytesNumber == false) 
  {
    //alert(`[In] Types of bytes (${typeBytes}) is incorrect`);
    return false;
  } else if (isNaN(bytes))
  {
    //alert (`[In] bytes(${bytes}) is NaN`);
    return false;
  } else if (!isFinite(bytes))
  {
    //alert (`[In] bytes(${bytes}) is NaN`);
    return false;
  } else if (bytes < 0) 
  {
    //alert (`[In] bytes(${bytes}) is negative`);
    return false;
  }
  
  /*if (!isFinite(bytes))
  {
    return false;
  } else if (bytes < 0) 
  {
    //alert (`[In] bytes(${bytes}) is negative`);
    return false;
  }
  */
  let arr = ["B", "KB", "MB", "GB", "TB"];
  let index2suffixBytes = 0;
  for (let index = 0; index < arr.length; index++) {
    if (Math.floor(bytes / (1024**index) ) === 0) break;
    index2suffixBytes = index;
  }
  /*let outString =  `convertBytesToHuman(${bytes}) === `;
  outString += `'${Math.round( (bytes / (1024**index2suffixBytes)) * 100) / 100} `;
  outString += `${arr[index2suffixBytes]}';`;
  */
 //корректировка выходных данных
  let outString = `${Math.round( (bytes / (1024**index2suffixBytes)) * 100) / 100} `;
  outString += `${arr[index2suffixBytes]}`;
  //alert (`[Out] ${outString}`);
  return outString;

}

/*
  функции были созданы еще до первого коммита в мастер,
  поэтому в pull_request видимо не отображались изменения
*/