const item = (title, icon) => ({title, icon})

const items = [
  item('All posts', ''),
  item('Friends', ''),
  item('Messages', ''),
  item('Tags', ''),
  item('Settings', ''),
]

new Vue({
  el: "#menu-nav",
  data: {
    items: items,
    item: items[0],
    activeItem: 0
  },
  methods: {
    clickItem: function (index) {
      this.activeItem = index
      this.items[index]
    }
  }
})



const post = (title, text, avatar) => ({title, text, avatar})

const posts = [
  post('New boardrider shop', 'Hi, guys! I want show you a new cool place for are shoping...'),
  post('I love there', 'Hi, guys! I want show you a new cool place for are shoping...'),
  post('Not bad..', 'Hi, guys! I want show you a new cool place for are shoping...'),
  post('What i should to do?', 'Hi, guys! I want show you a new cool place for are shoping...'),
  post('I tell you one story...', 'Hi, guys! I want show you a new cool place for are shoping...'),
]

new Vue({
  el: "#main-posts",
  data: {
    posts: posts,
    post: posts[0],
    openedPost: 0
  },
  methods: {
    clickItem: function (index) {
      this.openedPost = index
      this.posts[index]
    }
  }
})
