export function formatDate(date: Date): string {
  return date.toUTCString().slice(5, 16);
}
