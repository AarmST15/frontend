import React, { useState } from 'react';

function GoogleDriveFileUploadWithMutler() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file.data)
    fetch('http://127.0.0.1:8082/auth/uploadfile', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gridRowGap: '20px' }}>
      <input type='file' name='file' onChange={handleFileChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default GoogleDriveFileUploadWithMutler;
