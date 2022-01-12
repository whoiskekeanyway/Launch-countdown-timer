# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)


### Screenshot

![](screenshot.png)

### Links

- Solution URL: [https://github.com/whoiskekeanyway/Launch-countdown-timer](https://github.com/whoiskekeanyway/Launch-countdown-timer)
- Live Site URL: [https://launchcountdown-timer.netlify.app/](https://launchcountdown-timer.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive design
- JavaScript


### What I learned

### Javacript
- The toString() method in Javascript is used with a number and converts the number to a string
- JavaScript Date objects represent a single moment in time in a platform-independent format.
- The Date object has a getTime() method that returns the number of milliseconds since 1 January 1970 UTC.
- The Date object has a getDate() method that returns the day of the month (from 1 to 31)
- The Date object has a getDay() method that returns the day of the week (from 0 to 6)
- The Date object has a getFullYear() method that returns the year (from 0 to 99)
- The Date object has a getHours() method that returns the hour (from 0 to 23)
- The Date object has a getMinutes() method that returns the minutes (from 0 to 59)
- The Date object has a getSeconds() method that returns the seconds (from 0 to 59)
- The Date object has a getMilliseconds() method that returns the milliseconds (from 0 to 999) and many other methods
- Using the Date object, we can create a new Date object with the current date and time
The setInterval() method calls a function at specified intervals (in milliseconds).


### CSS

- How to use two photos to create a background image
- How to position background images
- Positioning (top, right, bottom, left, etc)
- Display (block, inline, inline-block, none, etc)


```js
function updateTextSize() {
  const fonts = document.querySelector(".clock-day-value");
  const stringiFiedDays = calcDays.toString().length;

  if (stringiFiedDays === 3) {
    fonts.style.fontSize = "5rem";
  } else if (stringiFiedDays < 3) {
    fonts.style.fontSize = "8rem";
  }
}

when the value is updated to 3 letter then the font size will adjust to 5rem
when the value is updated to 2 letter then the font size will adjust to 8rem
```

## Author

- Website - [https://scriptsandtags.com]()
- Frontend Mentor - [https://www.frontendmentor.io/profile/whoiskekeanyway]()
- Twitter - [https://www.twitter.com/whoiskekeanyway]()
