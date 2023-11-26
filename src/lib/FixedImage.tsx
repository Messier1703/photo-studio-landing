import Image, { StaticImageData } from 'next/image'

interface FixedImageProps {
  src: StaticImageData
  alt: string
  id?: string
  fitCover?: boolean
}

const FixedImage: React.FC<FixedImageProps> = ({ src, alt, id, fitCover }) => {
  return (
    <figure id={id}>
      <Image src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: fitCover ? 'cover' : 'contain' }} />
    </figure>
  )
}

export default FixedImage
