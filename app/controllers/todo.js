import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    editTodo: function(){
      this.set("isEditing", true);
    }
  }
});