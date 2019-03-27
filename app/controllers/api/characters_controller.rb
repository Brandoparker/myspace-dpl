class Api::CharactersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_character(current_user.liked_character)
  end

  def update
    current_user.liked_characters << params[:id].to_i
    current_user.save
  end
  
  def my_cats
    render json: User.liked(current_user.liked_cats)
  end

end