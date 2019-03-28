Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :characters, only: [:index, :show, :update]
    get 'my_characters', to: 'characters#my_characters'
  end
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
