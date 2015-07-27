var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'AOE HTML5 presentation slides',
    subtitle: 'Super important subtitle',
    date: '01.01.2000',
    //eventInfo: {
    //  title: 'Google I/O',
    //  date: '6/x/2013'
    //},
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/aoe_small_24x24.png',
    fonts: [
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Firstname Lastname',
    company: 'Developer<br>AOE GmbH',
    gplus: 'https://google.com/+YourVanityURL',
    twitter: '@your-handle',
    www: 'https://www.aoe.com',
    github: 'https://github.com/AOEpeople'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};
