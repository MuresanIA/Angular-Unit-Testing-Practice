import { ReversePipe } from "./reverse.pipe";



// Isolated testing
describe('UserComponent', () => {
    it(`should create the app`, () => {
        let reversePipe = new ReversePipe();
      expect(reversePipe.transform('hello')).toEqual('olleh');
    });

});
