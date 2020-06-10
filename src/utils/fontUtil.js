class FontUtil {
  constructor() {
    this._rootFontSize = localStorage.getItem('rootFontSize');
  }

  get rootFontSize() {
    return this._rootFontSize || 16;
  }

  set rootFontSize(newFontSize) {
    this._rootFontSize = newFontSize;
    localStorage.setItem('rootFontSize', newFontSize);
  }

  incrementSize(val = 1) {
    this.rootFontSize += val;
    return this._rootFontSize;
  }

  decrementSize(val = 1) {
    this.rootFontSize -= val;
    return this._rootFontSize;
  }

  resetSize() {
    this.rootFontSize = 16;
    return this._rootFontSize;
  }
}

export default new FontUtil();
