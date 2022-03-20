function getScreenName(source) {
  console.log(
    '🚀 ~ file: get-screen-name.ts ~ line 2 ~ getScreenName ~ source',
    source
  )
  return `${source.firstName}#${source.lastName}`
}

module.exports = getScreenName
