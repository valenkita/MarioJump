# Jump Mario Jump!

![image](https://user-images.githubusercontent.com/26796418/192855932-70bebf02-4c06-45a8-b7cf-8f5021313d21.png)

Jump Mario Jump is a browser game for people of all ages. It is based on the No Internet Game as the T-Rex Game, Steve the Jumping Dinosaur, or Dino Runner and initially codenamed Project Bolan, is a built-in browser game in the Google Chrome Web Browser. The game was created by Sebastien Gabriel in 2014, and can be accessed by hitting the space bar when in offline mode on Google Chrome. To bring added value and interest the gameplay is complemented by the use of nostalgic designs from the popular Nintendo game Mario Bros’ and uses the title character Mario as the protagonist.

The main goal is to jump over as many pipes as you can, the speed will increase, and the appearance of the pipes will be random. The difficulty allows for it to be used by anyone however the further you go your concentration and focus are tested. These types of games are often simple but addictive, case in point the hugely popular flappy bird game (Flappy Bird, 2014), at its peak the game was being used by 50 million people (Cnet, 2014). Similarly, the well know, No Internet Game, is estimated to be used 270 million times a month (Officechai team, 2018). Therefore, the idea for this game was to use the format of simplicity, nostalgia and concentration to alleviate boredom and be useable by all age groups as a form of mind exercise. The gameplay is simple you only need a couple of keys to play the game, and there are no levels or complex storylines to navigate.

You can play the game following this link [Jump Mario Jump](https://valenkita.github.io/MarioJump/)

Disclaimer: This is part of a project and is recognised that the character of Mario belongs to the Nintendo group, there is no intention to commercialize this project.

## Table of Contents

### 

### Features

-   [Desktop design](#_Desktop_Design)
-   [Modal How to play](#modal-how-to-play)
-   [Score](#score)
-   [Speed](#speed)
-   [Pipes](#pipes)
-   [Restart](#restart)
-   [Footer](#footer)
-   [Future Features](#future-features)

[Design](#design)

-   [Colour Scheme and Imagery](#colour-scheme-and-imagery)
-   [Typography](#typography)

[User Experience](#user-experience)

-   [Goals and Objectives](#goals-and-objectives)
-   [User Stories](#user-stories)

[Technologies Used](#technologies-used)

-   [Languages used](#languages-used)
-   [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

[Testing](#testing)

-   [Testing User Stories from User Experience (UX) Section](#testing-user-stories-from-user-experience-ux-section)
-   [Validator testing](#validator-testing)

[Unfixed Bugs](#unfixed-bugs)

[Deployment](#deployment)

[Credits](#credits)

-   [Media](#media)
-   [Code](#code)
-   [Acknowledgements](#acknowledgements)

### Features

#### 

#### Desktop Design

This game was designed to be played on a laptop or desktop computer, as it is necessary to use a keyboard to play. The webpage is fully responsive, so it can be played on a tablet if the user has an external keyboard. It’s also responsive on mobile devices but can only be played using a spacebar, so the user needs to have a keyboard.

![image](https://user-images.githubusercontent.com/26796418/192856033-ad3b710a-5232-41c7-aa78-8a70d8fd7717.png)

#### Modal How to play

This Is a modal that is displayed when you click on the “How to play” button. The modal will show the instructions of the game. The instructions are intended to be clear and simple, easily understood by a wide audience inclusive of lower literacy skills.

The modal will disappear when the user clicks the “Close” button.

![image](https://user-images.githubusercontent.com/26796418/192856099-d5bcd39e-57ba-4815-87db-dddbcc96e183.png)

#### Score

Displays the current score, calculated by a timer. The timer resets to 0 every time Mario crashes with a pipe. The score is displayed in the top right corner of the screen. The score is calculated at 10 points per second of gameplay. The score is infinite.

![image](https://user-images.githubusercontent.com/26796418/192856156-9dd628b5-e2ea-4da4-b14c-9d4060caf8cb.png)

#### Speed

As the time passes, the speed will increase constantly and gradually. So as time passes the game gets faster and faster increasing the difficulty and therefore the concentration and focus needed. This was achieved using a speed scale.

#### Pipes

The pipes will appear randomly at are set at the same speed as the ground for a consistent visual effect. The random element was set using set intervals but choosing random to allow for a level of difficulty. As the game gets faster the pipes respond faster.

#### Restart

Once Mario Crashes, a message will be displayed. This message contains the instruction that if the user presses any key, the game will restart. The score and speed are reset, and the user has another try. The number of tries are unlimited as the custom in these games.

![image](https://user-images.githubusercontent.com/26796418/192856218-27f97b38-07d1-49e3-9c9a-e325bc46671d.png)

#### Footer

It is located at the bottom of the site and contains the name of the creator and a link to the developers Github.

![image](https://user-images.githubusercontent.com/26796418/192856247-433dc097-9c4b-448b-bdc1-77569b1932a7.png)

#### Future Features:

-   Addition of Music.
-   Addition of more obstacles, where Mario must duck instead of jump.
-   Change the background image as the score and speed are increasing.
-   Allow mobile users to use an onscreen key instead of a spacebar.

### Design

The design experience is intended to be pleasant, intuitive, fun and evoke nostalgia for Nintendo users. All features are self-explanatory and the game itself is like the No Internet Game and therefore widely recognized and intuitive. The rules are very simple and not detailed, purposefully to allow for a wide audience in age range, ability, language and comprehension.

#### Colour Scheme and Imagery

The colour and images chosen originate in the original Mario Bros’ games. The vibrant colours and attractive scene ensure a positive user experience. The ‘How to Play’ button is a blue background (\#87CEEB) and white (\#E0F6FF) contrast that blends in with the theme while standing out sufficiently to be recognizable by the user. The Score uses a more muted approach so as not to distract from gameplay, a plain black font in the top right-hand corner allows maximum concentration on the gameplay. The design and colours of the Modal ‘How to Play’ were selected to achieve maximum ease of use, simplicity and contrast. A white box with the Mario Character offset with clear simple instructions.

#### Typography

Fonts were sourced from Google Fonts. ' DotGothic16' was chosen for the logo and headings for its nostalgia quality.

### User Experience

#### Goals and Objectives

The objectives of the site are:

1.  For visitors to easily understand the purpose if the site and ease of playing.
2.  To present the user with a simple and fun game brain training, focusing on concentration and boredom alleviation for a wide section of abilities and age groups.
3.  To provide simple and clear instructions accessible to a wide audience.
4.  To present the game in a visually appealing vintage style.
5.  To deliver a responsive design.

#### User Stories

As a site visitor I want to:

-   Get simple clear game instructions
-   Easily navigate the functions
-   See a nostalgic appealing design
-   Use a vintage gameplay style
-   Use the game with minimal effort and keys
-   Repeat the game over and over
-   The game to become increasingly difficult
-   Encourage my concentration levels
-   Alleviate boredom
-   Know my score
-   Have a replay value
-   Restart the game without reloading the page
-   See the site creator details

### Technologies Used

#### Languages Used

-   JavaScript
-   HTML
-   CSS

#### Frameworks, Libraries & Programs Used

-   Gitpod
-   Github
-   Photoshop

### Testing

#### Testing User Stories from User Experience (UX) Section

• Get simple clear game instructions

A simple pleasantly designed modal appears on click with a one sentence instruction using just one key to play the game.

• Easily navigate the functions

How to play and play are easily identifiable buttons on the screen. Both operate on one click.

• See a nostalgic appealing design

The use of the Mario Bros’ theme from older consoles gives a vintage look in addition to an early iteration of the animation of 2d Mario.

• Use a vintage gameplay style

The animation and linear straight forward gameplay lends itself to vintage early console gaming.

• Use the game with minimal effort and keys

The spacebar is the only key necessary to engage and play the game.

• Repeat the game over and over

The game restarts automatically and without a refresh.

• The game to become increasingly difficult

The speed of the game increases with time, the pipes appear in a random order.

• Encourage my concentration levels

As the pipes are random the suer must concentrate, there is no repeating pattern.

• Alleviate boredom

The game is easy, fun and simple, borrowing form popular boredom killer games such as No Internet Dino and Flappy Bird gameplay.

• Know my score

The score is captured and displayed in the top right-hand corner of the screen. It automatically calculates based on the time the character survives.

• Have a replay value

You are encouraged to play the game over and over to try to beat your score and last longer, automatic restart with refresh makes this process smooth and user friendly.

• Restart the game without reloading the page

This feature is active.

• See the site creator details

The footer displays the creators details and link to their GitHub for further information and profile.

#### Validator Testing

**HTML** ([W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fvalenkita.github.io%2FMarioJump%2F))

Doesn’t show any warning or error, all features are working as intended.

![image](https://user-images.githubusercontent.com/26796418/192856368-b49e6e8b-acc3-468a-8408-946ecd4a92a8.png)

**W3c** [**CSS Validator**](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalenkita.github.io%2FMarioJump%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

Doesn’t show any error or warning, all features work as intended.

![image](https://user-images.githubusercontent.com/26796418/192856397-52c19cd9-04b9-4827-91f3-29c7e7819fb2.png)

[Lighthouse testing](https://www.webpagetest.org/result/220927_AiDcRC_GH1/)

Shows a performance of 93

Best practice 63: Score is reduced as the site is not protected with HTTPS

Score is also reduced as using a low-resolution image, however this is a design choice to meet the objective of nostalgic and vintage feel. Some browser errors were logged as a result of not operating a HTTPS.

![image](https://user-images.githubusercontent.com/26796418/192856631-9a812183-1b41-4824-a15a-cdd670dd8757.png)

### Unfixed Bugs

-   The modal does not adapt fully to the size of the screen
-   When the game starts for the very first time, some clouds appear in the left side of the screen



### Deployment

To Deploy this project, I used diverse resources:

The project was built on Gitpod.

A repository was created on Github.

To deploy the site, I used GitHub pages.

Live site: https: https://valenkita.github.io/MarioJump/

### Credits

#### Media

-   Mario Running and Jumping <https://www.pinterest.com.mx/pin/832180837375080291/?nic_v3=1a4htzDs5>
-   Mario GameOver, Pipe and Clouds

    <https://drive.google.com/drive/folders/1CYQ2CtPyiXcONexGfpQ1RnaPa30c7PNy>

-   Mario Modal  
    <https://www.kindpng.com/imgv/TTxbJRh_mario-bros-pixel-art-hd-png-download/>

#### Code

-   WebDebSimplified  
    https://github.com/WebDevSimplified/chrome-dino-game-clone

#### Acknowledgements

-   My mentor for their support and encouragement.
-   Class participants for their useful commentary and sharing of learning
-   Code institute tutor for their consistent efforts to ensure we are all always on track and not stressed.
