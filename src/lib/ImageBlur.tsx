import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"
import { useEffect, useState } from "react"

interface ImageBlurProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

const ImageBlur: React.FC<ImageBlurProps> = ({ src, alt, className, width, height }) => {
  const [blurDataURL, setBlurDataURL] = useState<string | undefined>(undefined)

  useEffect(() => {
    const fetchImage = async () => {
      const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
      })

      const { base64 } = await getPlaiceholder(buffer)
      setBlurDataURL(base64)
    }

    fetchImage()
  }, [src])

  return <Image src={src} alt={alt} placeholder="blur" blurDataURL={blurDataURL} className={className} width={width} height={height} />
}

export default ImageBlur
