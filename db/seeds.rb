50.times do
  name = Faker::TvShows::Simpsons.character
  location = Faker::TvShows::Simpsons.location
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4')
  Character.create(name: name, location: location, avatar: avatar)
end

puts "50 Simpsons Seeded"