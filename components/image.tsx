import Image from 'next/image'

/**
 * `Image Responsive & Optimiced`.
 * @param {string} src url path.
 * @param {Array<number>} sizes [height, width].
 * @param {string} alt image description.
 * @return {JSX.Element} Image Component.
 */

export type ImageProps = {
  src: string
  sizes?: number[]
  alt?: string
  layout?: 'fixed' | 'responsive' | 'fill'
}

const Responsive = ({ alt, sizes, src, layout }: ImageProps): JSX.Element => (
  <Image
    {...layout}
    priority
    src={src}
    alt={alt}
    height={sizes ? sizes[0] : '100%'}
    width={sizes ? sizes[1] : '100%'}
    quality={100}
  />
)
export default Responsive
