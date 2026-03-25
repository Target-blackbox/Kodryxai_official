import img3 from './assets/image 3.png';
import img4 from './assets/image 4.png';
import img5 from './assets/image 5.png';
import img6 from './assets/image 6.png';
import img7 from './assets/image 7.png';
import img8 from './assets/image 8.png';
import img11 from './assets/image 11.png';
import img12 from './assets/image 12.png';
import img13 from './assets/image 13.png';
import img14 from './assets/image 14.png';
import img15 from './assets/image 15.png';
import imgCore1 from './assets/98a19273-1e5a-43c2-83d9-df81798fa031 1.png';
import imgCore2 from './assets/c511b87c-be00-4090-ab49-b6f1e4e07074 1.png';

export default function AssetViewer() {
  const images = [
    { src: img3, name: 'img 3' },
    { src: img4, name: 'img 4' },
    { src: img5, name: 'img 5' },
    { src: img6, name: 'img 6' },
    { src: img7, name: 'img 7' },
    { src: img8, name: 'img 8' },
    { src: img11, name: 'img 11' },
    { src: img12, name: 'img 12' },
    { src: img13, name: 'img 13' },
    { src: img14, name: 'img 14' },
    { src: img15, name: 'img 15' },
    { src: imgCore1, name: 'core 1' },
    { src: imgCore2, name: 'core 2' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '50px', background: '#ccc' }}>
      {images.map(img => (
        <div key={img.name} style={{ border: '2px solid red', background: 'white' }}>
          <h3>{img.name}</h3>
          <img src={img.src} style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
}
