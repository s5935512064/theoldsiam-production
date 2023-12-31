export const absUrl = (path: string): string => {
  path = path.trim();
  if (path.startsWith("http")) {
    return path;
  }
  if (path.indexOf("/") === 0) {
    path = path.substring(1);
  }

  const appUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  return `${appUrl}/${path}`;
};
