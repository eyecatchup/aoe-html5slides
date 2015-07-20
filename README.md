<h1><img src="images/Logo_noclaim_orange_small.png"> HTML5 Slide Template</h1>

## Configuring the slides

Much of the deck is customized by changing the settings in [`slide_config.js`](slide_config.js).
Some of the customizations include the title, Analytics tracking ID, speaker
information (name, social urls, blog), web fonts to load, themes, and other
general behavior.

### Customizing the `#AOEpeople` hash

The bottom of the slides include `#AOEpeople` by default. If you'd like to change
this, please update the variable `$social-tags: '#AOEpeople';` in
[`/theme/scss/_variables.scss`](theme/scss/_variables.scss).

See the next section on "Editing CSS" before you go editing things.

---

## Editing CSS

[Compass](http://compass-style.org/install/) is a CSS preprocessor used to compile
SCSS/SASS into CSS. We chose SCSS for the new slide deck for maintainability,
easier browser compatibility, and because...it's the future!

That said, if not comfortable working with SCSS or don't want to learn something
new, not a problem. The generated .css files can already be found in
(see [`/theme/css`](theme/css)). You can just edit those and bypass SCSS altogether.
However, our recommendation is to use Compass. It's super easy to install and use.

### Installing Compass and making changes

First, install compass:

```
$ sudo gem update --system
$ sudo gem install compass
```

Next, you'll want to watch for changes to the exiting .scss files in [`/theme/scss`](theme/scss)
and any new one you add:

```
$ cd aoe-html5slides
$ compass watch
```

This command automatically recompiles the .scss file when you make a change.
Its corresponding .css file is output to [`/theme/css`](theme/css). Slick.

By default, [`config.rb`](config.rb) in the main project folder outputs minified
.css. It's a best practice after all! However, if you want unminified files,
run watch with the style output flag:

```
$ compass watch -s expanded
```

**Note:** You should not need to edit [`_base.scss`](theme/scss/_base.scss).

---

## Running the slides

The slides can be run locally from `file://` making development easy :)

### Running from a web server

If at some point you should need a web server, use [`serve.sh`](serve.sh). It will
launch a simple one and point your default browser to [`http://localhost:8000/template.html`](http://localhost:8000/template.html):

```
$ cd aoe-html5slides
$ ./serve.sh
```

You can also specify a custom port:

```
$ ./serve.sh 8080
```

On Windows, to start the web server, issue the following command instead:

```
# For Python 2.x
python -m SimpleHTTPServer [8080]

# For Python 3.x
python -m http.server [8080]
```

### Presenter mode

The slides contain a presenter mode feature (beta) to view + control the slides
from a popup window.

To enable presenter mode, add `presentme=true` to the URL: [http://localhost:8000/template.html?presentme=true](http://localhost:8000/template.html?presentme=true)

To disable presenter mode, hit [http://localhost:8000/template.html?presentme=false](http://localhost:8000/template.html?presentme=false)

Presenter mode is sticky, so refreshing the page will persist your settings.

---

## Want to use markdown to write your slides?

`python render.py` can do that for you.

Dependencies: jinja2, markdown.

```
pip install jinja2
pip install markdown
```

NOTE: Windows and Python are not the best friends. If you want to generate the slides from your md 
files in Windows, you must change the paths in the [`render.py`](scripts/md/render.py) script to 
use **absolute paths**!

---

That's all!
