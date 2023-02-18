type ReplaceKeyMap = Record<string, string | ((key: string) => string)>;

interface Options {
  deep?: boolean;
}

declare function replaceKeys<T = Record<string, any>>(
  target: Record<string, unknown>,
  replaceKeyMap: ReplaceKeyMap,
  options?: Options
): T;

export = replaceKeys
