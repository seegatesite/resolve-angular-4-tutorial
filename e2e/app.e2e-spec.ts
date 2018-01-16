import { TestResolvePage } from './app.po';

describe('test-resolve App', () => {
  let page: TestResolvePage;

  beforeEach(() => {
    page = new TestResolvePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
