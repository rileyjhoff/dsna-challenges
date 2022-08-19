# Real Take Home Challenges

Create a function that checks if a gameboard for the boardgame "connect 4" is a winning game board.

Code a function to flatten an array into one single array no matter how many array it may contain, for example [1,2,3[4,5]] becomes [1,2,3,4,5] or [1,[2],[3,[4,5]]] becomes [1,2,3,4,5]

take an array of arrays where each array has 2 data points ex. [[data, data],[data,data]] and turn it into an object where the 1st data point of each array is the key and the 2nd data point is the value within the object. 2. a take home exam with an already pre-coded function that returns 1-3 at random. within an react app code a stop light that 1. changes color at random using the function 2. has a switch so you can switch between random mode and a mode where the colors change in order.

The code challenge was to build an app, using React, that would call an API, any API, and interact with it in some way. The app should be styled using styled-components and be responsive, time permitting.

Write a function that takes an array and two letters, and returns true if the two letters appear in the array at least once.

[React Kata](https://gist.github.com/sanvean74/95d72e9f984dc80a68f270cffe3d73ee)

Create a React app with an input - when a user submits a username, make a call to GitHub's API and save a list of user data in a Firebase table. Display the table below the search input, adding to it as more searches are added. (Example solution from Alumni: Completed in TypeScript. https://github.com/devon-wolf/user-saver)

[React App Takehome](https://codesandbox.io/s/apprenticeship-takehome-wb5n9)

## Image Processor

Imagine that you're building an integration with an image processor that scans a shuffled stack of playing cards. The processor gives you two arrays, `suits` and `values`, that together represent that stack of cards. We want you to build a function that outputs these two arrays into a single, simple data structure, that enables the following functionality:

1. A software engineer can intuitively access any single card in the stack;
2. A software engineer can intuitively access a single card's suit or value;
3. You can pass in a third parameter, `sortingInstructions` to sort according to the following:
   a. 'unsorted': Retain the same order of the cards;
   b. 'suits': Sort by the suits, in alphabetically ascending order;
   c. 'values': Sort by the values, in the ascending order of value;
   d. 'suits,values': Sort by suits, then within the same suit, sort by values, both ascending.
   e. 'values,suits': Sort by values, then within the same value, sort by suit, both ascending.
4. Regardless of how the cards are sorted, you should be able to tell what the card's original position was.

As a limitation, you cannot use any built-in functions in your language of choice that will sort or otherwise order the cards "under the hood." In other words, you will create a sorting function from scratch. While you don't have to provide the most optimal solution to satisfy this challenge, we would like to hear a discussion of the advantages and limitations of your solution, from an execution time and a memory perspective. If you need clarification on any part of the problem, feel free to ask any questions.

(This can be used either as a straight algorithms challenge, or with the addition of a front-end).

For context, I gave this challenge as part of a presentation on tech interviews: https://docs.google.com/presentation/d/1mmikCd9gcEFS-DAvpZVKcSJS1xNJz1x5sL2yFLLo7fo/edit#slide=id.g7dba1a791e_0_205
