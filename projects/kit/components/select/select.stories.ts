import { moduleMetadata } from '@storybook/angular';
import { SelectModule } from './select.module';

const metadata = moduleMetadata({
  imports: [SelectModule],
});

export default {
  title: 'Select',
  decorators: [metadata],
};

export const select = (): unknown => {
  const disabledItem = { value: 'Cola 🥤', viewValue: 'Cola 🥤' };
  const data = new Array(100)
    .fill(null)
    .map((el, index) => ({ value: `Pizza 🍕${index}`, viewValue: `Pizza 🍕${index}` }));
  let selectItem!: typeof data[0];
  return {
    template: `
    <style>
      .something-content{
        margin-top:5px;
        min-height: 150px;
        width: 100%;
        background-color: #ffb5f394;
        color: #dc6b6b;
        font-size: 20px;
        text-align: center;
      }
    </style>
    <u-select [(value)]="selectItem">
        <u-option [value]="disabledItem" disabled=true>{{disabledItem .viewValue}}</u-option>
        <u-option *ngFor="let item of data"
          [value]="item"
        >{{item .viewValue}}</u-option>
    </u-select>
    <div class="something-content">
      {{selectItem|json}}
    </div>
`,
    props: { data, selectItem, disabledItem },
  };
};

select.storyName = 'Base';
