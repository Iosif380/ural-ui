import { ArgTypes, moduleMetadata } from '@storybook/angular';
import { TabsModule } from './tabs.module';

const metadata = moduleMetadata({
  imports: [TabsModule],
});

const argTypes: ArgTypes = {
  name: {
    name: 'name',
    defaultValue: 'tabName',
    description: 'Имя вкладки, должно быть уникальным среди вкладок, относящихся к одной группе.',
  },
  caption: {
    name: 'caption',
    defaultValue: 'Example tab ',
    description: 'Отображаемый заголовок вкладки.',
  },
};

export default {
  title: 'Tabs',
  decorators: [metadata],
  argTypes,
};

export const tabs = ({ name, caption }: any = {}): unknown => ({
  template: `
        <tabs>
            <tab [name]="name + 1" [caption]="caption + 1">
                Example tab 1 content...
            </tab>
            <tab [name]="name + 2" [caption]="caption + 2">
                Example tab 2 content...
            </tab>
            <tab [name]="name + 3" [caption]="caption + 3">
                Example tab 3 content...
            </tab>
        </tabs>
    `,
  props: { name, caption },
});

tabs.storyName = 'Base';
