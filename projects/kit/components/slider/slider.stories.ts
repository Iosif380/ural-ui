import { FormsModule } from '@angular/forms';
import { ArgTypes, moduleMetadata } from '@storybook/angular';
import { SliderModule } from './slider.module';

const metadata = moduleMetadata({
  imports: [SliderModule, FormsModule],
});

const argTypes: ArgTypes = {
  value: {
    defaultValue: 0,
    control: { type: 'number' },
  },
  max: {
    defaultValue: 100,
    control: { type: 'number' },
  },
  min: {
    defaultValue: 0,
    control: { type: 'number' },
  },
  step: {
    defaultValue: 1,
    control: { type: 'number' },
  },
};

export default {
  title: 'Slider',
  decorators: [metadata],
  argTypes,
};

export const slider = ({ value, max, min, step }: any = {}): unknown => ({
  template: `
        current value {{value}}
        <u-slider [(value)]=value [step]=step [max]=max [min]=min></u-slider>
    `,
  props: { value, max, min, step },
});

slider.storyName = 'Base';
