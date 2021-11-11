const Page = require('./page');

class HomePage extends Page {
  get count() {
    return $('#countVal');
  }

  get incrementBtn() {
    return $("#incrementBtn");
  }

  get decrementBtn() {
    return $("#decrementBtn");
  }

  increment(type) {
    let btn = this.incrementBtn;
    if (type === "decrement") {
      btn = this.decrementBtn;
    }
    return btn.click();
  }
}

module.exports = new HomePage();
