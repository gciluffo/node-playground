import { NodePlaygroundPage } from './app.po';

describe('node-playground App', function() {
  let page: NodePlaygroundPage;

  beforeEach(() => {
    page = new NodePlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
