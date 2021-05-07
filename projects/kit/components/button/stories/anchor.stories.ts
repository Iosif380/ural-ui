import { Meta, moduleMetadata } from '@storybook/angular';
import { AnchorComponent } from '../button.component';
import { ButtonModule } from '../button.module';
import { argTypes, TemplateFn, storyGenerator } from './base.stories';

export default {
  component: AnchorComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  argTypes,
  title: 'Anchor',
} as Meta;
const anchorTemplate: TemplateFn = (title: string) => `
    <a u-button 
      href="tel:99999"
      [color]="color" 
      [size]="size" 
      [disabled]="disabled">
      ${title}
    </a>`;

const storyAnchor = storyGenerator(anchorTemplate);

export const Base = storyAnchor.bind({});
