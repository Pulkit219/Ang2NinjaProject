import { Ninja2Page } from './app.po';

describe('ninja2 App', function() {
  let page: Ninja2Page;

  beforeEach(() => {
    page = new Ninja2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
