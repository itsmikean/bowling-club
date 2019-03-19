import App from './App';

describe('Bowling functions', () => {
  describe('state', () => {
    it('should be expected initial state', () => {
      const expectedInitialState = { allTries: [], currentTry: 0 };
      const app = new App({});
      expect(app.state).toEqual(expectedInitialState);
    });
  });

  describe('isTryInValid', () => {
    it('should return true when trying to bowl is inValid', () => {
      const app = new App({});
      const allTries = [1,9,1,2,3];
      const currentTry = allTries.length;
      const pins = 8;
      const isTryInValid = app.isTryInValid(allTries, currentTry, pins);
      expect(isTryInValid).toBeTruthy();
    });

    it('should return false when trying to bowl is valid', () => {
      const app = new App({});
      const allTries = [1,9,1,2,3];
      const currentTry = allTries.length;
      const pins = 5;
      const isTryInValid = app.isTryInValid(allTries, currentTry, pins);
      expect(isTryInValid).toBeFalsy();
    });
  });
});
