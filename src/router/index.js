// import HomeView from './views/HomeView.vue'
import HomeView from '@/views/HomeView.vue'
import AddDataBaseView from '@/views/AddDataBaseView.vue'
  // import AddDataBaseView from './views/AddDataBaseView.vue';
  import { ref, computed } from 'vue'

// export default function router() {
  
   const routes = {
    '/': HomeView,
    '/adddatabaseview': AddDataBaseView
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
// }