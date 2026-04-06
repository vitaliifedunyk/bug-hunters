export class LoadMoreBtn {
  constructor({ button, container, isHidden = true }) {
    this.button = button || null;
    this.container = container || null;
    
    if (this.button && isHidden) {
      this.hide();
    }
  }

  show() {
    if (this.button) {
      this.button.classList.remove('is-hidden');
    }

    if (this.container) {
      this.container.classList.remove('is-hidden');
    }
  }

  hide() {
    if (this.button) {
      this.button.classList.add('is-hidden');
    }

    if (this.container) {
      this.container.classList.add('is-hidden');
    }
  }

  disable() {
    if (this.button) {
      this.button.disabled = true;
    }
  }

  enable() {
    if (this.button) {
      this.button.disabled = false;
    }
  }

  checkHasMore(currentPage, totalPages) {
    if (currentPage >= totalPages) {
      this.hide();
      return false;
    }
    
    this.show();
    return true;
  }
}
