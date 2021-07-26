<template>
    <v-tabs
    centered
    background-color="#CCA8E9"
    color="white--text"
    
    
  >
    <v-tab router to="/trending">
      <v-icon>trending_up</v-icon>
      <span> &nbsp; Hot</span>
    </v-tab>
    <v-tab router to="/categories/animals">
      <v-icon>flutter_dash</v-icon>
      <span> &nbsp; category</span>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
    
    
}
</script>