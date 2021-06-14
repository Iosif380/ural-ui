import { moduleMetadata } from '@storybook/angular';
import { OptionModule } from './option.module';

const metadata = moduleMetadata({
  imports: [OptionModule],
});

export default {
  title: 'Option',
  decorators: [metadata],
};

export const option = (): unknown => ({
  template: `
        <u-option value="Pizza 🍕">Pizza 🍕</u-option>
        <u-option disabled="true">Cola 🥤</u-option>
        <u-option>Snack 🥨</u-option>
    `,
  props: {},
});
option.storyName = 'Base';
