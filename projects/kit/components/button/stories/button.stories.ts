import { moduleMetadata, Meta } from '@storybook/angular';

import { ButtonComponent } from '../button.component';
import { ButtonModule } from '../button.module';
import { argTypes, TemplateFn, storyGenerator } from './base.stories';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  argTypes,
  title: 'Button',
} as Meta;

const buttonTemplate: TemplateFn = (title: string) => `
    <button u-button 
      [color]="color" 
      [size]="size" 
      [disabled]="disabled">
      ${title}
    </button>`;

const storyButton = storyGenerator(buttonTemplate);

export const Base = storyButton.bind({});
