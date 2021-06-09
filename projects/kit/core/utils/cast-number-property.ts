export const castNumberProperty = (value: unknown, fallbackValue = 0): number =>
  _isNumberValue(value) ? Number(value) : fallbackValue;

export const _isNumberValue = (value: unknown): boolean =>
  !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
