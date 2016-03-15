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
        'MM',
        'MM'
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
        'MMMM',
        'MMMM'
      ]);
    });

    it('should return a quadrilateral when invoking create method with float numbers', function() {
      var rec = Quadrilateral.create({
        width : 0.333,
        height : 0.333,
        size : 4
      });

      expect(rec.build().content).to.eql([
        'M'
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
        'MM',
        'MM',
        'MM',
        'MM'
      ]);

      recOne.height(2)
        .width(1);

      expect(recOne.build().content).to.eql([
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM'
      ]);

      var recTwo = Quadrilateral.create()
                      .width(3)
                      .build();

      // DEFAULT size : 2
      expect(recTwo.content).to.eql([
        'MMMMMM',
        'MMMMMM'
      ]);
    });

    it('should return differents quadrilaterals with various degree tilt', function() {
      var square = Quadrilateral.create()
                      .degree(45);

      expect(square.build().degree).to.equal(45);
      square.degree(-45);
      expect(square.build().degree).to.equal(-45);
      square.degree(365);
      expect(square.build().degree).to.equal(5);
      square.degree(-370);
      expect(square.build().degree).to.equal(-10);
    });

});
