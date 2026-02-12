export type KeyboardRow = {
  id: string;
  name: string;
  release_ym: string | null;
  designer: string | null;
  description: string | null;
  github_url: string | null;
  website_url: string | null;
  github_stars: number | null;
  image_path: string | null;
  layout: string;
  matrix: string;
  pointing_device: string;
  encoder: string;
  connectivity: string;
};