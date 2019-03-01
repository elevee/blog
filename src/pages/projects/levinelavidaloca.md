---
title: "#LevineLaVidaLoca"
type: "project"
technologies: ["php", "javascript"]
logline: "Wedding Website and RSVP System"
logo: "levinelavidaloca"
github: "https://github.com/elevee/elevee.github.io"
---

Note: The Github for the RSVP Script can be found [here](https://github.com/elevee/wedding-rsvp).

### Purpose
Needed a wedding website for my own wedding to reference in the invitations, as well as an RSVP system to handle replies in a more immediate and reliable fashion than USPS mail by using invite codes.

### Tech involved
- PHP - needed backend scripting to handle rsvp functionality

- Google Sheets API - for communication with guest list. My wife and I had already been managing a shared Google spreadsheet in Sheets. By assigning custom invite codes to guests by party and including them in their mailed out invitations, the script would use the API to read guest data, return it to the site, and later write the user's preferences/responses back to said sheet. User selections would be persisted in the sheet so the form could repopulate if a response needed to be amended.

- PHPunit for testing framework

### Takeaways / Improvements

If we wanted to be more private with the wedding's details, we could've put the whole site behind an access wall unlocked by any of the guests' invite codes. 