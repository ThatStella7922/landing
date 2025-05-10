# [Stella's Landing Site](https://thatstel.la)
- Index HTML v2025.0510.0
  - Main page structure
- Stylesheet v2025.0510.0
  - Styling, dark mode, layouts
- Quotes JavaScript v2025.0502.0
  - Handles quotes text under the nav buttons, sometimes does other messages
- EDR JavaScript v2023.0918.3
  - Doesn't do anything useful and instead lets the user blind themselves
- Cat JavaScript v2023.1030.1
  - Handles showing the cat video on the website
- ContentView JavaScript v2023.1128.2
  - Allows the user to switch between the different views on the site
- NTAS JavaScript v2024.0829.0
  - Shows NTAS widget when query string is present (see source)
- BloomRainbow.jpg
  - Background image, processed by me & sourced from Windows 11 24H2. Bloom into a new, more colorful tomorrow.

As always, file history in the commits.

## About
This site was born from the basic visual design of my [old landing site](https://github.com/ThatStella7922/old-landing-tng) which was essentially just someone else's site but modified to show my name, socials and background image.

I was running into issues when customizing it, so I challenged myself to get the same look while doing a complete rewrite from scratch. No ready-made frameworks, no code from the old site, just a fresh start. Overall, I think it's come out pretty well.

The site attempts to maintain compatibility with older browsers and operating systems, and as such it doesn't require HTTPS and will load on Android 5-era versions of the Android WebView, iOS 6 MobileSafari, IE9, etc. with "good enough" compatibility. It'll even be functional (albeit not very pretty) on even older browsers like IE**5**.

Another goal is to be optimized. Most websites these days transfer hundreds of megabytes of garbage with super heavy client-side scripts, and I wanted to *avoid* that. I'm proud to say that the site requires **under 1MB of data** to load, and avoids dynamic CSS blurs!\
<sub>As of v2025.0502.0!</sub>

I appreciate suggestions and new ideas for this website, as it's what most people first see from me. Create GitHub issues as needed, and I'll try to look into things.

## Development and contribution
Due to the principles above, this site is incredibly easy to work with.

The site uses just HTML, JavaScript, and CSS. No PHP for now, which makes locally serving it way easier than some other sites.

To get started with the site for local modification:
1. Clone repo
2. Visit index.html line 15 and follow the comment to edit the file so it uses local CSS
3. Start a local web server and visit the page
4. You are now ready to edit

You can use a live refreshing webserver in your IDE like [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) in VSCode, to make editing even quicker. Or you can use something as basic as Python's integrated webserver.

Do be aware that this site does reference some files from my files domain ([files.thatstel.la](https://files.thatstel.la)) on load, so you might want to copy the files locally and change the applicable paths for offline editing.

No building, no npm, no node, no Docker, just a good ol website.

### Contribution guidelines
If you'd like to contribute to this repository then by all means feel free to by sending a pull request or [contacting me](https://thatstel.la).

Do keep in mind though that this site attempts to keep compatibility with older devices and limited data plans, so please avoid things like intensive effects like dynamic blurs or huge images (over 1MB in size each).

## Third Party Resources
- [Font Awesome](https://fontawesome.com/) Free [(v6.4.0)](https://fontawesome.com/v6/docs/changelog/#v6-4-0)
  - Used for the icons on the landing site
- [Google Fonts](https://fonts.google.com/) (Oxygen, Hind)
- [Twitter Twemoji](https://github.com/twitter/twemoji)

---
<sub>With 💜 from Stella</sub></br>
<sub>shit says `<sub>` down here?? i thought i was the sub! - eva</sub>
