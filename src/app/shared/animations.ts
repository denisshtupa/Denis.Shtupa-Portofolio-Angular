import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    // Initial style, start with small size and opacity
    style({ opacity: 0, transform: 'scale(0.5)' }),

    // Animation keyframes for the fade-in effect
    animate('1500ms', keyframes([
      style({ opacity: 0, transform: 'scale(0.5)', offset: 0 }),
      style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.5 }),
      style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
    ])),
  ]),
  transition(':leave', [
    // Animation keyframes for the fade-out effect
    animate('1500ms', keyframes([
      style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
      style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.5 }),
      style({ opacity: 0, transform: 'scale(0.5)', offset: 1 }),
    ])),
  ]),
]);
