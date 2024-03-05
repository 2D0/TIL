import React from 'react';
import logo from './../../logo.svg';
import './../../App.css';

export const ThisLab = () => {
  //화살표 함수의 this
  const arrowObj = {
    arrowFunction: () => {
      console.log('arrowFunction', this);
    },
  };
  arrowObj.arrowFunction();

  const anotherFunction = arrowObj.arrowFunction;
  anotherFunction();

  //화살표 함수 호출
  const arrowFunction = () => {
    console.log('arrowFunction', this);
  };
  arrowFunction();
  //함수 호출
  function globalThis() {
    console.log('globalThis', this);
  }
  globalThis();

  //객체 호출
  const obj = {
    name: 'obj',
    globalThis: globalThis,
  };
  obj.globalThis();

  //클래스 호출
  class Test {
    globalThis = globalThis;
  }
  const test = new Test();
  test.globalThis();

  //메소드 호출
  const methodObj = {
    method() {
      console.log('method', this);
    },
  };
  methodObj.method();

  //생성자 함수 호출
  function Constructor() {
    console.log('Constructor', this);
    this.value = 42;
  }
  const constructor = new Constructor();
  console.log(constructor);

  //콜백 호출
  const callbackObj = {
    value: 42,
    callback() {
      function innerFunction() {
        console.log('innerFunction', this);
      }
      innerFunction();
    },
  };
  callbackObj.callback();

  //apply / call / bind 호출
  function showThis(a) {
    console.log('showThis', this, a);
  }
  const thisObj = {
    value: 42,
  };
  showThis.call(thisObj, 'call');
  showThis.apply(thisObj, ['apply']);
  const thisBind = showThis.bind(thisObj);
  thisBind('bind');

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
