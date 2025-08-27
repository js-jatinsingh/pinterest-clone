
import { Image } from '@imagekit/react';
const Img = ({ src, alt, className, w, h }) => {
  return (
    <Image
          urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          transformation={[{ width: w, height: h }]}
          lqip={{ active: true, quality: 20 }}
        />
  );
};

export default Img;
