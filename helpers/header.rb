def header(name, id = nil)
  partial 'partials/title', locals: { name: name, id: id }
end