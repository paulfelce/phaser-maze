'use strict';

let game = new Game(620, 620, Phaser.CANVAS, 'game');

game.state.add('CityState', CityState);
game.state.start('CityState');

game.state.onStateChange.add((newState) => {
    console.debug('State was changed:', newState);
});
