"use strict";

var expect = chai.expect;

var should = chai.should();

var Quadrilateral;

describe('Create a square.',function(){

    it('create square with default values', function() {
      var square = Quadrilateral.create().build();
      // DEFAULT { width : 1, height : 1, size : 2}
      expect(square.content.should.be.equal([
        'MM',
        'MM'
      ]));
      expect(square.degree.should.be.equal(0));
    });

    it('create rectangle with params in create', function() {
      var rec = Quadrilateral.create({
        width : 1,
        height : 0.5,
        size : 4
      });

      expect(rec.build().content.should.be.equal([
        'MMMM',
        'MMMM'
      ]));
    });

    it('create rectangle with various sizes', function() {
      var recOne = Quadrilateral.create()
                  .width(0.5)
                  .size(4)
                  ;

      expect(recOne.build().content.should.be.equal([
        'MM',
        'MM',
        'MM',
        'MM'
      ]));

      recOne.height(2)
        .width(1)
        ;

      expect(recOne.build().content.should.be.equal([
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM',
        'MMMM'
      ]));

      var recTwo = Quadrilateral.create()
                      .width(3)
                      .build()
                      ;

      // DEFAULT size : 2
      expect(recTwo.content.should.be.equal([
        'MMMMMM'
        'MMMMMM'
      ]));
    });

    it('create square with various degree tilt', function() {
      var square = Quadrilateral.create()
                      .degree(45)
                      ;
      expect(square.build().degree.should.be.equal(45));
      square.degree(365);
      expect(square.build().degree.should.be.equal(5));
      square.degree(-45);
      expect(square.build().degree.should.be.equal(5));
    });
});
