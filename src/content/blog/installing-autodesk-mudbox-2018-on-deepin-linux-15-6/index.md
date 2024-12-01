---
title: Installing Autodesk Mudbox 2018 on Deepin Linux 15.6
description: Installing Autodesk Mudbox 2018 on Deepin Linux 15.6
pubDate: '2018-08-19'
updatedDate: '2024-12-01T03:51:14.436Z'
heroImage: /blog-placeholder-5.jpg
categories:
  - linux
  - tips-tricks
tags:
  - autodesk
  - linux
  - mudbox-2018
  - working
  - working-on-linux
---

\[tatsu\_section bg\_color= "" bg\_image= "" bg\_repeat= "no-repeat" bg\_attachment= "scroll" bg\_position= "top left" bg\_size= "cover" bg\_animation= "none" padding= '{"d":"15px 0px 15px 0px"}' margin= "0px 0px 0px 0px" border= "0px 0px 0px 0px" border\_color= "" bg\_video= "0" bg\_video\_mp4\_src= "" bg\_video\_ogg\_src= "" bg\_video\_webm\_src= "" bg\_overlay= "0" overlay\_color= "" full\_screen= "0" section\_id= "" section\_class= "" section\_title= "" offset\_section= "" offset\_value= "0" full\_screen\_header\_scheme= "background--dark" hide\_in= "0" key= "fuf8c529yqdtczfi"\]\[tatsu\_row full\_width= "0" no\_margin\_bottom= "0" equal\_height\_columns= "0" gutter= "medium" column\_spacing= "" fullscreen\_cols= "0" swap\_cols= "0" row\_id= "" row\_class= "" hide\_in= "0" layout= "1/1" key= "fuf8c52a7h824i3g"\]\[tatsu\_column bg\_color= "" bg\_image= "" bg\_repeat= "no-repeat" bg\_attachment= "scroll" bg\_position= '{"d":"top left"}' bg\_size= '{"d":"cover"}' padding= '{"d":"0px 0px 0px 0px"}' custom\_margin= "0" margin= '{"d":"0px 0px 0px 0px"}' border= '{"d":"0px 0px 0px 0px"}' border\_color= "" enable\_box\_shadow= "0" box\_shadow\_custom= "0 0 15px 0 rgba(198,202,202,0.4)" bg\_video= "0" bg\_video\_mp4\_src= "" bg\_video\_ogg\_src= "" bg\_video\_webm\_src= "" bg\_overlay= "0" overlay\_color= "" animate\_overlay= "none" link\_overlay= "" vertical\_align= "none" column\_offset= "0" offset= "0px 0px" z\_index= "0" column\_parallax= "0" animate= "0" animation\_type= "fadeIn" animation\_delay= "0" col\_id= "" column\_class= "" hide\_in= "0" layout= "1/1" key= "fuf8c52afc2zil5a"\]\[tatsu\_text max\_width= '{"d":"100"}' wrap\_alignment= "center" animate= "" animation\_type= "fadeIn" animation\_delay= "0" key= "fuf8c52amrbmz6qn"\]

<figure>

![](/blog-placeholder-5.jpg)

<figcaption>

Mudbox 2018 running on Deepin Linux 15.6

</figcaption>

</figure>

Following my [previous post on how to install Maya 2018 on Linux](https://namvu.net/2018/08/17/installing-autodesk-maya-2018-update-3-on-deepin-linux-15-6/), today I'm gonna be installing Mudbox 2018. But instead of forcing you to go through all that craps, I'm just going to condense the steps into this simple script. Just run this thing and be done with it. (If you need the installer, you can grab it [directly from Autodesk](http://trial2.autodesk.com/NET18SWDLD/2018/MBXPRO/ESD/Autodesk_Mudbox_2018_EFGJ_Linux64.tgz), for some reasons they try to hide the 2018 version from my account, only showing 2017 and older, I had to dig up half the server to hunt down this link) <!--more-->

```
#!/bin/bash
#2018 Nam Vu aka envigraphy
#envigraphy@gmail.com

# This script assumes that you have downloaded your copy of the mudbox.tgz to /home/namvu/Downloads/Autodesk/$MUDBOXINSTALL, and that it is named: Autodesk_Mudbox_2018_EFGJ_Linux64.tgz


#Setup a few vars (Change the file name here if your .tgz file has a different name)
#Also change the PRODUCTID if you are not installing Mudbox 2018 (for example, Mudbox 2016 has a PRODUCTID 498G1)
export MUDBOXINSTALL='Mudbox_2018_Installer'
export INSTALLFILE="Autodesk_Mudbox_2018_EFGJ_Linux64.tgz"
export RPM_INSTALL_PREFIX=/usr
export LD_LIBRARY_PATH=/opt/Autodesk/Adlm/R12/lib64/
PRODUCTID="498J1"


if [ `whoami` != root ]; then
    echo Please run this script using sudo
    echo Just type “sudo !!”
    exit
fi
#Check for 64-bit arch
if [/bin/uname -m != x86_64]; then
    echo Mudbox will only run on 64-bit linux. 
    echo Please install a 64-bit Linux distro and try again.
    exit
fi


#Install Message
echo "You’re about to install Autodesk Mudbox 2018"
echo ""
echo "Do you wish to continue [Y/n]?"
read RESPONSE
case "$RESPONSE" in
  n*|N*)
  echo "Install Terminated"
  exit 0;
esac

#Get serial number
echo "Enter the serial number"
read SERIALNUMBER
echo ""

export INSTALLDIR=/home/namvu/Downloads/Autodesk/$MUDBOXINSTALL
cd $INSTALLDIR
chmod -R 777 $INSTALLDIR

# Install Dependencies
apt-get install csh tcsh libaudiofile-dev libglw1-mesa elfutils gamin libglw1-mesa-dev mesa-utils xfstt ttf-liberation ttf-mscorefonts-installer xfonts-100dpi xfonts-75dpi alien libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev libtiff5 openssl
sleep 3s


# Extract Mudbox Install Files
tar xvf $INSTALLDIR/$INSTALLFILE
# Convert rpms to debs
for i in $INSTALLDIR/*.rpm; do alien -cv $i; done
sleep 2s
#install the debs
dpkg -i --force-overwrite $INSTALLDIR/*.deb

#Required for license to install
cp libadlmPIT.so.11 /usr/lib/libadlmPIT.so.11
cp libadlmutil.so.11 /usr/lib/libadlmutil.so.11
ln -s /usr/lib/libadlmPIT.so.11 /usr/lib/libadlmPIT.so
ln -s /usr/lib/libadlmutil.so.11 /usr/lib/libadlmutil.so

# License Setup:
echo -e 'MUDBOX_LICENSE=unlimitednMUDBOX_LICENSE_METHOD=standalone' > /usr/autodesk/mudbox2018/bin/License.env

/usr/autodesk/mudbox2018/bin/adlmreg -i S $PRODUCTID $PRODUCTID 2018.0.0.F $SERIALNUMBER /var/opt/Autodesk/Adlm/Mudbox2018/MudboxConfig.pit
 
# symbolic links:
# libtiff
ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.5.2.0 /usr/lib/libtiff.so.3
sleep 2s

# check to see if libtiff.so.3 exists
if [ ! -e /usr/lib/x86_64-linux-gnu/libtiff.so.3 ]; then
  if [ ! -e /usr/lib/x86_64-linux-gnu/libtiff.so.5 ]; then
    echo "=========================================================================================="
    echo "Cannot locate libtiff.so.3 OR libtiff.so.5"
    echo "You will need to find a version of libtiff somewhere and make a symlink from /usr/lib/x86_64-linux-gnu/libtiff.so.3 to point to that file."
    echo "Normally libtiff libraries live in /usr/lib/x86_64-linux-gnu/"
    echo "So, go to that dir and see if you can find a version of libtiff.so."
    echo "Then make a symlink to that file by using the command:"
    echo "sudo ln -s  /usr/lib/x86_64-linux-gnu/libtiff.so.3"
    echo "For example: sudo ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.5 /usr/lib/x86_64-linux-gnu/libtiff.so.3"
    echo "Good luck!"
    echo "=========================================================================================="
  else
    ln -s /usr/lib/x86_64-linux-gnu/libtiff.so.5 /usr/lib/x86_64-linux-gnu/libtiff.so.3
  fi
fi
 
#Everything should work now... 
echo "Installation Complete."
echo ""
echo "Start Mudbox Now?"
read RUNNOW
case "$RUNNOW" in
  n*|N*)
  echo "You can run mudbox any time by typing mudbox into the terminal"
  exit 0;
esac
mudbox
```

\[/tatsu\_text\]\[/tatsu\_column\]\[/tatsu\_row\]\[/tatsu\_section\]
