source 'https://rubygems.org'

gem "middleman", "~>3.2.0"
gem "middleman-blog", "~> 3.4.1"

# Live-reloading plugin
#gem "middleman-livereload", "~> 3.1.0"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]


# Sass stuff

sass_dependencies = [
  "toolkit"
]

# Runs `gem` for each element in the array with require: false
sass_dependencies.each do |dep|
  dep = [dep] unless dep.is_a? Array
  dep << { require: false }
  gem *dep
end
