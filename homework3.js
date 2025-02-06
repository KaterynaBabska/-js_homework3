function pow(x, y) {
    if (y === 0) {
        return 1; // x^0 завжди дорівнює 1
    }

    let result = 1;
    let isNegative = y < 0; // Перевіряємо, чи степінь від’ємний
    let exponent = isNegative ? -y : y; // Робимо показник степеня додатним

    let i = 0;
    while (i < exponent) { // Виконуємо множення у циклі while
        result *= x;
        i++;
    }

    return isNegative ? 1 / result : result; // Якщо y від’ємний, повертаємо 1/result
}

// Цикл для перебору всіх значень x у діапазоні 0 до 10 та та y у діапазоні від -10 до 10
for (let x = 0; x <= 10; x++) { // x від 0 до 10
    for (let y = -10; y <= 10; y++) { // y від -10 до 10
        console.log(`pow(${x}, ${y}) = ${pow(x, y)}`);
    }
}