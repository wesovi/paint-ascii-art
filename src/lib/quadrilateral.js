"use strict";

const getBuilderData = function getBuilderData(valuesToCreate){
  return Object.assign({
    width : 1,
    height : 1,
    size : 2,
    degree : 0
  }, valuesToCreate);
};

const areNumbersTheValues = function areNumbersTheValues(values) {
  return !Object.keys(values).some(function(value){
    return Number.isNaN(+values[value]);
  });
};

const getValidDegree = function getValidDegree(degree) {
    return degree % 360;
};

const getArrayContent = function getArrayContent(valuesToBuild){
  return Array(Math.round(valuesToBuild.height * valuesToBuild.size))
    .fill('M'.repeat(Math.round(valuesToBuild.width * valuesToBuild.size)));
};

const setValueInBuilderFn = function setValueFn(key, builderData) {
  return function(value){
    builderData[key] = value;
    return this;
  };
};

const getBuilderFn = function getBuilderFn(builderData){
  return function build() {
    areNumbersTheValues(builderData) || function(){
      throw new TypeError('value to build is nan');
    }();

    return {
      content : getArrayContent(builderData),
      degree : getValidDegree(builderData.degree)
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
