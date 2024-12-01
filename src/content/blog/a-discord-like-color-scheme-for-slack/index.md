---
title: A Discord-like color scheme for Slack
description: A Discord-like color scheme for Slack
pubDate: '2018-08-23'
updatedDate: '2024-12-01T03:51:14.396Z'
heroImage: //images/2S1pnL1.png
categories:
  - tips-tricks
tags:
  - discord
  - namvu
  - slack
  - vunam
---

![](/blog/images/2S1pnL1.png)

I love Slack as a productivity chat client (except the ridiculous pricing) but there's one thing I think it could use some improvement, its color scheme. Looking at Slack after coming over from Discord is like looking directly at the sun. Slack does allow you to change the color scheme of the sidebar, but the main part that you look at, you can only change via loading a custom css via their _ssb-interop.js_ file. So here's how you do it:

<!--more-->

Find your Slack's application directory.

- Windows: `%homepath%\AppData\Local\slack\`
- Mac: `/Applications/Slack.app/Contents/`
- Linux: `/usr/lib/slack/` (Debian-based)

Open up the most recent version (3.3.0 for me) and open `resources\app.asar.unpacked\src\static\ssb-interop.js` and add this at the very bottom

```
document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://raw.githubusercontent.com/antroxx/slackstheme4EB/master/theme_05.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});
```

Then proceed to Slack setting and use the following colors for your side bar: `#2f3136,#3f4145,#7b8d96,#FFFFFF,#2f3136,#ffffff,#242526,#323436`

And there you have it ;)
