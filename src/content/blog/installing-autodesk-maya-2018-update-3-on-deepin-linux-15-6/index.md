---
title: Installing Autodesk Maya 2018 Update 3 on Deepin Linux 15.6
description: Installing Autodesk Maya 2018 Update 3 on Deepin Linux 15.6
pubDate: '2018-08-17'
updatedDate: '2024-12-01T03:51:14.435Z'
heroImage: ///images/xbISq6Z.png
categories:
  - linux
  - tips-tricks
tags: []
---

\[tatsu\_section bg\_color= "" bg\_image= "" bg\_repeat= "no-repeat" bg\_attachment= "scroll" bg\_position= "top left" bg\_size= "cover" bg\_animation= "none" padding= '{"d":"15px 0px 15px 0px"}' margin= "0px 0px 0px 0px" border= "0px 0px 0px 0px" border\_color= "" bg\_video= "0" bg\_video\_mp4\_src= "" bg\_video\_ogg\_src= "" bg\_video\_webm\_src= "" bg\_overlay= "0" overlay\_color= "" full\_screen= "0" section\_id= "" section\_class= "" section\_title= "" offset\_section= "" offset\_value= "0" full\_screen\_header\_scheme= "background--dark" hide\_in= "0" key= "fuctf4qujl6k8y1b"\]\[tatsu\_row full\_width= "0" no\_margin\_bottom= "0" equal\_height\_columns= "0" gutter= "medium" column\_spacing= "" fullscreen\_cols= "0" swap\_cols= "0" row\_id= "" row\_class= "" hide\_in= "0" layout= "1/1" key= "fuctf4qurh8mmq8q"\]\[tatsu\_column bg\_color= "" bg\_image= "" bg\_repeat= "no-repeat" bg\_attachment= "scroll" bg\_position= '{"d":"top left"}' bg\_size= '{"d":"cover"}' padding= '{"d":"0px 0px 0px 0px"}' custom\_margin= "0" margin= '{"d":"0px 0px 0px 0px"}' border= '{"d":"0px 0px 0px 0px"}' border\_color= "" enable\_box\_shadow= "0" box\_shadow\_custom= "0 0 15px 0 rgba(198,202,202,0.4)" bg\_video= "0" bg\_video\_mp4\_src= "" bg\_video\_ogg\_src= "" bg\_video\_webm\_src= "" bg\_overlay= "0" overlay\_color= "" animate\_overlay= "none" link\_overlay= "" vertical\_align= "none" column\_offset= "0" offset= "0px 0px" z\_index= "0" column\_parallax= "0" animate= "0" animation\_type= "fadeIn" animation\_delay= "0" col\_id= "" column\_class= "" hide\_in= "0" layout= "1/1" key= "fuctf4quz49g6nqk"\]\[tatsu\_text max\_width= '{"d":"100"}' wrap\_alignment= "center" animate= "" animation\_type= "fadeIn" animation\_delay= "0" key= "fuctf4r3w95528q3"\]

![](/blog/images/xbISq6Z.png)

Okay so this is pretty much a journal of how I managed to get Maya to run for the first time on one my my Linux boxes.

As you may have know, Autodesk is one of the major names in the graphic and VFX industry, with their line-up of industry standard softwares like 3DS Max, Maya etc.

Unfortunately, for some reasons they still couldn't hire a capable engineer who could create a half decent installer package for the Linux platform. Maya is the only software in their lineup that is still currently being maintained for Linux, and even then it's still using old packaging techniques from 20 years ago, made for RPM-based Linux distros (which made sense at the time since professional Linux distros are mostly RPM-based, Red Hat, CentOS, etc.). But 20 years later, with the rise of Ubuntu and its DEB-based variants, the RPM distros now hold only a fraction of the market share. And yet, for some reason, official Maya installer is still created with RPM in mind. I reckon it's either they couldn't afford a capable engineer, or the guy who's responsible for maintaining Linux installers is too old to learn new technologies (as an old guy working in the tech industry myself, I deeply sympathize).

<!--more-->

Luckily for them, a genius called Christoph Lameter came in and saved the day with Alien - a package converter which is capable of converting RPMs to DEBs. This little tool enabled something that the entire workforce under Autodesk couldn't achieve for many decades: making Maya work on DEB-based distro (granted there's still like a metric ton of dependencies errors that can and will drive you crazy if you have to figure them all out on your own, but that's why we're here right?). And to think Autodesk could've saved billions in salary expenses over the year just by hiring someone who knows how to do the job...but I digress.

Enough ranting, let's go to the topic at hand. I figure the screenshot below is why you are all here:

![](/blog/images/xbISq6Z.png)

Intrigued yet? That's right, Maya 2018.3 working perfectly under Deepin Linux (well, not perfectly, it's still puking a bunch of errors out in the terminal everytime it launches, but it's functional)

Now let's get to it.

Oh right, before we begin, make sure you have the latest driver for your graphic card. I'm using a 1050 TI, so the latest stable Linux stable version is nvidia-390 (or 396 for the cutting edge), unfortunately the latest one that works with Deepin is only 387, so I'm still stuck with that. But if you're on Ubuntu or something, you should definitely upgrade to the latest one.

#### 1\. Download Maya 2018.3

Okay first thing first, grab the official Maya 2018.3 installer from Autodesk server:

```
https://up.autodesk.com/2018/MAYA/4A3226EE-E90A-4E0A-9BE7-58D657D6F872/Autodesk_Maya_2018_3_Update_Linux_64bit.tgz
```

 

Extract it. We'll come back for it later

#### 2\. Installing Dependencies

Figure out the missing dependencies is the most nightmarish part if you're installing Maya for the first time, since Autodesk's incompetent engineers couldn't bake a proper dependency list into the installer. Luckily, after a lof of trial and error, I think I may have got a list of what is needed. Here's what you want to install:

```
sudo apt-get install -y libtbb-dev libtiff5-dev libssl-dev libpng12-dev libssl1.0.0 gcc libjpeg62
```

 

That's not all, you will also need to install the aforementioned Alien tool to convert the RPMs to DEBs

```
sudo apt-get install -y alien elfutils
```

 

Next, install the required multimedia, graphic libraries, and some fonts:

```
sudo apt-get install -y libaudiofile-dev libgstreamer-plugins-base0.10-0 libglw1-mesa libglw1-mesa-dev mesa-utils xfonts-100dpi xfonts-75dpi ttf-mscorefonts-installer fonts-liberation csh tcsh libfam0 libfam-dev xfstt
```

 

Welp, that's a lot of craps to install, imagine if you have to figure out how to install on your own, eh? BUT, that's not all, you will also need to install **libxp6** which is available [here](http://launchpadlibrarian.net/183708483/libxp6_1.0.2-2_amd64.deb):

You could install it using the GUI like a normal person, or you could be elitist and install it using the terminal:

```
wget http://launchpadlibrarian.net/183708483/libxp6_1.0.2-2_amd64.deb
```

 

```
sudo dpkg -i libxp6_1.0.2-2_amd64.deb
```

 

#### 3\. Converting the RPM

Now let's head back to that Maya installer folder that you downloaded earlier, you will see a bunch of RPMs in there just waiting to be converted. Execute this command in that folder (should be in the same folder that contains the _setup_ script)

```
sudo alien -cv *.rpm
```

 

It's gonna take a while, after everything is completed, install the sweet new DEBs:

```
sudo dpkg -i *.deb
```

 

(if you've installed other Autodesk software before, you _might_ get an error with trying to install a duplicate package, in that case, you need to use the switch _\--force-overwrite_ to force it to install)

Next, create an executable that always returns true (for rpm installer):

```
echo "int main (void) {return 0;}" > mayainstall.c
```

 

Compile it:

```
gcc mayainstall.c
```

 

Before next step, you'll want to back up your rpm

```
sudo mv -v /usr/bin/rpm /usr/bin/rpm_backup
```

 

Now you can copy the file over

```
sudo cp -v a.out /usr/bin/rpm
```

 

#### 4\. Linking Libaries

Yep, not only do you have to hunt down them dependencies, you also have to manually create symlinks for libs that Maya 2018 depends on, otherwise that shit won't run. Here's the commands to do that:

```
sudo ln -s /usr/lib/x86_64-linux-gnu/libtbb.so /usr/lib/x86_64-linux-gnu/libtbb_preview.so.2
sudo ln -s /usr/lib/x86_64-linux-gnu/libtiff.so /usr/lib/libtiff.so.3
sudo ln -s /usr/lib/x86_64-linux-gnu/libssl.so /usr/autodesk/maya2018/lib/libssl.so.10
sudo ln -s /usr/lib/x86_64-linux-gnu/libcrypto.so /usr/autodesk/maya2018/lib/libcrypto.so.10
```

 

#### 5\. Run Maya 2018.3 Setup Installer

Make sure the install script is executable:

```
sudo chmod +x setup
```

 

Then run it:

```
sudo ./setup
```

 

Go through the setup like usual, it should be very fast you pretty much already installed everything with the DEBs, this setup script will only help you create the menu entries and stuffs.

### 6\. Post installation

Yep, even after going through all that, you're not done yet. There's still a bunch of crap you need to do. First of all, you have to manually create the Temp folder for Maya:

```
sudo mkdir -p /usr/tmp
sudo chmod 777 /usr/tmp
```

 

Now make some directories for Maya config files:

```
mkdir -p ~/maya/2018 ~/maya/2018/syncColor/Shared
```

Run the following command to fix segmentation fault errors:

```
echo "MAYA_DISABLE_CIP=1" >> ~/maya/2018/Maya.env
```

If you get color management errors, try this:

```
echo "LC_ALL=C" >> ~/maya/2018/Maya.env
```

If that doesn't fix it, just disable color management error popups altogether:

```
echo "MAYA_CM_DISABLE_ERROR_POPUPS=1" >> ~/maya/2018/Maya.envecho "MAYA_COLOR_MGT_NO_LOGGING=1" >> ~/maya/2018/Maya.env
```

 

Next, you need to grant permissions to the following folders, this is so you don't have to launch Maya as a superuser (which means you can actually launch it from the Menu like a normal person)

```
chmod -Rfv 777 ~/maya 
chmod -Rfv 777 /var/opt/Autodesk/
chmod -Rfv 777 /usr/local/share/macrovision/storage/FLEXnet/
```

 

Now run the following commands to configure the fonts for Maya:

```
xset +fp /usr/share/fonts/X11/100dpi/
xset +fp /usr/share/fonts/X11/75dpi/
xset +fp rehash
```

 

#### Misc stuffs:

Fix Maya camera modifier key:

```
gsettings set org.gnome.desktop.wm.preferences mouse-button-modifier "Super"
```

 

Restore the rpm that we backed up in Step 3

```
sudo rm -v /usr/bin/rpm
sudo mv -v /usr/bin/rpm_backup /usr/bin/rpm
```

 

#### Run Maya 2018.3

Launch it from the menu or from

```
/usr/autodesk/maya2018/bin/maya.bin
```

 

And pray that it works, because after all them hoops you have to jump through, I'm sure you'd be real pissed if it doesn't

\[/tatsu\_text\]\[/tatsu\_column\]\[/tatsu\_row\]\[/tatsu\_section\]
