function a() {
    console.log('called');
}

a();

let c = (function() {

    let provateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console,log('privateFn is called');;
    }
    console.log('called');
    return 0;
})()

console.log(c);