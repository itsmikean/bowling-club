import App from './App';

describe('Bowling functions', () => {
  describe('state', () => {
    it('should be expected initial state', () => {
      const expectedInitialState = { allTries: [], currentTry: 0 };
      const app = new App({});
      expect(app.state).toEqual(expectedInitialState);
    });
  });
});
