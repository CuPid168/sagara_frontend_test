import { IconProps } from '../../../utils/types/icon'

export default function IconFilter({ size, ...props }: IconProps) {
  return (
    <svg height={size} width={size} viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48m-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48m-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48"
      />
    </svg>
  )
}
