## Requirements
js file should be seperated from html.  
Simplly replace js block with:   
`<script type="text/javascript" src="dmath.js"></script>`
then move js code to another file `dmath.js`.  


in the end of your js code, add this:  
```
module.exports = {
    Factorial: Factorial,
    Perm: Perm,
    Comb: Comb,
    n_Catalan: n_Catalan,
    n_Triangular: n_Triangular,
    n_Harmonic: n_Harmonic,
    n_Fibonacci: n_Fibonacci,
    n_Lucas: n_Lucas,
    n_Eulerian: n_Eulerian,
    n_Stirling: n_Stirling
};
```
### ** Note: In order to be tested, the last output function should be named exactly like this: `n_Harmonic`, `n_Catalan`, `Comb` ... and so on.


## Enviroment setup
### install nvm (version controller for Node.js)
[According to Official Documents](https://github.com/nvm-sh/nvm)
### download installation script
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`

### export enviroment variables for nvm
```
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### install nvm
simply close your current terminal, open a new terminal 
or `source ~/.bashrc`

### use nvm to install node
`nvm install node`

### Install JS testing framework
cd to target directory then install JS testing framework
`npm install --save-dev mocha`
`npm install --save-dev chai`
[Mocha](https://mochajs.org/)
[Chia](https://www.chaijs.com/)
[Guide tutorial](https://medium.com/@bebebobohaha/%E5%89%8D%E7%AB%AF%E5%96%AE%E5%85%83%E6%B8%AC%E8%A9%A6%E5%85%A5%E9%96%80-mocha%E8%88%87chai-b3037b3a1de1)

after above installation
you will see in your package.json
```
{
    "scripts": {
        "test": "mocha"
    },
    "devDependencies": {
        "chai": "^4.2.0",
        "mocha": "^6.1.4"
    }
}
```

## Run test on dmath.js
`npm test`


## How to modify testing data
all test code should be placed under `test` directory.  


test data are defined obviously in the code.  
[See more on Chai Document](https://www.chaijs.com/api/bdd/)  
```
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
```






