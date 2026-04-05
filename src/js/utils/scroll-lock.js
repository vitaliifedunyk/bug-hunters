let lockCount = 0;
let pendingUnlockId = null;
let initialBodyPaddingRight = '';
let isScrollLocked = false;

function getScrollbarWidth() {
  return Math.max(0, window.innerWidth - document.documentElement.clientWidth);
}

function applyScrollLock() {
  const computedPaddingRight = window.getComputedStyle(document.body).paddingRight;
  const currentPaddingRight = Number.parseFloat(computedPaddingRight) || 0;
  const scrollbarWidth = getScrollbarWidth();

  initialBodyPaddingRight = document.body.style.paddingRight;
  document.body.classList.add('no-scroll');
  isScrollLocked = true;

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
  }
}

function releaseScrollLock() {
  document.body.classList.remove('no-scroll');
  document.body.style.paddingRight = initialBodyPaddingRight;
  isScrollLocked = false;
}

export function lockScroll() {
  if (pendingUnlockId !== null) {
    window.clearTimeout(pendingUnlockId);
    pendingUnlockId = null;
  }

  if (lockCount === 0 && !isScrollLocked) {
    applyScrollLock();
  }

  lockCount += 1;
}

export function unlockScroll() {
  if (lockCount === 0) {
    return;
  }

  lockCount -= 1;

  if (lockCount > 0) {
    return;
  }

  pendingUnlockId = window.setTimeout(() => {
    pendingUnlockId = null;

    if (lockCount === 0) {
      releaseScrollLock();
    }
  }, 0);
}
