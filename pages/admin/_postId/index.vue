<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default { 
    layout: 'admin',
    components: {
        AdminPostForm
    },
    asyncData(context) {
        return axios.get(process.env.baseUrl + '/posts/' + context.params.postId + '.json')
            .then(res => {               
                return {
                    loadedPost: res.data                    
                }
            })
            .catch(e => context.error(e))
    },
    methods: {
        onSubmitted(editedPost) {
           this.$store.dispatch('editPost', {...editedPost, id: this.$route.params.postId})
           .then(() => {
               this.$router.push('/admin')
           })
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>

