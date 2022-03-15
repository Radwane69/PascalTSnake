import assert from "assert";
import {
    PascalTSnake
} from '../js/app.';
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('str', function () {
    describe('PascalTSnake()', function () {
        it('should return test_controller', function () {
            assert.equal(PascalTSnake('TestController'), 'test_controller')
        });
        it('should return MovieAndBook', function () {
            assert.equal(PascalTSnake('MovieAndBook'), ' movie_and_book')
        });
        it('should return App7Test', function () {
            assert.equal(PascalTSnake('App7Test'), 'app7_test')
        });
        it('should return Home', function () {
            assert.equal(PascalTSnake('Home'), 'home')
        });
        it('should return play-movie ', function () {
            assert.equal(PascalTSnake('play-movie'), 'play-movie')
        });
        it('should return 1', function () {
            assert.equal(PascalTSnake(1), '1');
        });
    });
});