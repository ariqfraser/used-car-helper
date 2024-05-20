import { Component } from '@angular/core';

@Component({
    selector: 'app-inspection-checklist',
    standalone: true,
    imports: [],
    templateUrl: './inspection-checklist.component.html',
    styleUrl: './inspection-checklist.component.scss',
})
export class InspectionChecklistComponent {
    data: any = [
        {
            heading: 'Inspect Engine Before Startup',
            checklist: [
                {
                    title: 'Does bonnet open easily?',
                    description: 'Does bonnet struts/support work?',
                },
                {
                    title: 'Does frame look correct? (Stright wings/fenders, no kinks)',
                    description: 'This could mean it has been in an accident.',
                },
                {
                    title: 'Check for leaks',
                    description:
                        'Check around and under the engine bay for leaks.',
                },
                {
                    title: 'Oil level condition',
                    description:
                        'Is oil level good? Does oil look old (dark/black)? Check for specks of metal or froth. That is bad walk away.',
                },
                {
                    title: 'Check coolant condition',
                    description:
                        'Is it a good colour. Colour can be decieving though bear that in mind. Is it clumpy?',
                },
                {
                    title: 'Hoses, belts, battry, wires',
                    description:
                        "Check for wear. Check belts for tension. Ensure wires aren't exposed/frayed.",
                },
                {
                    title: 'Is engine bay clean?',
                    description:
                        'This could mean two things. Its either well kept or they are hiding somehting. Ideally it should looks as if it has been used and maintained.',
                },
            ],
        },
        {
            heading: 'Inspect Engine on Cold Start',
            checklist: [
                { title: 'Does it take long to start?' },
                {
                    title: 'Strange noises/smoke?',
                },
                {
                    title: 'Does the motor move a lot?',
                    description: 'This could mean bad motor mounts.',
                },
                {
                    title: 'Check under oil cap.',
                    description:
                        'While the car is idling, remove the oil cap and place hand over to check for strong pulses. Ideally it should have a small push and pull.',
                },
                { title: 'Check exhause for smoke upon startup' },
            ],
        },
        {
            heading: 'Inspect Engine on warm start',
            checklist: [
                { title: 'Check everything in the cold start section again.' },
                {
                    title: 'Bubbling in radiator? (strange noises)',
                    description: 'Likely blown gasket',
                },
                { title: 'Check under oil cap (pulses/froth/smoke)' },
            ],
        },
    ];
}
