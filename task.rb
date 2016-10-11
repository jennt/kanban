require 'active_record'

class Task < ActiveRecord::Base
  validates :title, :status, :priority, presence: true
end
