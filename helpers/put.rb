def put(partial_name, locals = {})
  partial "partials/_#{partial_name}", locals: locals
end