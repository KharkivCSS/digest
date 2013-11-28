def title(name, type = nil, id = nil)
  partial 'partials/title', locals: { name: name, id: id, type: type }
end