import React, { useState } from 'react';
import './App.css';

// Импортируем ваши изображения
import mem1 from './assets/mem1.jpg';
import mem2 from './assets/mem2.jpg';
import mem3 from './assets/mem3.jpg';
import mem4 from './assets/mem4.jpg';
import mem5 from './assets/mem5.jpg';
import mem6 from './assets/mem6.jpg';
import mem7 from './assets/mem7.jpg';
import mem8 from './assets/mem8.png';
import mem9 from './assets/mem9.jpg';
import mem10 from './assets/mem10.jpg';




function App() {
    const images = [mem1, mem2, mem3, mem4, mem5, mem6, mem7, mem8, mem9, mem10];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    };

    const prevImage = () => {
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="App">
            <div className="gallery-container">
                <h1>Галерея мемов</h1>

                <div className="main-image-container">
                    {/* Заменяем символы стрелок на текст или SVG */}
                    <button className="nav-button" onClick={prevImage}>
                        ← {/* Или используем текст: Назад */}
                    </button>

                    <div className="image-wrapper">
                        <img
                            src={images[currentIndex]}
                            alt={`Мем ${currentIndex + 1}`}
                            className="main-image"
                        />
                        <div className="image-counter">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button className="nav-button" onClick={nextImage}>
                        → {/* Или используем текст: Вперед */}
                    </button>
                </div>

                <div className="thumbnail-container">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Миниатюра ${index + 1}`}
                            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToImage(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;