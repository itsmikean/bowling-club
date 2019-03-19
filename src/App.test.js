import App from './App';

describe('Bowling functions', () => {
  describe('initial state', () => {
    it('should have initial state', () => {
      const app = new App({});
      expect(app.state.allTries).toEqual([]);
      expect(app.state.currentTry).toBe(0);
    });
  });
});
