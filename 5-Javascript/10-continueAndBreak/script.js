for (var num = 1; num < 30; num++) {
    if (num % 2 !== 0) continue;
    console.log('after one iteration , num is : ' + num);
}

for (var num = 1; num < 30; num++) {
    if (num % 2 === 0) break;
    console.log('BREAKED : ' + num);
}