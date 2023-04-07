async function handleRequest(params) {
  var a = "no value"
  // try{
  // await TEST.put("a", "this is a message")
  // a = await TEST.get("a'")
  // } catch (err){
  //   a = err
  // }
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'text':String(a)
    },
  }
  const url = 'https://jameswrc.github.io' + params

  const response = await fetch(url, init)
  const results = await gatherResponse(response)
  return new Response(results, init)
}
addEventListener('fetch', event => {
  var uri = event.request.url.replace(/^https:\/\/.*?\//gi, "/");
  let params = uri
  return event.respondWith(handleRequest(params))
})
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return JSON.stringify(await response.json())
  } else if (contentType.includes('application/text')) {
    return await response.text()
  } else if (contentType.includes('text/html')) {
    return await response.text()
  } else {
    return await response.text()
  }
}
/**
 * Example someHost at url is set up to respond with HTML
 * Replace url with the host you wish to send requests to
 */
