import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    deletePost(blogPost){
      let answer = confirm('Do you want delete this post?');
      if (answer == true) {
        this.get('model').posts.removeObject(blogPost);
        blogPost.destroyRecord();
      }
    }
  }
});
