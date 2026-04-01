export function scrollToTarget(targetSelector) {
  const targetElement = document.querySelector(targetSelector);

  if (!targetElement) return;

  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
