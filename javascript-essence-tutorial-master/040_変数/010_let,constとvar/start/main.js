function printTyorAndValue(val) {
    console.log(typeof val, val)
}

let a = 0;

printTypeAndValue(a);

let b = parseTnt '1' + a;

printTypeAndValue(b);

let c = 15 - b;

printTypeAndValue(c);