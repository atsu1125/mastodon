# frozen_string_literal: true

class AnnouncementPolicy < ApplicationPolicy
  def index?
    staff?
  end

  def create?
    staff?
  end

  def update?
    staff?
  end

  def destroy?
    admin?
  end
end
