export type TemplateFn = (title: string) => string;

export const argTypes = {
  title: {
    defaultValue: 'Кнопка',
    control: { type: 'text' },
  },
  disabled: { type: 'boolean', defaultValue: false, control: { type: 'boolean' } },
  color: {
    defaultValue: 'primary',
    control: { type: 'select', options: ['primary', 'accent', 'custom'] },
  },
  size: {
    defaultValue: 'l',
    control: { type: 'select', options: ['s', 'm', 'l', 'xl', 'custom'] },
  },
};

export const storyGenerator = (templateFn: TemplateFn) => ({
  color,
  size,
  title,
  disabled,
}: any = {}): any => ({
  props: { color, size, disabled },
  styles: [
    `
          .u-color-custom {
            background: #ffc378;
          }
      `,
    `
          .u-size-custom {
            height: 70px;
            line-height: 70px;
            min-width: 0;
            padding: 0 60px;
          }
      `,
  ],
  template: templateFn(title),
});
