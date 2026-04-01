import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function initAccordion(rootSelector) {
  const accordionRoot = document.querySelector(rootSelector);

  if (!accordionRoot) return null;

  return new Accordion(rootSelector, {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
  });
}
