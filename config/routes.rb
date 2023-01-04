Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
  get '/tiles', to: 'tiles#index'
  get '/tiles/:id', to: 'tiles#show'
  patch '/tiles/:id', to: 'tiles#update'

  get '/pieces', to: 'pieces#index'

  get '/messages', to: 'messages#index'
  post '/messages', to: 'messages#create'

  get '/players', to: 'players#index'
  post '/players', to: 'players#create'
end
