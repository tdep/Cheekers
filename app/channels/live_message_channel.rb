class LiveMessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "live_message"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
