DigestsMiddleman: a Middleman static site generator for Web Development Weekly Digests
======================================================================================

This project allows writing digests in a clean Markdown format.

Then you can run Middleman to produce static HTML that can be published on Habrahabr.ru without modifications.


Writing digests
---------------

Digests go to the `/source/digests` folder.

Digests' filename must comply to the following format: `YYYY-MM-DD.html.md.erb`, e. g.: `2013-11-16.html.md.erb`, otherwise it will be ignored by Middleman.

Every digest file must contain a title in the [Frontmatter format](http://middlemanapp.com/frontmatter/):

```
---
title: Дайджест интересных материалов из мира веб-разработки и IT за последнюю неделю № 83 (10 — 16 ноября 2013)
---
```

Below the Frontmatter you can use the [Kramdown](http://kramdown.gettalong.org/quickref.html) flavor of the Markdown syntax.

You can also use [ERB](https://en.wikipedia.org/wiki/ERuby) to embed Ruby code. It is not of much use for writing digests, but ERB is also used to invoke helpers.


Available helpers
-----------------

There's a basic `partial` helper provided by Middleman. It can inject pieces of HTML into digests:

``` ruby
<%= partial 'partials/partialname' %>
```

Note that all DigestsMiddleman partials are written in Haml and stored in the `/source/partails` folder. Each partial should be prefixed with an underscore, otherwise Middleman will attempt generating an HTML page out of it (and fail).

You can pass options and local variables into partials when invoking them:

``` ruby
<%= partial 'partials/partialname', class: foo, locals: { bar: baz } %>
```

DigestsMiddleman has a `put` helper which is a shortcut to the default `partial` helper:

`<%= put 'foo', name: "Bar baz", id: :quux %>` is equal to `<%= partial 'partials/foo', locals: {name: "Bar baz", id: :quux} %>`



Available partials
------------------

### icon

There's a `/data/icons.yml` file that contains a list of icons, their alt texts and image URLs.

The `icon` partial accepts a `type` local variable which has to be equal to one of the icon names on that list:

``` ruby
<%= partial 'partials/icon', locals: { type: :habr } %>
```

Produces:

``` html
<img src="http://habr.habrastorage.org/post_images/ed7/acd/e0d/ed7acde0d9595da5536b9aea9a0b301b.png" alt="На Хабре">
```

There's also an `icon` helper which is a shortcut to invoking the `icon` partial:

`<%= icon :habr %>` is equal to `<%= partial 'partials/icon', locals: { type: :habr } %>`.


### title

Produces a title for a section of the digest.

The title partial accepts three local variables:

- `name` = the text of the title, required.
- `id` = the id for the title. Can be used to refer to ceratin digest section with a hash in the URL, e. g. `http://example.com/digests/2013-11-23/#design`. Defaults to `nil` (no id).

The partial will attempt to retrieve an icon with the same name as `id`. If there's no such icon, the `misc` icon is used.

Example usage:

``` ruby
<%= partial 'partials/title', locals: { name: "Веб-инструменты", id: :tools } %>
```

Produces:

``` html
<h2 id="tools">
  <img src="http://habr.habrastorage.org/post_images/c59/524/8ce/c595248cea9cbeab42ab6633d54d3782.gif" alt="Вэб-инструменты">
  Веб-инструменты
</h2>
```

There's also a `title` helper which is a shortcut to invoking the `title` partial:

`<%= title "Веб-инструменты", :tools %>` is equal to `<%= partial 'partials/title', locals: { name: "Веб-инструменты", id: :tools } %>`.


Running Middleman
-----------------

### Preparation

1. You'll need Ruby. Most likely, you already have Ruby in your system. If you don't install it. Ruby 1.8 is not supported. Ruby 2.0 is recommended on Windows. On *nix, only 1.9 is available due to [this bug](https://github.com/middleman/middleman/issues/1088). It is recommended to use [RVM](http://rvm.io/) to install Ruby on Linux and RubyInstaller on [Windows](http://rubyinstaller.org/).
2. Install Bundler: `gem install bundler`.
3. Pull the DigestsMiddleman project:
    git clone git@github.com:KharkivCSS/digest.git
    cd digest/
    git checkout middleman
4. Run `bundle` to install DigestsMiddleman dependencies.


### Running Middleman dynamically

1. Run `bundle exec middleman`.
2. Point your browser to http://localhost:4567/ .
3. When you're happy with your changes, share them:
  1. `git add -A`
  2. `git commit -m "State your changes here`
  3. `git push origin middleman`

### Having Middleman build a static website

1. Run `bundle exec middleman build`.
2. Upload the contents of the `build/` folder to a hosting.

### Uploading the static site to Github Pages for the first time

Note: the `gh-pages` branch on Github must not exist! Otherwise you would need to delete the remote `gh-pages` branch first (you can do that on the Github website).

1. `cd build/`
2. `rm -rf ./* && rm -rf ./.*`
3. `git clone git@github.com:KharkivCSS/digest.git .` (your repo here and don't forget the trailing dot)
4. `git checkout --oprhan gh-pages`
5. `git rm -rf .`
6. `cd ..`
7. `bundle exec middleman build`
8. `cd build/`
9. `git add -A`
10. `git commit -m "Initial commit"`
11. `git push origin gh-pages`.

### Updating the static site to Github Pages

If you don't have a git repo inside `/build/`:

1. `cd build/`
2. `git clone git@github.com:KharkivCSS/digest.git .` (your repo here and don't forget the trailing dot)
3. `git checkout gh-pages`
4. `cd ..`

When you have a git repo inside `/build`, do:

1. `bundle exec middleman build`
2. `cd build/`
3. `git add -A`
4. `git commit -m "State your changes here briefly"`
5. `git push origin gh-pages`