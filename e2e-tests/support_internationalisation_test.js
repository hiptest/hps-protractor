describe('Support internationalisation', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  browser.get('http://localhost:8000');
  });

  it('No messages are displayed when machine is shut down', function () {
    // Tags: priority:1
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("");
  });

  describe('Messages are based on language', function () {
    function messagesAreBasedOnLanguage (language, ready_message) {
      // Well, sometimes, you just get a coffee.
      // Tags: priority:1
      // When I start the coffee machine using language "<language>"
      this.actionwords.iStartTheCoffeeMachineUsingLanguageLang(language);
      // Then message "<ready_message>" should be displayed
      this.actionwords.messageMessageShouldBeDisplayed(ready_message);
    }

    it('English', function () {
      messagesAreBasedOnLanguage.apply(this, ['en', 'Ready']);
    });

    it('French', function () {
      messagesAreBasedOnLanguage.apply(this, ['fr', 'Pret']);
    });
  });
});