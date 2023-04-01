const getPath =
  (removePath: string, replaceStr = '') =>
  (base: string, filename: string): string =>
    `${base.replace(removePath, replaceStr)}${filename.replace('.stories', '')}`;

export const getPathForSrcDesignSystem = getPath('src/stories/');
