import { HanzoPage } from './app.po';

describe('hanzo App', () => {
  let page: HanzoPage;

  beforeEach(() => {
    page = new HanzoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
