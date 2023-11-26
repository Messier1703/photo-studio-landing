import Image, { StaticImageData } from 'next/image'

interface AdaptiveImageProps {
  src: StaticImageData
  alt: string
  fill?: boolean
  maxWidth?: string
  id?: string
  fitCover?: boolean
}

const AdaptiveImage: React.FC<AdaptiveImageProps> = ({ src, alt, fill, maxWidth, id, fitCover }) => {
  return (
    <figure id={id} style={{ maxWidth: `${maxWidth}` }}>
      <Image src={src} alt={alt} fill={fill} style={{ width: '100%', height: '100%', objectFit: fitCover ? 'cover' : 'contain' }} />
    </figure>
  )
}

export default AdaptiveImage
