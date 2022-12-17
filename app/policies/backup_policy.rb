# frozen_string_literal: true

class BackupPolicy < ApplicationPolicy
  def create?
    user_signed_in?
  end
end
