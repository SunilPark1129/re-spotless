# Spotless
![spotless-bg](https://user-images.githubusercontent.com/106734133/199409702-ac757af9-42a5-4fce-988b-69877837e871.jpg)

Go to website - [Link](https://sp-spotless.netlify.app)

## Project Description

- Spotless, a laundromat.

## Features
> Features that I would like to introduce.

|Feature|Description|
|:--:|:--|
|Resposive|<img src="https://user-images.githubusercontent.com/106734133/199409766-e6878d03-1fa3-401f-8651-b6b0d2ad9236.jpg" width="400"><br><br>This website works with any window sizes. It is divided into mobile size, tablet size, and desktop size.|
|Slide Banner|<img src="https://user-images.githubusercontent.com/106734133/199409151-218603ca-3b0b-449f-b70c-51261a504b08.jpg" width="400"><br><br>Press the arrow button or click the dot at the bottom center to move to the selected index slide.|
|Animation|<img src="https://user-images.githubusercontent.com/106734133/199409241-733b58f7-0ad3-42e2-bfa0-1ffe3eb8650c.jpg" height="400"><br><br>When you scroll down on the homepage, animations are activated in the information section. Use the useObserver method to help the animation work by changing the value of isVisible to true when the scroll reaches the position of the section.|
|Dark Mode|<img src="https://user-images.githubusercontent.com/106734133/199409287-8852cf4c-e771-4464-ba3b-bfea602bb94e.jpg" height="400"><br><br>A Dark Mode (it's on the top right in Navabr section) to change from a light colored website to a dark colored website.|
|Dates|<img src="https://user-images.githubusercontent.com/106734133/199409435-a7798ac9-539f-4988-9d89-419c809dcc77.jpg" height="400"><br><br>This feature helps users to visually check what day of the week is today when checking open hours section. Determines the number from Sunday to Saturday from 0 to 7, compares it with the value obtained with getDay(), and changes the style when the value is the same.|

## Technology Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)


## Installation
1. Clone the repo
```
git clone https://github.com/SunilPark1129/re-spotless.git
```
2. Install all dependencies
```
npm install
```
> Dependencies I have installed :<br>react-router-dom<br> styled components<br> font awesome<br> 

3. run the website
```
npm start
```

## Self-improvement
> In the past, while creating a website, I took note of the parts that could be improved or that were difficult at the time to develop the website.
So I updated the old website with reference to this note for self-development. My Old Site - [Link](https://github.com/SunilPark1129/spotless)

- [x] I thought I should use more annotations to describe when using javascript.
  - I used a lot of comments above the coding to help understand.
- [x] I need to add more content and features.
  - Removed existing features and added dark mode, modal, and animation features.
- [x] It seems that JavaScript coding can be used more efficiently and lines can be further reduced.
  - I have optimized the lines of code using the map() method for repeatable coding. And for better performance of the website, rendering elements are minimized (Functions that can be rendered are divided into different file).

## Project Status
Completed
