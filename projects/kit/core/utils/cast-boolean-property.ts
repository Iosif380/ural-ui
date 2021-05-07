export type BooleanInput = string | boolean | null | undefined;

export const castBooleanProperty = (value: BooleanInput): boolean => {
  return !!value && `${value}` !== 'false';
};
