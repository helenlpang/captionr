const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    // import relevant tables with const User = require('./User')
    return {
        //TODO CREATE RELATION
    }
  }
}

module.exports = User
