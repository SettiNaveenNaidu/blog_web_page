class RenameTopicColumnInDrafts < ActiveRecord::Migration[7.0]
  def change
    rename_column :drafts, :topic 
  end
end
