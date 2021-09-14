export const getImgName = (alt) => {
  return alt
    .replace(/ /g, "_")
    .replace(/.png/gi, ".webp")
    .replace(/.gif/gi, ".webp");
};
