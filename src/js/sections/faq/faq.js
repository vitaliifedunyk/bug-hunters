import { createFaqAccordion } from '../../components/accordion/accordion.js';
import { refs } from '../../utils/refs.js';

let faqAccordionInstance;

export function initFaq() {
  const container = refs.faq.accordion;

  if (!container) {
    return;
  }

  if (faqAccordionInstance) {
    faqAccordionInstance.destroy();
  }

  faqAccordionInstance = createFaqAccordion(container);
}
