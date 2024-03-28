export type ValueOf<T> = T[keyof T];

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };