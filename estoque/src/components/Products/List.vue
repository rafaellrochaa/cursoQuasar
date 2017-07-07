<template>
  <div>
    <h4>Produtos</h4>
    <q-data-table
      :data="products"
      :columns="columns"
    ></q-data-table>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          label: 'Ano',
          field: 'Ano',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Categoria',
          field: 'Categoria',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Marca',
          field: 'Marca',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Modelo',
          field: 'Modelo',
          width: '100px',
          sort: true,
          filter: true
        }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.state.products.list
    }
  },
  mounted () {
    this.$store.dispatch('productList')
  }
}
</script>

<style>
</style>
