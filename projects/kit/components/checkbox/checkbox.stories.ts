import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ArgTypes, moduleMetadata } from '@storybook/angular';
import { CheckboxModule } from './checkbox.module';
import { LabelPosition } from './label-position.enum';

class Form {
  public group: FormGroup;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      isAgree: false,
      isAgree2: true,
      isAgree3: false,
      isAgree4: true,
    });
  }
}

const metadata = moduleMetadata({
  imports: [CheckboxModule, ReactiveFormsModule],
});

const argTypes: ArgTypes = {
  labelPosition: {
    defaultValue: LabelPosition.Right,
    description: 'Расположение label относительно чекбокса',
  },
};

export default {
  title: 'Checkbox',
  decorators: [metadata],
  argTypes,
};

export const checkbox = ({
  form = new Form(new FormBuilder()),
  labelPosition,
}: any = {}): unknown => ({
  template: `
      <form [formGroup]="form.group">
        <checkbox formControlName="isAgree" [labelPosition]="labelPosition">
          checkbox label 1
        </checkbox>
        <checkbox formControlName="isAgree2" labelPosition="right">
          checkbox label 2
        </checkbox>
        <checkbox formControlName="isAgree3" labelPosition="ahead">
          checkbox label 3
        </checkbox>
        <checkbox formControlName="isAgree4" labelPosition="under">
          checkbox label 4
        </checkbox>
      </form>
    `,
  props: { form, labelPosition },
});

checkbox.storyName = 'Base';
