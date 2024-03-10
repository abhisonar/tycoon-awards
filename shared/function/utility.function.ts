export function contactString(seperater: string, ...args: string[]): string {
  return args?.filter((item) => !!item).join(seperater);
}
