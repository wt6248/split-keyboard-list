// layout/connectivity는 아직 enum 픽스 전이라 string + unknown 허용
export type KeyboardLayout =
  | 'row-stagger'
  | 'ortholinear'
  | 'column-stagger'
  | 'alice'
  | 'dactyl'
  | 'spray'
  | 'other'
  | 'unknown';
export type KeyboardConnectivity =
  | 'wired'
  | 'wireless'
  | 'both'
  | 'unknown';

export type PointingDevice =
  | 'none'
  | 'trackball'
  | 'trackpad'
  | 'trackpoint'
  | 'unknown';

export type EncoderSupport = 'none' | 'supported' | 'unknown';
export type KeyboardRow = {
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