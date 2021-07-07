import { moduleMetadata } from '@storybook/angular';
import { ExpansionPanelModule } from './expansion-panel.module';

const metadata = moduleMetadata({
  imports: [ExpansionPanelModule],
});

export default {
  title: 'Expansion panel',
  decorators: [metadata],
};

export const expandPanel = (): unknown => ({
  template: `
        <u-expansion-panel>
            <u-expansion-header>ОХ КРАСИВО ТО КАК</u-expansion-header>
        </u-expansion-panel>
    `,
  props: {},
});

expandPanel.storyName = 'Base';
