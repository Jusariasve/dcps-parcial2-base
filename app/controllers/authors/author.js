import Controller from '@ember/controller';

export default Controller.extend({
  msgDelete: null;

  actions:{
    deletePost(blogPost){
      let answer = confirm('Do you want delete this post?');
      if (answer == true) {
        this.get('model').posts.removeObject(blogPost);
        blogPost.destroyRecord();
        alert('The post is deleted');
      }
      else{
        alert('The post isnt deleted');
      }
    }
  }
});
