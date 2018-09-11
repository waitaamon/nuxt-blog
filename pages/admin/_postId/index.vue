<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default { 
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Amon Waita',
                title: 'my awesome post',
                content: 'my name is amon waita gathoka!!',
                thumbnailLink: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47d2b1f32cc05c976af4a39256e01cba&auto=format&fit=crop&w=750&q=80'
            }
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

