task :default do
  ['classes', 'array_append', 'sum_array', 'json_parse', 'sum'].each do |name|
    `bundle exec opal -cV benchs/ruby/#{name}.rb > dist/#{name}_rb.js`
  end
end