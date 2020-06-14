export const getQueryValue = (data: string | string[] | undefined) => {
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return undefined;
    }
    return data.join(',');
  }
  return data;
};

export const getQueryString = (
  query: Record<string, string | string[] | undefined>
) => {
  const qs = Object.keys(query)
    .map((key) => [key, getQueryValue(query[key])])
    .filter(
      (pair) =>
        pair[0] !== null &&
        pair[0] !== undefined &&
        pair[1] !== null &&
        pair[1] !== undefined
    )
    .map((pair) => (pair as string[]).map(encodeURIComponent).join('='))
    .join('&');
  return qs && '?' + qs;
};
