import { ArgTypes, moduleMetadata } from '@storybook/angular';
import { InputComponent } from './input.component';
import { InputModule } from './input.module';

const metadata = moduleMetadata({
  imports: [InputModule],
});

const argTypes: ArgTypes = {
  value: {
    defaultValue: 'Текст',
    control: { type: 'text' },
  },
  disabled: { type: 'boolean', defaultValue: false, control: { type: 'boolean' } },
  size: {
    defaultValue: 'l',
    options: ['s', 'm', 'l', 'xl', 'custom'],
    control: { type: 'select' },
  },
};

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [metadata],
  argTypes,
};

export const input = ({ size, value, disabled }: any = {}): unknown => ({
  template: `
        <input u-input 
        placeholder="placeholder"
        [size]="size" 
        [disabled]="disabled"
        value="${value}"/>
    `,
  props: { size, disabled },
});

input.story = {
  name: 'Base',
};
