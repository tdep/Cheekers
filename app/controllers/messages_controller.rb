class MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  def create
    message = Message.create!(message: params[:message], player_id: params[:player_id], name: params[:name])
    # name: params[:name]
    ActionCable.server.broadcast('live_message', {post: message })
    render json: message
  end
end
