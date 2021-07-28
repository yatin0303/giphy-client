<template>
    <v-tabs
    centered
    background-color="primary"
    color="white--text"
    
    
  >
    <v-tab router to="/trending" replace >
      <v-icon>trending_up</v-icon>
      <span> &nbsp; Hot</span>
    </v-tab>
    <v-tab router to="/categories" replace>
      <v-icon>flutter_dash</v-icon>
      <span> &nbsp; category</span>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
    
}
</script>