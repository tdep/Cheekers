class LiveMessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "live_message"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end

  # def speak(data)
  #   ActionCable.server.broadcast "live_message", message: data["message"], sent_by: data["name"]
  # end
  
end
