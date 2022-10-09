# frozen_string_literal: true

class PollPolicy < ApplicationPolicy
  def vote?
    StatusPolicy.new(current_account, record.status).show?
  end
end
