import Accordion from 'accordion-js';

let faqAccordionInstance;

export function initFaq() {
  const container = document.querySelector('.accordion-container');

  if (!container) {
    return;
  }

  if (faqAccordionInstance) {
    faqAccordionInstance.destroy();
  }

  faqAccordionInstance = new Accordion(container, {
    duration: 220,
    showMultiple: false,
    collapse: true,
  });
}