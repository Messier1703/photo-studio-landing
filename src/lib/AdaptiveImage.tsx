import Image, { StaticImageData } from 'next/image'

interface AdaptiveImageProps {
  src: StaticImageData
  alt: string
  maxWidth?: string
  width?: string
  maxHeight?: string
  height?: string
  id?: string
  fitCover?: boolean
  nextWidth?: number
  nextHeight?: number
}

const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt,
  maxWidth,
  id,
  fitCover,
  height,
  maxHeight,
  width,
  nextHeight,
  nextWidth,
}) => {
  return (
    <figure id={id} style={{ maxWidth: `${maxWidth}`, width: `${width}`, maxHeight: `${maxHeight}`, height: `${height}` }}>
      <Image
        src={src}
        width={nextWidth}
        height={nextHeight}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: fitCover ? 'cover' : 'contain' }}
      />
    </figure>
  )
}

export default AdaptiveImage
