const HomePage = require("../PageObj/home.page");

describe('Check The Page', () => {
    it('should display zero by default', async () => {
        HomePage.open();
        const count = await HomePage.count.getText();
        await expect(Number(count)).toBe(0);
    });

    it('should display one on incrementing', async () => {
        await HomePage.increment();
        const count = await HomePage.count.getText();
        await expect(Number(count)).toBe(1);
    })

    it('should display zero on decrementing', async () => {
        await HomePage.increment("decrement");
        const count = await HomePage.count.getText();
        await expect(Number(count)).toBe(0);
    })
});

