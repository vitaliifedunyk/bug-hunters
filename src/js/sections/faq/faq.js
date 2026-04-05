import { createFaqAccordion } from '../../components/accordion/accordion.js';

let faqAccordionInstance;

export function initFaq() {
  const container = document.querySelector('.accordion-container');

  if (!container) {
    return;
  }

  if (faqAccordionInstance) {
    faqAccordionInstance.destroy();
  }

  faqAccordionInstance = createFaqAccordion(container);
}
