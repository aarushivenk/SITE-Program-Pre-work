# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aarushi Venkatakrishnan**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/imaginary-thinkable-newsboy

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Losing a game:
https://cdn.glitch.com/d7cfc34e-45bf-4e2c-8e52-df69cc63e47a%2Fezgif.com-gif-maker.gif?v=1616270974605

Winning a game: 
https://cdn.glitch.com/d7cfc34e-45bf-4e2c-8e52-df69cc63e47a%2Fezgif.com-gif-maker%20(1).gif?v=1616271177688

Out of time: 
https://cdn.glitch.com/d7cfc34e-45bf-4e2c-8e52-df69cc63e47a%2Fezgif.com-gif-maker%20(2).gif?v=1616271333112


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

For reference on how to make a timer, I used http://jsfiddle.net/Ankit47/6wm3eky9/. 

For reference on how to add audio, I used https://programminghead.com/how-to-play-audio-in-html-using-javascript/.

All sounds used in the game buttons came from mixkit.com: https://mixkit.co/free-sound-effects/. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One major challenge I encountered in creating this submission was implementing the sounds. With the code provided in the prework section itself, I was having trouble playing it in my browser, while it still worked in the side-by-side view. At times, the browser would work as well, so this caused a lot of confusion, with me debating whether this was an issue or not. After repeated times seeing that there were errors, I checked the console and found that I would need to implement another method in order to display sounds in the browser. 

The process of uncovering this error was especially challenging because I am still a beginner at understanding the JavaScript syntax. I also had to try new ways of debugging while reviewing the process conceptually. After trying different things by making slight adjustments to the syntax and commenting out lines, I realized that I needed to focus on the goal first, and work my way up. 

To do this, I decided to take on the optional feature of implementing a custom sound clip. Through this process, I dissected the existing code chunk, looking to answer these questions: what is the purpose of this line; are there any parameters/where are they coming from; how does this line interact with the others? After doing so, I started to understand the errors better and come up with the logic behind my solution. 

For example, one of the biggest conceptual issues I had was understanding how to reference a specific audio clip. I initially tried adding in an extra parameter in the JavaScript and changing the parameter passed through the html for each button, but it wasn’t working. I took a step-by-step approach to this problem, first trying to make every button play the same audio file. I made the change in the startTone function and then carried it through to the playTone function after I was sure that it was working. Then, I used the existing “freqMap” as a guide and created an “audioMap” to reference the audio IDs that I wanted and was able to successfully button specific sounds. 

What I took away from this experience was a self-made “checklist” of how to debug. In the future when I encounter frustrating code, I will (1) step back and understand the logic, (2) limit the variables, and (3) find a solution that can be tested. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

A) When designing a website meant to be interacted with, how do you determine the extent of user interactivity? In a standard website, which features are users likely to want to be able to modify and which would they want to be predetermined?

B) In this submission, we used HTML, CSS and JavaScript. Are there ways we could have still created a successful version of this submission with only 1 or 2 of these languages? 

C) What is the typical workflow a designer would go through when implementing features? Especially in a more complex design, how do you decide which features should be prioritized in development?

D) What are ways we can ensure that our design is accessible?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

With a few more hours to work on this project, I would love to tweak the aesthetics and make the game more challenging. First, the number one feature I would like to implement would be changing the button designs. I would also like to rework the audio functions so that when the game speeds up, the audio samples are audibly sped up, rather than cut short. Similarly, when the user presses a button at a certain pattern, the sound samples should be outputted at the same speed. Lastly, some key features I would like to change would be to display the game buttons in a grid and create opportunities for more user input, for example, by creating a toggle button to determine if sound effects should be displayed or tones and allowing the user to view/adjust the number of tones played in the pattern. 

What I loved the most about the game was the ability to call upon or challenge everyone’s inherent sense of synesthesia. People tend to link certain colors, sounds, and images together and this game would be a fun interactive way to assess to what degree synesthesia is happening. With more than a few hours, I would like to make two difficulty levels for this game. In the first level, the button’s color, sound, and image all “match” by our traditional conceptions (for example, a yellow button would display a chicken that would sound like a “cluck” when pressed). In the second level, we would randomize which image and sound appear, so in each iteration of the game (just like how the pattern randomizes), players would have to readjust and create connections that they may not typically associate with the buttons. 




## License

    Copyright Aarushi Venkatakrishnan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
