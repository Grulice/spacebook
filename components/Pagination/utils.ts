export function compilePageButtons(
  currentPage: number,
  pageCount: number,
  boundaryCount: number,
  siblingCount: number,
  pageGenerator: (pageNumber: number) => JSX.Element,
  ellipsisGenerator: (key: number) => JSX.Element
): JSX.Element[] {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, pageCount));
  const endPages = range(Math.max(pageCount - boundaryCount + 1, boundaryCount + 1), pageCount);

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      currentPage - siblingCount,
      // Lower boundary when page is high
      pageCount - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      currentPage + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : pageCount - 1
  );

  const itemList = [
    ...startPages.map(pageGenerator),

    // Start ellipsis
    ...(siblingsStart > boundaryCount + 2
      ? [ellipsisGenerator(-2)]
      : boundaryCount + 1 < pageCount - boundaryCount
      ? [pageGenerator(boundaryCount + 1)]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd).map(pageGenerator),

    // End ellipsis
    ...(siblingsEnd < pageCount - boundaryCount - 1
      ? [ellipsisGenerator(-1)]
      : pageCount - boundaryCount > boundaryCount
      ? [pageGenerator(pageCount - boundaryCount)]
      : []),

    ...endPages.map(pageGenerator),
  ];

  return itemList;
}
