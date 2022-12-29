# frozen_string_literal: true

class InstancePolicy < ApplicationPolicy
  def index?
    staff?
  end

  def show?
    staff?
  end

  def destroy?
    admin?
  end
end
