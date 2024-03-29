type KVPair = {key: string, value: string | null}
export function getQueryParamsFromString (paramString: string) {
  if (!paramString) {
    return null
  }

  let paramsKeyValues: KVPair[] = []
  let params = paramString.split('&')
  for (let param of params) {
    let separatorIndex = param.indexOf('=')
    if (separatorIndex == -1) {
      paramsKeyValues.push({key: param, value: null})
    } else {
      let part1 = param.substr(0, separatorIndex)
      let part2 = param.substr(separatorIndex + 1)
      paramsKeyValues.push({key: part1, value: part2})
    }
  }
  return paramsKeyValues
}

console.log(getQueryParamsFromString("name=Milky&age=2&hairy=very_yes"))


