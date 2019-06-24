## Requirements
js file should be seperated from html.
Simplly replace js block with: 
`<script type="text/javascript" src="dmath.js"></script>`
then move js code to another file `dmath.js`.
<br>
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
### Note: In order to be tested, the last output function should be named exactly like this, aka: `n_Harmonic`, `n_Catalan` ... and so on.


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









