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
      const triangle = Triangle.create().build();
      // DEFAULT { base : 3}
      expect(triangle.content).to.eql([
        ['·','M','·'],
        ['M','M','M']
      ]);

      expect(square.degree).to.equal(0);
    });

    it('should return a triangle when invoking create method with params', function() {
      const triangle = Triangle.create({
        base : 9
      }).build();
      expect(triangle.content).to.eql([
        ['·','·','·','·','M','·','·','·','·'],
        ['·','·','·','M','M','M','·','·','·'],
        ['·','·','M','M','M','M','M','·','·'],
        ['·','M','M','M','M','M','M','M','·'],
        ['M','M','M','M','M','M','M','M','M']
      ]);
    });

    it('should return a triangle when invoking create method with float numbers', function() {
      const triangle = Triangle.create({
        base : 9.111111
      }).build();
      expect(triangle.content).to.eql([
        ['·','·','·','·','M','·','·','·','·'],
        ['·','·','·','M','M','M','·','·','·'],
        ['·','·','M','M','M','M','M','·','·'],
        ['·','M','M','M','M','M','M','M','·'],
        ['M','M','M','M','M','M','M','M','M']
      ]);
    });


    it('should return throws an Error when creating a triangle', function() {
      expect(function(){
        Triangle.create({
          base : 'm'
        }).build();
      }).to.throw(TypeError);

      expect(function(){
        Triangle.create().base('m').build();
      }).to.throw(TypeError);
    });

    it('should return differents triangles with various values to base', function() {
      const triangle = Triangle.create();
      [{
          base : 6,
          output : [
            ['·','·','M','M','·','·'],
            ['·','M','M','M','M','·'],
            ['M','M','M','M','M','M']
          ]
        }, {
          base : 3,
          output : [
            ['·','M','·'],
            ['M','M','M']
          ]
        }, {
          base : 2,
          output : [
            ['M','M']
          ]
        }, {
          base : 1,
          output : [
            ['M']
          ]
      }].forEach(function(objToTest) {
        const {base, output} = objToTest;
        triangle.base(6);
        expect(triangle.build().content).to.eql(output);
      });
    });

    it('should return differents triangles with various degree tilt', function() {
      const triangle = Triangle.create();
      const degrees = [
        { toSet : 45, toExpect : 45 },
        { toSet : -45, toExpect : -45 },
        { toSet : 365, toExpect : 5 },
        { toSet : -370, toExpect : -10 }
      ].forEach(function(objToTest){
        const { toSet : degree , toExpect : result } = objToTest;
        triangle.degree(degree);
        expect(triangle.build().degree).to.equal(result);
      });
    });

});
