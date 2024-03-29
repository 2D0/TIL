import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

export const ArraysTIL = () => {
  const chunk = (inputArray: Array<any>, chunkSize: number) => {
    if (inputArray.length < chunkSize)
      return alert('나누는 값이 배열의 길이보다 큽니다.');

    let array;
    const arrayCount = Math.floor(inputArray.length / chunkSize);

    for (let i = 0; i < arrayCount; i++) {
      const sliceItem = inputArray.slice(
        i * chunkSize,
        i * chunkSize + chunkSize,
      );
      array = array ? [...array, sliceItem] : [sliceItem];
    }

    const otherArrayLength = inputArray.length % chunkSize;
    const otherArray = inputArray.slice(-otherArrayLength);

    return otherArrayLength > 0 ? [...array, otherArray] : array;
  };

  console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};
