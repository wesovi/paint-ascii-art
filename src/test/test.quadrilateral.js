var expect = require('chai').expect;
const Quadrilateral = require('../lib/quadrilateral');

describe('Create a square.',function(){

    it('creates a square with default values', function() {
      var square = Quadrilateral.create().build();
      // DEFAULT { width : 1, height : 1, size : 2}
      console.log(square.content);
      expect(square.content).to.eql([
        'MM',
        'MM'
      ]);
      expect(square.degree).to.equal(0);
    });

    it('creates a rectangle when invoking create method with arguments', function() {
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

    it('throws an Error when creating a rectangle', function() {
      expect(function(){
        Quadrilateral.create({
          width : 1,
          height : 'm',
          size : 4
        });
      }).to.throw(Error);

      expect(function(){
        Quadrilateral.create()
          .degree('m');
      }).to.throw(Error);

      expect(function(){
        Quadrilateral.create()
          .width('m');
      }).to.throw(Error);

    });

    it('creates a rectangle with various sizes', function() {
      var recOne = Quadrilateral.create()
                  .width(0.5)
                  .size(4)
                  ;

      expect(recOne.build().content).to.eql([
        'MM',
        'MM',
        'MM',
        'MM'
      ]);

      recOne.height(2)
        .width(1)
        ;

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
                      .build()
                      ;

      // DEFAULT size : 2
      expect(recTwo.content).to.eql([
        'MMMMMM',
        'MMMMMM'
      ]);
    });

    it('creates a square with various degree tilt', function() {
      var square = Quadrilateral.create()
                      .degree(45);

      expect(square.build().degree).to.equal(45);
      square.degree(-45);
      expect(square.build().degree).to.equal(-45);

      expect(function () {
        square.degree(365);
      }).to.throw(Error);
    });

});
