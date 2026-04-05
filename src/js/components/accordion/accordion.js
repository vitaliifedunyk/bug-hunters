import Accordion from 'accordion-js';

export function createFaqAccordion(container) {
  if (!container) {
    return null;
  }

  return new Accordion(container, {
    duration: 220,
    showMultiple: false,
    collapse: true,
  });
}
