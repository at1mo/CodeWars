function nthFibo(n) {
  const arrayFibo = [0, 1];
  if (arrayFibo.length >= n) {
    return arrayFibo[n - 1];
  } else {
    for (let i = 2; i < n; i++) {
      arrayFibo.push(
        arrayFibo[arrayFibo.length - 1] + arrayFibo[arrayFibo.length - 2]
      );
    }
    return arrayFibo[n - 1];
  }
}
