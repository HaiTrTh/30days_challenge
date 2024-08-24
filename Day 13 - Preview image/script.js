// document.getElementById('uploadDiv').addEventListener('click', function() {
//   document.getElementById('fileInput').click(); // Trigger the hidden file input
// });

// document.getElementById('fileInput').addEventListener('change', function(event) {
//   const files = event.target.files;
//   if (files && files.length > 0) {
//       const file = files[0];
//        const reader = new FileReader();
//        reader.onload = function(e) {
//            const previewImage = document.getElementById('preview');
//            previewImage.src = e.target.result; // Set the image source to the file content
//            previewImage.style.display = 'block'; // Display the image
//        }
//         reader.readAsDataURL(file); // Read the file as a Data URL (base64 encoded)
//    } else {
//        alert('No file selected or an unsupported file type was chosen.');
//    }
// });


document.getElementById('uploadDiv').addEventListener('click', function(){
  document.getElementById('fileInput').click();
})

document.getElementById('fileInput').addEventListener('change',function(event){
  const files = event.target.files;
  if(files && files.length > 0){
    const file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
      const previewImage = document.getElementById('preview');
      previewImage.src = e.target.result;
      previewImage.style.display = 'block'
      console.log(1);
    }
  }
})