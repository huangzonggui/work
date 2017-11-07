import md5 from 'blueimp-md5'
import queryString2object from '../utils/queryString2object'

export default (timestamp, v) => {
  let query = queryString2object()
  return md5(query.store_id + query.token + timestamp + v)
}
