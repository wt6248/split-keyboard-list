export const KEYBOARD_LAYOUTS = [
    'row-stagger',
    'ortholinear',
    'column-stagger',
    'alice',
    'dactyl',
    'spray',
    'other',
] as const

export type KeyboardLayout = (typeof KEYBOARD_LAYOUTS)[number]

export const KEYBOARD_CONNECTIVITIES = [
    'wired',
    'wireless',
    'both',
    'unknown',
] as const

export type KeyboardConnectivity = (typeof KEYBOARD_CONNECTIVITIES)[number]

export const POINTING_DEVICES = [
    'none',
    'trackball',
    'trackpad',
    'trackpoint',
    'unknown',
] as const

export type PointingDevice = (typeof POINTING_DEVICES)[number]

export const ENCODER_SUPPORTS = [
    'none',
    'supported',
    'unknown',
] as const

export type EncoderSupport = (typeof ENCODER_SUPPORTS)[number]

export type RawKeyboardEntity = {
  id: string;
  name: string;

  // 최초 공개/게시 기준 (YYYY-MM)
  release_ym: string | null;

  designer: string | null;
  description: string | null;

  github_url: string | null;
  website_url: string | null;
  github_stars: number | null;

  // Storage 버킷 images 기준 object path (예: "images/crkbd.jpg")
  image_path: string | null;

  layout: KeyboardLayout;

  // matrix 분리 작업 반영 후(아직 적용 전이면 null로 취급)
  matrix_cols: number | null;
  matrix_rows: number | null;

  pointing_device: PointingDevice;
  encoder: EncoderSupport;
  connectivity: KeyboardConnectivity;

  // Supabase timestamptz는 보통 string으로 옴
  created_at: string;
  updated_at: string;
};

export type KeyboardRow = RawKeyboardEntity & {
  image_url: string | null
}

export const detailInfoKeys = [
  'name',
  'release_ym',
  'designer',
  'github_stars',
  'layout',
  'matrix_cols',
  'matrix_rows',
  'pointing_device',
  'encoder',
  'connectivity',
] as const