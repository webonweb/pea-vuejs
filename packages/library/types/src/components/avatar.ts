export enum AvatarSizeTypes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum AvatarTypeTypes {
  SQUARE = 'square',
  CIRCLE = 'circel'
}

export interface AvatarOption {
  src?: string | null
  alt: string
  title?: string
}
