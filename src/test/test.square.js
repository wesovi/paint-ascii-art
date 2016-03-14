"use strict";

var expect = chai.expect;

//var should = chai.should();

var Quadrilateral;

describe('Create a square.',function(){

    it('create square with default values', function() {
      var square = Quadrilateral.create().build();
      // DEFAULT { width : 1, height : 1, size : 2}
      expect(square.content).be.equal([
        'MM',
        'MM'
      ]);
      expect(square.degree).be.equal(0);
    });

    it('create rectangle with params in create', function() {
      var rec = Quadrilateral.create({
        width : 1,
        height : 0.5,
        size : 4
      });

      expect(rec.build().content).be.equal([
        'MMMM',
        'MMMM'
      ]);
    });

    it('create rectangle force errors', function() {
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

    it('create rectangle with various sizes', function() {
      var recOne = Quadrilateral.create()
                  .width(0.5)
                  .size(4)
                  ;

      expect(recOne.build().content).be.equal([
        'MM',
        'MM',
        'MM',
        'MM'
      ]);

      recOne.height(2)
        .width(1)
        ;

      expect(recOne.build().content).be.equal([
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
      expect(recTwo.content).be.equal([
        'MMMMMM'
        'MMMMMM'
      ]);
    });

    it('create square with various degree tilt', function() {
      var square = Quadrilateral.create()
                      .degree(45);

      expect(square.build().degree).be.equal(45);
      square.degree(-45);
      expect(square.build().degree).be.equal(-45);

      expect(function () {
        square.degree(365);
      }).to.throw(Error);
    });

});
