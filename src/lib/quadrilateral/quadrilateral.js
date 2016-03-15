"use strict";

function create(valuesToCreate = {}){

  const valuesToBuild = Object.assign({
    width : 1,
    height : 1,
    size : 2,
    degree : 0
  }, valuesToCreate);

  function areNumbersTheValues(values) {
    return !Object.keys(values).some(function(value){
      return Number.isNaN(+values[value]);
    });
  }

  function getValidDegree(degree) {
    const sign = degree > 0 ? +1 : -1;
    degree = Math.abs(degree);
    return sign * (function recursiveDegree(degreeR){
      return degreeR >= 360 ? recursiveDegree((degreeR - 360)) : degreeR;
    })(degree);
  }

  const build = function build() {
    areNumbersTheValues(valuesToBuild) || function(){
      throw new TypeError('value to build is nan');
    }();

    const degree = getValidDegree(valuesToBuild.degree);
    const content = Array(valuesToBuild.height * valuesToBuild.size)
      .fill('M'.repeat(valuesToBuild.width * valuesToBuild.size));

    return {
      content,
      degree
    };
  };

  const setValueFn = function setValueFn(key) {
    return function(value){
      valuesToBuild[key] = value;
      return this;
    };
  }

  return Object.freeze({
    build,

    width : setValueFn('width'),

    height : setValueFn('height'),

    size : setValueFn('size'),

    degree : setValueFn('degree')
  });
}

module.exports = {
  create
};
