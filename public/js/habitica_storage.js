class HabiticaStorage {
  constructor(trello) {
    this.t = trello
  }

  getTask() {
    return this.t.get('card', 'private', 'task', {})
  }

  setTask(obj) {
    return this.t.get('card', 'private', 'task').then(current => {
      return this.t.set('card', 'private', 'task', Object.assign({}, current, obj))
    })
  }

  removeTask() {
    return this.t.remove('card', 'private', 'task')
  }

  getSettings() {
    let defaultSettings = {
      scope: 'me',
      priority: '1'
    }
    return this.t.get('member', 'private', 'settings', defaultSettings)
  }

  setSettings(obj) {
    return this.t.get('member', 'private', 'settings').then(current => {
      return this.t.set('member', 'private', 'settings', Object.assign({}, current, obj))
    })
  }

  getLists() {
    return this.t.get('board', 'private', 'lists', {})
  }

  setLists(obj) {
    return this.t.set('board', 'private', 'lists', obj)
  }
}
