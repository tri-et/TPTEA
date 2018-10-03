import jwt from 'jsonwebtoken'

export async function generateLoginJwt(model, input, msg = '') {
  var user = await model.findOne({where: {username: input.username}})
  var tokenJwt = jwt.sign(
    {
      id: user.id,
      username: user.username,
      name: user.name,
      add: user.add,
      phone: user.phone,
      balance: user.balance,
      points: user.points,
    },
    process.env.JWT_SECRET,
    {expiresIn: '1y'}
  )
  return msg === '' ? tokenJwt : {token: tokenJwt, msg: msg}
}
