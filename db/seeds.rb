100.times do
  name = Faker::TvShows::Simpsons.character
  location = Faker::TvShows::Simpsons.location
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set2')
  Friend.create(name: name, location: location, avatar: avatar)
end

puts "100 Simpsons Seeded"