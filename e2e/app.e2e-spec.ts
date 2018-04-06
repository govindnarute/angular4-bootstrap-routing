import { Angular4BootstrapRoutingPage } from './app.po';

describe('angular4-bootstrap-routing App', () => {
  let page: Angular4BootstrapRoutingPage;

  beforeEach(() => {
    page = new Angular4BootstrapRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
