# Kanban

*under development*

## Synopsis

This ruby program is a game of pick up sticks currently designed to take 2 players through a game.

## Code Example
```ruby   
post '/api/task' do
  task = Task.create(
    title: params[:title],
    status: params[:status],
    priority: params[:priority]
  ).to_json
end
  ```

## Motivation
Purposes for developing this program include:
  * To practice designing and building REST architecture
  * To practice designing and building REST API with Sinatra
  * Design and build a data-driven JavaScript UI w/ Ajax

## Authors
* Jenn Tustin
