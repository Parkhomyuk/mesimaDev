import { MesimaDevPage } from './app.po';

describe('mesima-dev App', () => {
  let page: MesimaDevPage;

  beforeEach(() => {
    page = new MesimaDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
