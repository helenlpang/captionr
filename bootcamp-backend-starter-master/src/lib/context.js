const { decodeToken } = require('../lib/auth')
const User = require('../models/User')

// The method exported here sets the context for all resolvers and refreshes tokens
module.exports = async ({ req, res }) => {
  // If login or register, skip auth requirements
  if (req.body.operationName === 'login' || req.body.operationName === 'register') {
    return ({
      req, res,
    })
  }
  if (!req.headers.authorization) {
    // No JWT present for auth
    return ({
      req,
      res,
    })
  }

  try {
    const {
      sub,
    } = decodeToken(req.headers.authorization)
    console.log("context headers", req.headers)
    const user = await User.query().findById(sub)
    return ({
      req,
      res,
      user,
    })
    // If failed context creation, make unathenticated request
  } catch (error) {
    return ({
      req, res,
    })
  }
}
