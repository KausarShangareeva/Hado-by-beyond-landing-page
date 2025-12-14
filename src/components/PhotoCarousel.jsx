import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: grab;
  border-radius: 2rem;
`;

const Track = styled.div`
  display: flex;
  gap: 2rem;
  will-change: transform;
`;

const Photo = styled.img`
  width: 37.8rem;
  height: 40rem;
  border-radius: 2rem;
  object-fit: cover;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

/* 🔍 Модалка увеличения */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 2rem;
`;

export default function PhotoCarousel() {
  const trackRef = useRef(null);
  const pos = useRef(0);
  const speed = 0.3;

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const [activeImage, setActiveImage] = useState(null);

  const images = Array.from({ length: 21 }, (_, i) => `/Carousel/${i + 1}.jpg`);
  const loopImages = [...images, ...images]; // для бесконечности

  /* ▶ автоскролл */
  useEffect(() => {
    let animation;

    const animate = () => {
      if (!isDragging) {
        pos.current -= speed;
      }

      if (Math.abs(pos.current) >= trackRef.current.scrollWidth / 2) {
        pos.current = 0;
      }

      trackRef.current.style.transform = `translateX(${pos.current}px)`;
      animation = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animation);
  }, [isDragging]);

  /* 🖱 drag / swipe */
  const onDown = (e) => {
    setIsDragging(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    currentX.current = pos.current;
  };

  const onMove = (e) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    pos.current = currentX.current + (x - startX.current);
  };

  const onUp = () => setIsDragging(false);

  return (
    <>
      <CarouselWrapper
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        <Track ref={trackRef}>
          {loopImages.map((src, i) => (
            <Photo key={i} src={src} onClick={() => setActiveImage(src)} />
          ))}
        </Track>
      </CarouselWrapper>

      {activeImage && (
        <Overlay onClick={() => setActiveImage(null)}>
          <ModalImg src={activeImage} />
        </Overlay>
      )}
    </>
  );
}
