function Factorial(n) {
    fact = 1;
    for (i = 2; i <= n; i++)
        fact *= i;
    return fact;
}


function Perm(n, r) {
    perm = n;
    for (i = n - 1; i > n - r; i--)
        perm *= i;
    return perm;
}


function Comb(n, r) {
    return Perm(n, r) / Factorial(r);
}


function n_Catalan(n) {
    var arr = []
    for (i = 0; i <= n; i++) {
        arr.push(Catalan(i))
    }
    return arr
}


function Catalan(n) {
    if (n < 0) return NaN
    for (var r = 1, k = 2; k <= n; k++) {
        r *= (n + k) / k
    }
    return Math.round(r)
}

function n_Triangular(n) {
    var arr = []
    for (i = 0; i <= n; i++) {
        arr.push(Triangular(i))
    }
    return arr
}


function Triangular(n) {
    return (n * (n + 1)) / 2
}


function n_Harmonic(n) {
    var arr = []
    for (i = 1; i <= n; i++) {
        arr.push(Harmonic(i))
    }
    return arr
}

function Harmonic(n) {

    if (n == 1) {
        return 1
        //checks if the number given is 1 then return 1 as the answer
    } else {
        var num = (1.0 / n) + Harmonic(n - 1)
        return Math.round(num * 1000) / 1000
        // does the calculation using harmonic
        // number then recalls function using
        // the number harmonic number - 1
    }
}


function n_Fibonacci(n) {
    var arr = [0, 1]
    for (i = 0; i <= n - 2; i++) {
        arr.push(Fibonacci(i))
    }
    return arr
}


function Fibonacci(n) {
    var a = 1
    var b = 0
    var t
    while (n >= -1)
    {
        t = a
        a = a + b
        b = t
        n--
    }
    return b
}


function n_Lucas(n) {
    var arr = []
    for (i = 0; i <= n; i++) {
        arr.push(Lucas(i))
    }
    return arr
}

function Lucas(n) {
    if (n == 0)
        return 2
    else if (n == 1)
        return 1
    else
        return Lucas(n - 1) + Lucas(n - 2)
}


function n_Eulerian(n) {
    var arr = []
    for (var k = 0; k <= n - 1; k++) {
        arr.push(Eulerian(n, k))
    }
    return arr
}

function Eulerian(n, m)
{
    if (m >= n || n == 0)
        { return 0 }

    if (m == 0)
        { return 1 }

    return ((n - m) * Eulerian(n - 1, m - 1) +
            (m + 1) * Eulerian(n - 1, m)) 
}


function n_Stirling(m) {
    // change n to m here
    var arr = []
    m = parseInt(m)
    // teacher website 1<=n<=m
    // here is 1<=k<=m

    for (var k = 1; k <= m; k++) {
        // console.log("n_Stirling m: ", m, " / k: ", k)
        arr.push(stirling_num_second_kind(m, k))
    }
    return arr
}


var secondKindDP = [];
function stirling_num_second_kind(n, k) {
    let cached = secondKindDP[n.toString()+","+k.toString()];
    if ( cached !=undefined ) {
    return cached;
    }

    if ( n === k ) {
    return 1;
    }

    if ( k > n ) {
    return 0;
    }

    if ( k === 0 ) {
    return 0;
    }

    if ( k === 1 ) {
    return 1;
    }

    if ( n === 0 ) {
    return 0;
    }

    let answer = stirling_num_second_kind(n - 1, k - 1)  + k * stirling_num_second_kind(n - 1, k); 
    secondKindDP[ n.toString() + "," + k.toString() ] = answer;
    return answer;
}


function invalid(n, r) {
    if (parseInt(n) < 0 || isNaN(parseInt(n))) {
        document.getElementById("n").focus();
        return true;
    }
    else if (parseInt(r) < 0 || isNaN(parseInt(r))) {
        document.getElementById("r").focus();
        return true;
    }
    return false;
}


function computeAll() {
    document.getElementById("resPermutation").innerHTML = "";
    document.getElementById("resCombination").innerHTML = "";
    document.getElementById("resArrangement").innerHTML = "";
    document.getElementById("resSelectrofn").innerHTML = "";
    document.getElementById("resCatalan").innerHTML = "";
    document.getElementById("resTriangular").innerHTML = "";
    document.getElementById("resHarmonic").innerHTML = "";
    document.getElementById("resFibonacci").innerHTML = "";
    document.getElementById("resLucas").innerHTML = "";
    document.getElementById("resEulerian").innerHTML = "";
    document.getElementById("resStirling").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    clickPerm();
    clickComb();
    clickArra();
    clickSele();
    clickCatalan();
    clickTriangular();
    clickHarmonic();
    clickFibonacci();
    clickLucas();
    clickEulerian();
    clickStirling();
}


function clickPerm() {
    document.getElementById("resPermutation").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resPermutation").innerHTML = Perm(n, r);
}


function clickComb() {
    document.getElementById("resCombination").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resCombination").innerHTML = Comb(n, r);
}


function clickArra() {
    document.getElementById("resArrangement").innerHTML = ""
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resArrangement").innerHTML = Math.pow(n, r);
}


function clickSele() {
    document.getElementById("resSelectrofn").innerHTML = "";
    n = parseInt(document.getElementById("n").value);
    r = parseInt(document.getElementById("r").value);
    if (invalid(n, r)) return;
    document.getElementById("resSelectrofn").innerHTML = Comb(n + r - 1, r);
}

function clickCatalan() {
    document.getElementById("resCatalan").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resCatalan").innerHTML = n_Catalan(n);
}


function clickTriangular() {
    document.getElementById("resTriangular").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resTriangular").innerHTML = n_Triangular(n);
}


function clickHarmonic() {
    document.getElementById("resHarmonic").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resHarmonic").innerHTML = n_Harmonic(n);
}

function clickFibonacci() {
    document.getElementById("resFibonacci").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resFibonacci").innerHTML = n_Fibonacci(n);
}


function clickLucas() {
    document.getElementById("resLucas").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resLucas").innerHTML = n_Lucas(n);
}


function clickEulerian() {
    document.getElementById("resEulerian").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resEulerian").innerHTML = n_Eulerian(n);
}


function clickStirling() {
    document.getElementById("resStirling").innerHTML = "";
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    if (invalid(n, r)) return;
    document.getElementById("resStirling").innerHTML = n_Stirling(n);
}


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

