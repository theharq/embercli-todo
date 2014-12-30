import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    editTodo: function(){
      this.set("isEditing", true);
    },
    acceptChanges: function(){
      this.set('isEditing', false);

      if(Ember.isEmpty(this.get('model.title'))){
        this.send('removeTodo');
      }else{
        this.get('model').save();
      }
    },
    removeTodo: function(){
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});