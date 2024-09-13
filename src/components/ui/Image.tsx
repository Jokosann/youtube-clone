import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Iprops = {
  src: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
};

const Image = ({ alt, height, src, width, className }: Iprops) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src}
      width={width}
      className={className || ''}
      effect="blur"
    />
  );
};

export default Image;
