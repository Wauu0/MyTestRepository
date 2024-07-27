const textInput = document.getElementById('textInput');
 const getCharCount = document.getElementById('charCount');
 const getCharsRemaining = document.getElementById('charsRemaining');
 const maxLength = 30;

 function updateCharCounts() {
     const currentLength = textInput.value.length;
     const remainingLength = maxLength - currentLength;
     charCount.textContent = currentLength;
     charsRemaining.textContent = remainingLength;
 }

 textInput.addEventListener("input", updateCharCounts);

 updateCharCounts();