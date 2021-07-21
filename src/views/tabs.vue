<template>
    <v-tabs
    centered
    background-color="pink"
    
    
  >
    <v-tab router to="/trending">
      <v-icon>trending_up</v-icon>
      <span> &nbsp; Hot</span>
    </v-tab>
    <v-tab router to="/home">
        <v-icon>search</v-icon>
      <span> &nbsp; Search</span>
      
    </v-tab>
    <v-tab router to="/random">
      <v-icon>flutter_dash</v-icon>
      <span> &nbsp; Random</span>
    </v-tab>
  </v-tabs>
</template>
<script>
export default {
    
    
}
</script>