 // Xử lý sự kiện khi biểu mẫu được gửi
 document.getElementById('primeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi gửi biểu mẫu mặc định

  // Input: Lấy giá trị số từ trường đầu vào
  const number = parseInt(document.getElementById('number').value);
  const resultDiv = document.getElementById('result');

  // Kiểm tra điều kiện đầu vào hợp lệ
  if (isNaN(number) || number <= 1) {
      resultDiv.textContent = "Vui lòng nhập một số lớn hơn 1.";
      resultDiv.style.color = "#ff5a5f"; // Đỏ nếu đầu vào không hợp lệ
      return;
  }

  // Process: Kiểm tra số nguyên tố
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          isPrime = false;
          break;
      }
  }

  // Output: Hiển thị kết quả kiểm tra
  if (isPrime) {
      resultDiv.textContent = `${number} là số nguyên tố.`;
      resultDiv.style.color = "#1fc844"; // Xanh lá cây nếu số nguyên tố
  } else {
      resultDiv.textContent = `${number} không phải là số nguyên tố.`;
      resultDiv.style.color = "#ff5a5f"; // Đỏ nếu không phải số nguyên tố
  }
});