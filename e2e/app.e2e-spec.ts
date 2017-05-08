import { XiaXiaListPage } from './app.po';

describe('xia-xia-list App', () => {
  let page: XiaXiaListPage;

  beforeEach(() => {
    page = new XiaXiaListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
