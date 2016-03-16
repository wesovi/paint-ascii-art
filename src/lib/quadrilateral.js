"use strict";

const getBuilderData = function getBuilderData(valuesToCreate){
  return Object.assign({
    width : 1,
    height : 1,
    size : 2,
    degree : 0
  }, valuesToCreate);
};

const areNumbersTheValues = function areNumbersTheValues(valuesToCheck) {
  return !valuesToCheck.some((value) => Number.isNaN(+value));
};

const getValidDegree = function getValidDegree(degree) {
    return degree % 360;
};

const multValsAndRound = function multValsAndRound(...vals){
  return Math.round(vals.reduce((total, elem) => total * elem));
};

const getArrayContent = function getArrayContent(size, height, width){
  return Array(multValsAndRound(height, size))
    .fill(Array(multValsAndRound(width, size)).fill('M'));
};

const setValueInBuilderFn = function setValueFn(key, builderData) {
  return function(value){
    builderData[key] = value;
    return this;
  };
};

const getBuilderFn = function getBuilderFn(builderData){
  return function build() {
    const {size, height, width, degree}  = builderData;
    areNumbersTheValues([size, height, width, degree]) || function(){
      throw new TypeError('value to build is nan');
    }();

    return {
      content : getArrayContent(size, height, width),
      degree : getValidDegree(degree)
    };
  }
};

module.exports = {
  create : function create(valuesToCreate = {}){
    const builderData = getBuilderData(valuesToCreate);

    return Object.freeze({
      build  : getBuilderFn(builderData),
      width  : setValueInBuilderFn('width', builderData),
      height : setValueInBuilderFn('height', builderData),
      size   : setValueInBuilderFn('size', builderData),
      degree : setValueInBuilderFn('degree', builderData)
    });
  }
};
