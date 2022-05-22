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
  layout?: 'fixed' | 'responsive' | 'fill' | 'fixed'
}

const Responsive = ({ alt, sizes, src, layout }: ImageProps): JSX.Element => (
  <Image
    {...layout}
    priority
    placeholder="blur"
    blurDataURL="https://via.placeholder.com/150"
    src={src}
    alt={alt}
    width={sizes[0] ? sizes[0] : '100%'}
    height={sizes[1] ? sizes[1] : sizes[0]}
    quality={100}
  />
)
export default Responsive
