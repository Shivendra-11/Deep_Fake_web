import React, { useState } from 'react';
import axios from 'axios';

const VideoUploader = () => {
    const [videoFile, setVideoFile] = useState(null);

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('video_file', videoFile);

        try {
            const response = await axios.post('http://your-flask-server-url/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.location.href = '/result?prediction=' + response.data.prediction;
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Video</button>
        </div>
    );
};

export default VideoUploader;
