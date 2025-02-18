import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { radixCircle, radixRadiobutton } from '@ng-icons/radix-icons';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { HlmButtonDirective } from '../button/helm/src';
import { HlmIconComponent } from '../icon/helm/src';
import { HlmCodeDirective, HlmSmallDirective } from '../typography/helm/src';
import { BrnRadioGroupImports } from './brain/src';
import { HlmRadioGroupImports } from './helm/src';

@Component({
	selector: 'radio-group-example',
	standalone: true,
	imports: [
		HlmRadioGroupImports,
		BrnRadioGroupImports,
		FormsModule,
		HlmIconComponent,
		HlmButtonDirective,
		HlmCodeDirective,
		HlmSmallDirective,
	],
	providers: [provideIcons({ radixRadiobutton, radixCircle })],
	template: `
		<small hlmSmall class="font-semibold">Choose a version</small>
		<brn-radio-group class="mb-4 space-y-1 font-mono text-sm font-medium" hlm [(ngModel)]="version">
			<brn-radio hlm value="16.1.4">
				<hlm-radio-indicator indicator />
				v16.1.4
			</brn-radio>
			<brn-radio hlm value="16.0.0">
				<hlm-radio-indicator indicator />
				v16.0.0
			</brn-radio>
			<brn-radio hlm value="15.8.0">
				<hlm-radio-indicator indicator />
				v15.8.0
			</brn-radio>
			<brn-radio disabled hlm value="15.2.0">
				<hlm-radio-indicator indicator />
				v15.2.0
			</brn-radio>
		</brn-radio-group>
		<div class="my-2 flex space-x-2">
			<button size="sm" hlmBtn variant="outline" (click)="version = '16.0.0'">Set to v16.0.0</button>
			<button size="sm" hlmBtn variant="outline" (click)="version = null">Reset</button>
		</div>
		<small hlmSmall class="mt-6 block font-semibold">
			Current Version:
			<code data-testid="currentVersion" hlmCode class="text-xs">{{ version ?? 'none' }}</code>
		</small>
	`,
})
class RadioGroupExampleComponent {
	version: string | null = '16.1.4';
}

const meta: Meta<{}> = {
	title: 'Radio Group',
	decorators: [
		moduleMetadata({
			imports: [RadioGroupExampleComponent],
			providers: [],
		}),
	],
};

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
	render: () => ({
		template: `<radio-group-example/>`,
	}),
};
