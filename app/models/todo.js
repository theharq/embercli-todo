import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Start learning ember', isCompleted: true},
    {id: 2, title: 'Use the latest version of ember-cli', isCompleted: true},
    {id: 3, title: 'Make a todo mvc app version with ember-cli', isCompleted: false},
    {id: 4, title: 'Upload to github example', isCompleted: false}
  ]
});


export default Todo;