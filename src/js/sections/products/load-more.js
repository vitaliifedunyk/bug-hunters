export class LoadMoreBtn {
  constructor({ selector, isHidden = true }) {
    this.button = document.querySelector(selector);
    
    if (this.button && isHidden) {
      this.hide();
    }
  }

  show() {
    if (this.button) {
      this.button.classList.remove('is-hidden');
    }
  }

  hide() {
    if (this.button) {
      this.button.classList.add('is-hidden');
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