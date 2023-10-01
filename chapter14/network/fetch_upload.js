const apiKey = "";

async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select a file.');
      return;
    }
  
    // 关键在这行上传文件，创建文件
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=' + apiKey, {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('File uploaded successfully:', data);
  
      // Display the uploaded image
      const imageUrl = data.image.display_url;
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      document.body.appendChild(imgElement);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
  