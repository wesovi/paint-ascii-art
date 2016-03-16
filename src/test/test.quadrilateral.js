const expect = require('chai').expect;
const Quadrilateral = require('../lib/quadrilateral');

describe('Build an array that represents a quadrilateral.',function(){

    it('should the create be defined and function', function() {
      expect(Quadrilateral.create).to.be.a('function');
    });

    it('should return a builder object', function() {
      expect(Quadrilateral.create()).to.be.a('object');
    });

    it('should return a square with default values', function() {
      // DEFAULT { width : 1, height : 1, size : 2}
      const square = Quadrilateral.create().build();
      expect(square.content).to.eql([
        ['M','M'],
        ['M','M']
      ]);
      expect(square.degree).to.equal(0);
    });

    it('should return a quadrilateral when invoking create method with params', function() {
      var rec = Quadrilateral.create({
        width : 1,
        height : 0.5,
        size : 4
      });

      expect(rec.build().content).to.eql([
        ['M','M','M','M'],
        ['M','M','M','M']
      ]);
    });

    it('should return a quadrilateral when invoking create method with float numbers', function() {
      var rec = Quadrilateral.create({
        width : 0.333,
        height : 0.333,
        size : 4
      });

      expect(rec.build().content).to.eql([
        ['M']
      ]);
    });

    it('should return throws an Error when creating a quadrilateral', function() {
      expect(function(){
        Quadrilateral.create({
          width : 1,
          height : 'm',
          size : 4
        }).build();
      }).to.throw(TypeError);

      expect(function(){
        Quadrilateral.create()
          .degree('m').build();
      }).to.throw(TypeError);

      expect(function(){
        Quadrilateral.create()
          .width('m').build();
      }).to.throw(TypeError);

    });

    it('should return differents quadrilaterals with various sizes', function() {
      var recOne = Quadrilateral.create()
                  .width(0.5)
                  .size(4);

      expect(recOne.build().content).to.eql([
        ['M','M'],
        ['M','M'],
        ['M','M'],
        ['M','M']
      ]);

      recOne.height(2)
        .width(1);

      expect(recOne.build().content).to.eql([
        ['M','M','M','M'],
        ['M','M','M','M'],
        ['M','M','M','M'],
        ['M','M','M','M'],
        ['M','M','M','M'],
        ['M','M','M','M'],
        ['M','M','M','M'],
        ['M','M','M','M']
      ]);

      var recTwo = Quadrilateral.create()
                      .width(3)
                      .build();

      // DEFAULT size : 2
      expect(recTwo.content).to.eql([
        ['M','M','M','M','M','M'],
        ['M','M','M','M','M','M']
      ]);
    });

    it('should return differents quadrilaterals with various degree tilt', function() {
      const square = Quadrilateral.create();
      const degrees = [
        { toSet : 45, toExpect : 45 },
        { toSet : -45, toExpect : -45 },
        { toSet : 365, toExpect : 5 },
        { toSet : -370, toExpect : -10 }
      ];

      degrees.forEach(function(objToTest){
        const { toSet : degree , toExpect : result } = objToTest;
        square.degree(degree);
        expect(square.build().degree).to.equal(result);
      });
    });

});
