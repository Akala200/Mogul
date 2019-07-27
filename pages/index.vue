<template>
  <section class="container-fluid padding-bottom-100">
      <h1 class="margin-top-90 query-title">
        <span>{{ query }}</span>
      </h1>
      <MainHeader />
      <Playlist />
      <MoreButton />
      <Player />
  </section>
</template>

<script>
import Playlist from '~/components/theplaylist.vue'
import MainHeader from '~/components/theheader.vue'
import MoreButton from '~/components/themorebutton.vue'
import Player from '~/components/theplayer.vue'
export default {
  components: {
    MainHeader,
    Playlist,
    MoreButton,
    Player
  },
  computed: {
    query () {
      return this.$store.getters.qetQuery
    }
  },
  mounted () {
    const songId = this.$route.query.song
    this.$route.query.song !== undefined ? this.$store.dispatch('getTrackById', songId) : this.$store.dispatch('searchByQuery')
  }
}
</script>
