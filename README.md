# IdeaBox

## Table of Contents
  - [Introduction](#introduction)
  - [Deployed Page](#deployed-page)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Workflow](#workflow)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Sources](#sources)
  - [Project Specs](#project-specs)
  - [Post-Submission Work](#post-submission-work)

## Introduction
  Users are welcome to visit IdeaBox to store any ideas that passes their mind. This application allows our users to create a card with a title and a body with the description of their idea. The card will appear in the white area of the page. From here, they can choose to delete a card or favorite it. Favorite cards are saved and remain on the page for users to review as they wish.

  This project was assigned as a part of Turing School of Software and Design's Front-End program, students had one week to complete it.

  *Changes were added to this project during an intermission break between Module 1 and Module 2 of Turing. Changes were based on instructor feedback recommendations.*

## Deployed Page
[Visit our IdeaBox website here!](https://ohclaire.github.io/ideabox-group-project/)

## Technologies
- Javascript
- HTML
- CSS
  - Flexbox


## Features
- When a user loads the page, they will see that it is divided into three sections: 
  1. The side bar holds the name of the website and the option for the user to filter their starred ideas using the **Show Starred Ideas** button. 
  2. The top purple section holds a form that will accept user inputs for Title and Body. The **Save** button only works after the user has entered text in the input fields. Once clicked, it will add a new card to the section below. 
  3. The bottom white section holds the idea cards. Each card has the Title and Body from the user's respective inputs. From here, the user can choose to **star** or **delete** the card. 
- The star icon will change colors when clicked.
- The x icon will remove or delete the card.

## Page Demo
![Example of button functionality](https://media.giphy.com/media/rxkhdjpUekW9SHgyL5/giphy.gif)

## Workflow
- This project was completed by mob coding. The number commits is not a clear representation of the work that each member contributed because everyone actively participated in writing each line of code. We did research throughout the project sessions while brainstorming solutions. This team worked well together, considered each member's ideas, and took initiative asking for help from mentors and cohortmates. 

## Possible Future Extensions
- Allow users to add a comment to their idea cards.
- Allow users to search for ideas based on title.
- Adding a scroll to our cards so the text length isn't restricted. 
- Add scroll to the card so the user can add as much text as they want in the body.

## Set Up
1. Fork and clone this repo.
2. Type `cd` to move into the root directory.
3. View the project in the browser by running `open index.html` in your terminal.

## Contributors
- [Catalyst](https://www.linkedin.com/in/catalyst-278156246/)
- [Derek Cooper](https://www.linkedin.com/in/derek-cooper-a8798323a/)
- [Hannah Celemen](https://www.linkedin.com/in/hannah-celemen/)

## Sources
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [W3Schools](https://www.w3schools.com/cssref/pr_class_cursor.asp)
- [BEM](http://getbem.com/introduction/)
- [Pluralsight](https://www.pluralsight.com/guides/semantic-html)
- [CSS-Tricks](css-tricks.com/snippets/css/a-guide-to-flexbox/)


## Project Specs
- The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/ideabox-group-v2.html).

## Post-Submission Work
- Filter and display starred cards when the "Show Starred Ideas" button is clicked
- Render button change when toggling between showing starred cards and all cards.
