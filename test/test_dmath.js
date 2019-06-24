var expect = require('chai').expect

const Factorial = require('../dmath').Factorial;
describe('test on Factorial', ()=> {
  expect(Factorial(1)).to.be.equal(1);
  expect(Factorial(3)).to.be.equal(3 * 2 * 1);
  expect(Factorial(10)).to.be.equal(3628800);
  expect(Factorial(99)).to.be.equal(9.33262154439441e+155);
});


const Perm = require('../dmath').Perm;
describe('test on Perm', ()=> {
  expect(Perm(2, 1)).to.be.equal(2);
  expect(Perm(2, 2)).to.be.equal(2);
  expect(Perm(5, 3)).to.be.equal(60);
  expect(Perm(8, 4)).to.be.equal(1680);
  expect(Perm(99, 4)).to.be.equal(90345024);
});


const Comb = require('../dmath').Comb;
describe('test on Comb', ()=> {
  expect(Comb(1, 1)).to.be.equal(1);
  expect(Comb(3, 3)).to.be.equal(1);
  expect(Comb(9, 6)).to.be.equal(84);
  expect(Comb(15, 7)).to.be.equal(6435);
  expect(Comb(99, 7)).to.be.equal(14887031544);
});


const n_Catalan = require('../dmath').n_Catalan;
describe('test on n_Catalan', ()=> {
  expect(n_Catalan(3)).to.be.an('array');
  expect(n_Catalan(6)).to.have.lengthOf(7);
  expect(n_Catalan(10)).to.deep.equal([1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796]);
});

const n_Triangular = require('../dmath').n_Triangular;
describe('test on n_Triangular', ()=> {
  expect(n_Triangular(3)).to.be.an('array');
  expect(n_Triangular(6)).to.have.lengthOf(7);
  expect(n_Triangular(10)).to.deep.equal([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
  expect(n_Triangular(28)).to.deep.equal([0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406]);
});

const n_Harmonic = require('../dmath').n_Harmonic;
describe('test on n_Harmonic', ()=> {
  expect(n_Harmonic(3)).to.be.an('array');
  expect(n_Harmonic(6)).to.have.lengthOf(6);
  expect(n_Harmonic(7)).to.deep.equal([1, 1.5, 1.833, 2.083, 2.283, 2.45, 2.593]);
});

const n_Fibonacci = require('../dmath').n_Fibonacci;
describe('test on n_Fibonacci', ()=> {
  expect(n_Fibonacci(3)).to.be.an('array');
  expect(n_Fibonacci(6)).to.have.lengthOf(7);
  expect(n_Fibonacci(9)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  expect(n_Fibonacci(9)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  expect(n_Fibonacci(19)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]);
});


const n_Lucas = require('../dmath').n_Lucas;
describe('test on n_Lucas', ()=> {
  expect(n_Lucas(3)).to.be.an('array');
  expect(n_Lucas(6)).to.have.lengthOf(7);
  expect(n_Lucas(10)).to.deep.equal([2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123]);
});


const n_Eulerian = require('../dmath').n_Eulerian;
describe('test on n_Eulerian', ()=> {
  expect(n_Eulerian(3)).to.be.an('array');
  expect(n_Eulerian(6)).to.have.lengthOf(6);
  expect(n_Eulerian(1)).to.deep.equal([1]);
  expect(n_Eulerian(2)).to.deep.equal([1, 1]);
  expect(n_Eulerian(3)).to.deep.equal([1, 4, 1]);
  expect(n_Eulerian(6)).to.deep.equal([1, 57, 302, 302, 57, 1]);
});


const n_Stirling = require('../dmath').n_Stirling;
describe('test on n_Stirling', ()=> {
  expect(n_Stirling(3)).to.be.an('array');
  expect(n_Stirling(6)).to.have.lengthOf(6);
  expect(n_Stirling(1)).to.deep.equal([1]);
  expect(n_Stirling(2)).to.deep.equal([1, 1]);
  expect(n_Stirling(3)).to.deep.equal([1, 3, 1]);
  expect(n_Stirling(5)).to.deep.equal([1, 15, 25, 10, 1]);
  expect(n_Stirling(6)).to.deep.equal([1, 31, 90, 65, 15, 1]);
});

