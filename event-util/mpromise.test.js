/**
 * @Author: Nate Bosscher <natebosscher1>
 * @Date:   2017-06-12T20:52:15-04:00
 * @Email:  nate.bosscher@gmail.com
 * @Filename: mpromise.test.js
 * @Last modified by:   natebosscher1
 * @Last modified time: 2017-06-13T07:08:56-04:00
 */

import MPromise from "./mpromise.js";

describe("mpromise tests", function(){
  it("should function like a normal promise", function(done){

    var testA = 0;

    var p = new MPromise();
    p.then(function(){
      testA = 1;
    });

    p.resolve();

    setTimeout(function(){
      expect(testA).toBe(1);
      done();
    }, 10);

  });

  it("should be able to chain .then()", function(done){

    var testA = 0, testB = 0;

    var p = new MPromise();
    p.then(function(value){
        testA = value;
      });

    p.then(function(value){
        testB = value;
      });

    p.resolve(1);

    setTimeout(function(){
      expect(testA).toBe(1);
      expect(testB).toBe(1);
      done();
    }, 5);

  });

  it("static resolve() should work", function(done){

    var testA;

    var p = MPromise.resolve(1);
    p.then(function(value){
      testA = value;
    });

    setTimeout(function(){

      expect(testA).toBe(1);
      done();

    }, 10);

  })
})
