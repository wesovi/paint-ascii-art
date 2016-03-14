function createQuadrilateral(valuesToCreate){
  valuesToCreate = valuesToCreate || {};
  const valuesToBuild = Object.assign({
    width : 2,
    height : 2,
    size : 1,
    degree : 0
  }, valuesToCreate);

  const build = function build() {
    const degree =  valuesToBuild.degree;
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
  create : createQuadrilateral
};
