# Simon Game

This is a web-based version of the classic Simon game. In this game, you have to remember and repeat a sequence of colors that are flashed on the screen. The game starts with a single color and adds a new color to the sequence with each new level. The goal is to repeat the sequence correctly for as long as possible.

## How to Play

1. **Start the Game**: Press any key to start the game. The game will flash the first color.
2. **Repeat the Sequence**: After the game flashes the color(s), click the buttons in the same order as they were flashed.
3. **Continue**: Each time you successfully complete a sequence, a new color will be added, and the level will increase.
4. **Game Over**: If you click the wrong button, the game will end, and your score will be displayed. Press any key to restart.

## Features

- The game generates random sequences of colors as the level increases.
- Your highest score (levels completed) is stored in `localStorage` and displayed as the "Highest Score".
- The game can be restarted by pressing any key after a game over.

## Project Files

- **index.html**: The structure of the game, including the buttons and text elements.
- **style.css**: Styling for the game, including colors, button effects, and layout.
- **app.js**: JavaScript logic that handles game functionality, event listeners, sequence generation, and score tracking.

## Game Logic

1. When the user presses a key, the game starts, and a random color from the list of buttons is chosen and flashed.
2. The user must click the buttons in the correct order based on the flashed sequence.
3. If the user gets the sequence right, a new color is added, and the game advances to the next level.
4. If the user makes a mistake, the game ends, and the highest score is updated (if it's higher than the previous one).

## Installation and Usage

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/simon-game.git
