---
title: 'Working on Linux: Restore Firefox''s normal behavior'
description: 'Working on Linux: Restore Firefox''s normal behavior'
pubDate: '2018-08-15'
updatedDate: '2024-12-01T03:51:14.493Z'
heroImage: images/Configure-Firefox-without-About-Config-with-an-Add-on-01.png
categories:
  - linux
  - rants
  - tips-tricks
tags:
  - firefox
  - hacking
  - linux
---

\[tatsu\_section bg\_color= "" bg\_image= "" bg\_repeat= "no-repeat" bg\_attachment= "scroll" bg\_position= "top left" bg\_size= "cover" bg\_animation= "none" padding= '{"d":"15px 0px 15px 0px"}' margin= "0px 0px 0px 0px" border= "0px 0px 0px 0px" border\_color= "" bg\_video= "0" bg\_video\_mp4\_src= "" bg\_video\_ogg\_src= "" bg\_video\_webm\_src= "" bg\_overlay= "0" overlay\_color= "" full\_screen= "0" section\_id= "" section\_class= "" section\_title= "" offset\_section= "" offset\_value= "0" full\_screen\_header\_scheme= "background--dark" hide\_in= "0" key= "fugjj0q5vd3h8zhg"\]\[tatsu\_row full\_width= "0" no\_margin\_bottom= "0" equal\_height\_columns= "0" gutter= "medium" column\_spacing= "" fullscreen\_cols= "0" swap\_cols= "0" row\_id= "" row\_class= "" hide\_in= "0" layout= "1/1" key= "fugjj0q643adc6fb"\]\[tatsu\_column bg\_color= "" bg\_image= "" bg\_repeat= "no-repeat" bg\_attachment= "scroll" bg\_position= '{"d":"top left"}' bg\_size= '{"d":"cover"}' padding= '{"d":"0px 0px 0px 0px"}' custom\_margin= "0" margin= '{"d":"0px 0px 0px 0px"}' border= '{"d":"0px 0px 0px 0px"}' border\_color= "" enable\_box\_shadow= "0" box\_shadow\_custom= "0 0 15px 0 rgba(198,202,202,0.4)" bg\_video= "0" bg\_video\_mp4\_src= "" bg\_video\_ogg\_src= "" bg\_video\_webm\_src= "" bg\_overlay= "0" overlay\_color= "" animate\_overlay= "none" link\_overlay= "" vertical\_align= "none" column\_offset= "0" offset= "0px 0px" z\_index= "0" column\_parallax= "0" animate= "0" animation\_type= "fadeIn" animation\_delay= "0" col\_id= "" column\_class= "" hide\_in= "0" layout= "1/1" key= "fugjj0q6btau6ooy"\]\[tatsu\_text max\_width= '{"d":"100"}' wrap\_alignment= "center" animate= "" animation\_type= "fadeIn" animation\_delay= "0" key= "fugjj0q6ixkey8k"\]

![](images/Configure-Firefox-without-About-Config-with-an-Add-on-01.png)

One of my main gripe when switching from Windows to Linux is that my favorite web browser Firefox doesn't behave exactly the same way it does on Windows. Specifically, 2 things that bother me the most are:

- The Backspace button doesn't go back to the previous page
- Clicking on the url address bar doesn't automatically highlight the entire line.

Fortunately, it's possible to change those behaviors simply by fiddling around with the settings a little bit. You'd want to go to your **_about:config_** page and change the following values:

- Find **browser.backspace\_action** and set the value to **0** (default is 2 or something). This will make the backspace button behave as it does in Windows.
- Find **browser.urlbar.clickSelectAll** and set the value to **True**

And that's about it. Personally I can't understand why the developer would choose to keep these little annoyances. If it was just for a versions or two then we could accept it as bug but it's been many years since these behaviors were implemented. The fact they're still there mean that they are intended. Maybe they were made by Mozilla devs who are actually Microsoft moles who want to low-key diminish the user experience in Linux, I guess we'll probably never know.

\[/tatsu\_text\]\[/tatsu\_column\]\[/tatsu\_row\]\[/tatsu\_section\]
