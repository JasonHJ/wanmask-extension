module.exports = createProviderMiddleware

/**
 * Forwards an HTTP request to the current Wan3 provider
 *
 * @param {{ provider: Object }} config Configuration containing current Wan3 provider
 */
function createProviderMiddleware ({ provider }) {
  return (req, res, next, end) => {
    provider.sendAsync(req, (err, _res) => {
      if (err) return end(err)
      res.result = _res.result
      end()
    })
  }
}
