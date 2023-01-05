class MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  def create
    message = Message.create!(message: params[:message])
    #  player: params[:player_id]
    ActionCable.server.broadcast('live_message',
    {post: message
  })
    render json: message
  end
end
