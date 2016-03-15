const expect = require('chai').expect;
const Triangle = require('../lib/triangle');

describe('Build an array that represents a triangle.',function(){

    it('should the create be defined and function', function() {
      expect(Triangle.create).to.be.a('function');
    });

    it('should return a builder object', function() {
      expect(Triangle.create()).to.be.a('object');
    });

    it('should return a triangle with default values', function() {
      //TO IMPLEMENT
      expect(square.degree).to.equal(0);
    });

    it('should return a triangle when invoking create method with params', function() {
      //TO IMPLEMENT
    });

    it('should return a triangle when invoking create method with float numbers', function() {
      //TO IMPLEMENT
    });

    it('should return throws an Error when creating a triangle', function() {
      //TO IMPLEMENT
    });

    it('should return differents triangles with various sizes', function() {
      //TO IMPLEMENT
    });

    it('should return differents triangles with various degree tilt', function() {
      const triangle = Triangle.create()
                      .degree(45);

      expect(triangle.build().degree).to.equal(45);
      triangle.degree(-45);
      expect(triangle.build().degree).to.equal(-45);
      triangle.degree(365);
      expect(triangle.build().degree).to.equal(5);
      triangle.degree(-370);
      expect(triangle.build().degree).to.equal(-10);
    });

});
