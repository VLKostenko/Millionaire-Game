import React from 'react';
import Image from 'next/image';
import styles from './wrapped-image.module.css';

interface WrappedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: 'intrinsic' | 'responsive' | 'fixed' | 'fill';
}

export default function WrappedImage({
  src,
  alt,
  width,
  height,
  layout,
}: React.FC<WrappedImageProps>) {
  return (
    <div className={styles.image_wrapper}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        objectFit="cover"
        priority
      />
    </div>
  );
}
