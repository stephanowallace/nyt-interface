import FontUtil from './fontUtil';

describe('fontUtil', () => {
  it('gets default fontSize', () => {
    localStorage.removeItem('rootFontSize');
    expect(FontUtil.rootFontSize).toBe(16);
  });

  it('sets new font size', () => {
    FontUtil.rootFontSize = 20;
    expect(parseInt(localStorage.getItem('rootFontSize'), 10)).toBe(20);
  });

  it('increments size', () => {
    FontUtil.rootFontSize = 16;
    FontUtil.incrementSize();
    expect(FontUtil.rootFontSize).toBe(17);

    FontUtil.incrementSize(10);
    expect(FontUtil.rootFontSize).toBe(27);
  });

  it('decrements size', () => {
    FontUtil.rootFontSize = 16;
    FontUtil.decrementSize();
    expect(FontUtil.rootFontSize).toBe(15);

    FontUtil.decrementSize(10);
    expect(FontUtil.rootFontSize).toBe(5);
  });

  it('resets size', () => {
    FontUtil.resetSize();
    expect(FontUtil.rootFontSize).toBe(16);
  });
});
