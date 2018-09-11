<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{loadedPost.title}}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on: {{loadedPost.updatedDate}}</div>
                <div class="post-detail">written by: {{loadedPost.author}}</div>
            </div>
            <p class="post-content">{{loadedPost.content}}</p>
        </section>
        <section>
            <p>let me know what you think about this post, send mail to <a href="mailto:feedback@domain.com">feedback@domain.com</a></p>
        </section>
    </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve({
          loadedPost: {
              id: '1',
              title: "First Post(ID: " + context.params.id +")",
              previewText: "This is our first post!",
              author: 'Amon',
              updatedDate: new Date(),
              content: 'To define the parent component of a nested route, you need to create a Vue file with the same name as the directory which contain your children views.',
              thumbnail:"https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
          }
        })
      }, 1000);
    });    
  }
}
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

