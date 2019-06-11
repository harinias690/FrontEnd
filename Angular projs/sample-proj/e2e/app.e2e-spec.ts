import { SampleProjPage } from './app.po';

describe('sample-proj App', function() {
  let page: SampleProjPage;

  beforeEach(() => {
    page = new SampleProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
