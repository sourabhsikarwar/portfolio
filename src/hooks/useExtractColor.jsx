import React, { useEffect, useState } from 'react';

const useExtractColor = (imageUrl) => {
  const [dominantColor, setDominantColor] = useState('rgba(0,0,0,0)');

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Handle CORS
    img.src = imageUrl;
    img.onload = () => {
      const color = extractDominantColor(img);
      setDominantColor(color);
    };
  }, [imageUrl]);

  function extractDominantColor(image) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;

    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colors = {};

    // Count occurrences of each color
    for (let i = 0; i < data.length; i += 4) {
      const rgb = `${data[i]},${data[i + 1]},${data[i + 2]}`;
      if (!colors[rgb]) {
        colors[rgb] = 0;
      }
      colors[rgb]++;
    }

    // Determine the most frequent color
    let maxColor = '';
    let maxCount = 0;
    for (let color in colors) {
      if (colors[color] > maxCount) {
        maxColor = color;
        maxCount = colors[color];
      }
    }

    console.log(maxColor, maxCount)

    return `rgb(${maxColor})`;
  }

  return {
    dominantColor
  }
};

export default useExtractColor;
