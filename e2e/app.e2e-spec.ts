import { CieloConsumerPage } from './app.po';

describe('cielo-consumer App', function() {
  let page: CieloConsumerPage;

  beforeEach(() => {
    page = new CieloConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
