# frozen_string_literal: true

class RulePolicy < ApplicationPolicy
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
