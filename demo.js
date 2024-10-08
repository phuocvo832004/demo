
// Description: To validate and check if the input number is prime, require:
// 1. Process input: convert to integer, validate number
// 2. Process logic: check for primality using basic loop
// 3. Output: Display result with appropriate styling

document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Input: Extract the numeric value from the input field and convert it to an integer.
    const number = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');

    // Process: Check if the number is valid and check if the number is prime
    if (isNaN(number) || number <= 1) {
        resultDiv.textContent = "Vui lòng nhập một số lớn hơn 1.";
        resultDiv.style.color = "#ff5a5f"; // Red if input is invalid
        return;
    }

    let isPrime = true; // define a boolean variable to assume the number is prime

    // Loop from 2 to the square root of the number to check for divisors
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by 'i', it's not a prime number
        if (number % i === 0) {
            isPrime = false; // Set isPrime to false as it's not a prime number
            break; // Exit the loop because of founding a divisor
        }
    }
    

    // Output: Display results with colors
    if (isPrime) {
        resultDiv.textContent = `${number} là số nguyên tố.`;
        resultDiv.style.color = "#1fc844"; // Green if the number is prime
    } else {
        resultDiv.textContent = `${number} không phải là số nguyên tố.`;
        resultDiv.style.color = "#ff5a5f"; // Red if not prime
    }
});