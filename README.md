# Fish Play 🐟

An interactive experiment that simulates a digital fish tank using the p5.play library built on top of p5.js.

## Description

Fish Play is a creative coding project that creates a small digital fish tank where each fish is an independent sprite with its own movement and behavior. The experiment explores motion dynamics, randomness, and user interaction through an engaging visual interface.

### Features

- **Random generation**: Every time the page is refreshed, the tank is repopulated with 5 new fish, each with random colors (red or yellow), sizes, and initial positions
- **Smooth animations**: Fish use animated sprites for swimming and idle actions
- **Hover interaction**: Hovering over a fish makes it pause momentarily, as if startled or curious, before resuming swimming with a new speed and direction
- **Click interaction**: Clicking anywhere in the tank drops a food flake, and the fish immediately react by moving toward it to eat
- **Realistic physics**: Fish bounce off the tank borders and follow natural movement dynamics

## Technologies used

- **p5.js**: JavaScript library for creative coding
- **p5.play**: Extension of p5.js for sprite and animation management
- **Vanilla JavaScript**: Fish behavior logic

## Project structure

```
fish-play/
├── img/                    # Animated fish sprites
│   ├── red_swim/          # Red fish swimming animations
│   ├── red_idle/          # Red fish idle animations
│   ├── yellow_swim/       # Yellow fish swimming animations
│   └── yellow_idle/       # Yellow fish idle animations
├── libs/                   # JavaScript libraries
│   ├── p5.min.js
│   └── p5.play.js
├── index.html             # Main page
├── main.js                # Game logic
└── package.json           # Project configuration
```

## Installation and setup

### Requirements

- Node.js installed on your system

### Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd fish-play
```

2. **Install dependencies** (optional, only if needed for build tasks)

```bash
npm install
```

3. **Start a local server**

You can use `npx serve` to quickly start a local server:

```bash
npx serve .
```

The project will be accessible at the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5000`).

### Alternative ways to start the server

If you prefer other methods to serve static files:

- **With Python 3**: `python -m http.server 8000`
- **With Python 2**: `python -m SimpleHTTPServer 8000`
- **With Node.js http-server**: `npx http-server`
- **With Live Server** (VSCode extension): right-click on `index.html` → "Open with Live Server"

## How to interact

1. **Observe**: Fish swim autonomously in the tank, bouncing off the borders
2. **Hover**: Move your cursor over a fish to make it pause momentarily
3. **Click**: Click anywhere in the tank to drop food; fish will immediately move toward it

## Project purpose

This project is a personal exploration of creative coding, with particular focus on:
- Sprite behavior and motion dynamics
- Randomness and procedural generation
- Real-time user interaction
- Physics and collisions in a 2D environment

A simple scene that comes alive through a few lines of logic.
