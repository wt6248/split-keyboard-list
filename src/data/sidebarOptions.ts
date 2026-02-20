
export const filterCategories = [
  {
    key: "matrix_rows",
    label: "Matrix Row",
    options: [
      { label: "6+", value: "6+" },
      { label: "5", value: "5" },
      { label: "4", value: "4" },
      { label: "3", value: "3" },
      { label: "2-", value: "2-" },
    ],
  },
  {
    key: "matrix_cols",
    label: "Matrix Column",
    options: [
      { label: "7+", value: "7+" },
      { label: "6", value: "6" },
      { label: "5", value: "5" },
      { label: "4-", value: "4-" },
    ],
  },
  {
    key: "layout",
    label: "키보드 타입",
    options: [
      { label: "로우스태거", value: "row-stagger" },
      { label: "오소리니어", value: "ortholinear" },
      { label: "컬럼스태거", value: "column-stagger" },
      { label: "스프레이", value: "splay" },
      { label: "앨리스", value: "alice" },
      { label: "댁틸", value: "dactyl" },
      { label: "기타", value: "other" },
    ],
  },
];

export const sortOptions = [
  { label: "이름 오름차순 (A→Z)", value: {sortBy: "name", sortOrder: "asc"} },
  { label: "이름 내림차순 (Z→A)", value: {sortBy: "name", sortOrder: "desc"} },
  { label: "GitHub ⭐ 많은순", value: {sortBy: "github_stars", sortOrder: "desc"} },
  { label: "GitHub ⭐ 적은순", value: {sortBy: "github_stars", sortOrder: "asc"} },
];