class AddCharactersToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_characters, :text
  end
end
